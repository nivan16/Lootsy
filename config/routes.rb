Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :index]
    resources :products

    resources :users do
      resources :cart_items, only: [:index]
    end

    patch "/cart_item", to: "cart_items#update"
    delete "/cart_item", to: "cart_items#delete"
    
  end

end
