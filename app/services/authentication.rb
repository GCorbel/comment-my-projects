class Authentication
  attr_reader :name, :email, :provider, :uid

  def initialize(omniauth)
    info = omniauth.info
    @name = info.name
    @email = info.email
    @provider = omniauth.provider
    @uid = omniauth.uid
  end

  def user
    model = User.find_by_provider_and_uid(provider, uid)
    unless model
      model = User.create(username: name, email: email, provider: provider, uid: uid)
    end
    model
  end

  def authenticated?
    user.present?
  end
end
