Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  resources :users

  resources :plants do
    resources :logs
  end
end
