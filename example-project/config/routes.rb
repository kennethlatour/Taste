Rails.application.routes.draw do

  resources :painters
  resources :styles, only: [:create, :show, :destroy, :index]
  resources :tastes
  resources :users, only: [:create, :index, :show, :destroy, :update]

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
