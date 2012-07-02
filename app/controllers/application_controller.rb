#encoding=utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |excetion|
    flash[:error] = "Accès interdit"
    redirect_to root_url
  end

  def authenticate_admin_user!
    redirect_to new_user_session_path unless current_user
  end
end
