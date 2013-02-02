class Authentication
  attr_reader :name, :email

  def initialize(omniauth)
    info = omniauth.info
    @name = info.name
    @email = info.email
  end

  def user
    model = User.find_by_username(name)
    unless model
      model = User.create_by_username_and_email(name, email)
    end
    model
  end

  def authenticated?
    user.present?
  end
end
