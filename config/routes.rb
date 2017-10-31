Rails.application.routes.draw do
  get "/resumes" => "resumes#show"
  get "/test" => "resumes#test"
end
