class TeamsController < ApplicationController
  private
  def required_params
    params.require(:team).permit(:name, :subdomain, :logo, meta: [])
  end
end
