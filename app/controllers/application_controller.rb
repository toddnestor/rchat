class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  def index
    render json: model.all
  end

  def home

  end

  def create
    object = model.new(required_params)
    if object.save
      render json: object
    else
      render(
          json: object.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def show
    render json: model.find(params[:id])
  end

  def update
    object = model.find(params[:id])

    if object.update(required_params)
      render json: object
    else
      render(
          json: object.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def destroy
    object = model.find(params[:id])
    object.destroy
    render json: object
  end

  def model
    self.class.model
  end

  def self.model
    controller_name.classify.constantize
  end

  def cor
    # blank section for CORR
    render :text => ''
  end

  private
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT, PATCH, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

  def cors_preflight_check
    if request.method == :options
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT, PATCH, OPTIONS'
      headers['Access-Control-Allow-Headers'] = '*'
      headers['Access-Control-Max-Age'] = '1728000'
      render :text => '', :content_type => 'text/plain'
    end
  end

  def team_set
    host = request.referer
    # https://regex101.com/r/61G9JS/1
    match = host.match(/^(?:http(?:s)?\:\/\/)?([a-z0-9\-\_]+)\.rchat\.[com|dev]{3}(?:\:[0-9]{1,4})?(?:\/)?$/i)

    @team = Team.find_by_subdomain(match[1]) if match

    unless @team
      render(
          json: ["You must be logged into a team to perform that action"], status: :unprocessable_entity
      )
    end
  end

  def team_params
    params.require(:team).permit(:name, :subdomain, :logo, meta: [])
  end
end
