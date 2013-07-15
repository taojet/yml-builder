require 'rubygems'
require 'sinatra'

set :public_folder, 'public'

get 'test' do
  "Hello from Sinatra on Heroku!"
end

get "/" do
  redirect '/index.html'
end
