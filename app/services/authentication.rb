class Authentication
  attr_reader :omniauth, :provider, :uid

  def initialize(omniauth)
    info = omniauth.info
    @omniauth = omniauth
    @provider = omniauth.provider
    @uid = omniauth.uid
  end

  def user
    @user ||=  User.find_by_provider_and_uid(provider, uid)
    unless @user
      @user = User.create_with_omniauth_credentials(omniauth)
    end
    @user
  end

  def authenticated?
    user.present? && user.valid?
  end
end
