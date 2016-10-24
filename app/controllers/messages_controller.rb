class MessagesController < ApplicationController
  def index
    @messages = Message.where(room_id: params[:room_id]).includes(:user)

    render json: @messages.to_json(:include => :user)
  end

  private
  def required_params
    params.require(:message).permit(:text, :room_id, meta: [])
  end
end
