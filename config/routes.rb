Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"



  namespace :api, defaults: {format: :json} do 
    get 'products/search', to: "products#search"
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :products, only: [:show, :index]
    resources :carts, only: [:index, :create, :show, :update, :destroy]
  end 


  get '*path', to: 'static_pages#frontend_index'
  
end
