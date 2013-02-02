class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google
    auth = Authentication.new(request.env["omniauth.auth"].to_yaml)
    if auth.authenticated?
      flash[:notice] =
        I18n.t "devise.omniauth_callbacks.success", kind: "Google"
      sign_in_and_redirect @user, event: :authentication
    else
      session["devise.user_attributes"] = user.attributes
      redirect_to new_user_registration_url
    end
  end
end
