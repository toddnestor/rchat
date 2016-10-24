class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{params[:room_id]}" if current_user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def current_user
    @current_user ||= User.find_by_auth_token(params[:auth_token])
  end

  def message(data)
    if current_user
      data['message'][:user_id] = current_user.id
      message = Message.create(data['message'])
      ActionCable.server.broadcast "room_#{message.room_id}", {message: message, user: message.user}
    end
  end
end