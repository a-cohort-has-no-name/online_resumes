Rails.application.routes.draw do
  get "/index" => "resumes#index"
  get "/resume/:id" => "resumes#show"
end
