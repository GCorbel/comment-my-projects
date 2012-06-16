#encoding=utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |excetion|
    flash[:error] = "Accès interdit"
    redirect_to root_url
  end
end
