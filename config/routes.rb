Rails.application.routes.draw do
  resources :reactions
  resources :users
  resources :locations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:create, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  delete '/resolved', to: 'locations#destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
