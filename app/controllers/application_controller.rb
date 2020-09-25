# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include HandleErrors

  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!


  def react_app
    render file: 'public/index.html'
  end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up)
      devise_parameter_sanitizer.permit(:account_update)
    end
end
