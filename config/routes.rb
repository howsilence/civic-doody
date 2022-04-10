Rails.application.routes.draw do
  resources :users
  resources :locations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'

  resources :sessions, only: [:create, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"



  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
