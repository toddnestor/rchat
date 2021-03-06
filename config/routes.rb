Rails.application.routes.draw do
  devise_for :users, module: "users"

  root "application#home"

  match '*all' => 'application#cor', via: :options

  resources :teams, only: [:create, :update, :delete, :index]

  get "/team", to: "teams#show"

  resources :rooms, only: [:create, :update, :show, :delete, :index]

  resources :messages, only: [:index]

  mount ActionCable.server => '/cable'
end