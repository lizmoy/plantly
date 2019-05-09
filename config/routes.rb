Rails.application.routes.draw do
  root 'plants#index'
  post '/auth/login', to: 'authentication#login'
  resources :users

  resources :plants do
    resources :logs
  end
end
