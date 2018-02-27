# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # That's all there is:
  prepend_view_path Rails.root.join("frontend")
end
