class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    authenticate('Google')
  end

  def facebook
    authenticate('Facebook')
  end

  private

  def authenticate(kind)
    auth = Authentication.new(request.env["omniauth.auth"])
    if auth.authenticated?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", kind: kind
      sign_in_and_redirect auth.user
    else
      session["devise.user_attributes"] = auth.user.attributes
      redirect_to new_user_registration_url
    end
  end
end
