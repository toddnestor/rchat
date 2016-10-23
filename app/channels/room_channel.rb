class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{params[:room_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def message(data)
    data['message'][:user_id] = current_user.id
    message = Message.create(data['message'])
    ActionCable.server.broadcast "room_#{message.room_id}", message
  end
end