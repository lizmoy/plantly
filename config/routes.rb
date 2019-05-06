Rails.application.routes.draw do
  resources :users do
  end

  resources :plants do
    resources :logs
  end
end
