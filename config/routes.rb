Rails.application.routes.draw do
  root to: 'tasks#index'
  get '/reviews' => 'reviews#index'
end
