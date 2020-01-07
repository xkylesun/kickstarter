# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#              api_projects GET    /api/projects(.:format)                                                                  api/projects#index {:format=>:json}
#                           POST   /api/projects(.:format)                                                                  api/projects#create {:format=>:json}
#           new_api_project GET    /api/projects/new(.:format)                                                              api/projects#new {:format=>:json}
#          edit_api_project GET    /api/projects/:id/edit(.:format)                                                         api/projects#edit {:format=>:json}
#               api_project GET    /api/projects/:id(.:format)                                                              api/projects#show {:format=>:json}
#                           PATCH  /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           PUT    /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           DELETE /api/projects/:id(.:format)                                                              api/projects#destroy {:format=>:json}
#         api_pledge_levels GET    /api/pledge_levels(.:format)                                                             api/pledge_levels#index {:format=>:json}
#                           POST   /api/pledge_levels(.:format)                                                             api/pledge_levels#create {:format=>:json}
#      new_api_pledge_level GET    /api/pledge_levels/new(.:format)                                                         api/pledge_levels#new {:format=>:json}
#     edit_api_pledge_level GET    /api/pledge_levels/:id/edit(.:format)                                                    api/pledge_levels#edit {:format=>:json}
#          api_pledge_level GET    /api/pledge_levels/:id(.:format)                                                         api/pledge_levels#show {:format=>:json}
#                           PATCH  /api/pledge_levels/:id(.:format)                                                         api/pledge_levels#update {:format=>:json}
#                           PUT    /api/pledge_levels/:id(.:format)                                                         api/pledge_levels#update {:format=>:json}
#                           DELETE /api/pledge_levels/:id(.:format)                                                         api/pledge_levels#destroy {:format=>:json}
#               api_pledges GET    /api/pledges(.:format)                                                                   api/pledges#index {:format=>:json}
#                           POST   /api/pledges(.:format)                                                                   api/pledges#create {:format=>:json}
#            new_api_pledge GET    /api/pledges/new(.:format)                                                               api/pledges#new {:format=>:json}
#           edit_api_pledge GET    /api/pledges/:id/edit(.:format)                                                          api/pledges#edit {:format=>:json}
#                api_pledge GET    /api/pledges/:id(.:format)                                                               api/pledges#show {:format=>:json}
#                           PATCH  /api/pledges/:id(.:format)                                                               api/pledges#update {:format=>:json}
#                           PUT    /api/pledges/:id(.:format)                                                               api/pledges#update {:format=>:json}
#                           DELETE /api/pledges/:id(.:format)                                                               api/pledges#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root


Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]

    resources :projects, defaults: {format: :json}
    resources :pledge_levels, defaults: {format: :json}
    resources :pledges, defaults: {format: :json}

  end
  
  root to: 'static_pages#root'
end
