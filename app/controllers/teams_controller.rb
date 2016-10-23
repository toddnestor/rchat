class TeamsController < ApplicationController
  before_action :team_set, only: [:show]

  def show
    @rooms = @team.rooms

    render json: {team: @team, rooms: @rooms, user: current_user}
  end

  private
  def required_params
    team_params
  end
end
