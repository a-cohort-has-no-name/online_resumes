Rails.application.routes.draw do
  get "/" => "resumes#index"
  get "/resumes/:id" => "resumes#show"
end
