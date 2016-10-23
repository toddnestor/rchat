class RoomsController < ApplicationController
  before_action :team_set, only: [:create]

  private
  def required_params
    params.require(:room).permit(:name, :direct, :private, meta: [])
  end

  def message_params
    params.require(:message).permit(:text, :room_id, meta: [])
  end
end
