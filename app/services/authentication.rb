class Authentication
  attr_reader :omniauth, :provider, :uid

  def initialize(omniauth)
    info = omniauth.info
    @omniauth = omniauth
    @provider = omniauth.provider
    @uid = omniauth.uid
  end

  def user
    model = User.find_by_provider_and_uid(provider, uid)
    unless model
      model = User.create_with_omniauth_credentials(omniauth)
    end
    model
  end

  def authenticated?
    user.present?
  end
end
