class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    auth = Authentication.new(request.env["omniauth.auth"])
    if auth.authenticated?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", kind: "Google"
      sign_in_and_redirect auth.user
    else
      redirect_to new_user_registration_url
    end
  end
end
