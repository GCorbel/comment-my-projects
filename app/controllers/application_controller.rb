class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |excetion|
    flash[:error] = I18n.t(".access_forbidden")
    redirect_to root_url
  end

  def authenticate_admin_user!
    if current_user.nil?
      redirect_to new_user_session_path
    elsif !current_user.admin
      redirect_to root_path, notice: t('application_controller.not_admin')
    end
  end
end
