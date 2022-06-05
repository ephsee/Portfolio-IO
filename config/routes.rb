Rails.application.routes.draw do
  resources :testers
  resources :uploads
  resources :messages
  resources :comments
  resources :personals
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
