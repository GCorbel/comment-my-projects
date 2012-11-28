#encoding=utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |excetion|
    flash[:error] = "Accès interdit"
    redirect_to root_url
  end

  def authenticate_admin_user!
    if current_user.nil?
      redirect_to new_user_session_path
    else !current_user.admin
      redirect_to root_path, notice: t('application_controller.not_admin')
    end
  end
end
