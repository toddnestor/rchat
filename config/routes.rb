Rails.application.routes.draw do
  devise_for :users, module: "users"

  match '*all' => 'application#cor', via: :options

  resources :teams, only: [:create, :update, :show, :delete, :index]
  resources :rooms, only: [:create, :update, :show, :delete, :index]
end