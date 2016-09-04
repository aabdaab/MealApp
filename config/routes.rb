Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'

  scope '/api' do
    resources :restaurants, only: [:show, :index] do
      resources :meals, :only => [:show, :index]
      resources :orders, :only => [:show, :index]
    end

    resources :orders, only: [:create, :show, :index, :update, :destroy]
    resources :meals, only: [:show, :index]

    resources :users, only: [:create, :show, :index, :destroy] do
      resources :orders, only: [:create, :show, :index, :destroy]
    end
  end

end
