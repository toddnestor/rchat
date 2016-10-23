class TeamsController < ApplicationController
  private
  def required_params
    params.require(:message).permit(:text, :room_id, meta: [])
  end
end
