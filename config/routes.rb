Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index'
      # post 'posts/create'
      get 'posts/:id', to: 'posts#show'
      # delete '/destroy/:id', to: 'posts#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
