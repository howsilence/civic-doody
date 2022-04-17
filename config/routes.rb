Rails.application.routes.draw do
  
  resources :users, only: [:create, :show, :index, :destroy] do
    resources :reactions, only: [:create, :destroy, :show, :index]
    resources :locations, only: [:create, :destroy, :show, :index]
  end
  resources :locations, only: [:create, :show, :index, :destroy]
  resources :reactions, only: [:create, :show, :index, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:create, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  post "users/locations/:id", to: "locations#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
