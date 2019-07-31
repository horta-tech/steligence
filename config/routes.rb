Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/admin', to: "pages#admin_control_panel"

  resources :leads, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
