
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]

    resources :projects, defaults: {format: :json}, except: [:new, :edit]
    # resources :rewards, defaults: {format: :json}, only: [:create, :update, :destroy]
    resources :pledges, defaults: {format: :json}, only: [:create]

  end
  
  root to: 'static_pages#root'
end
