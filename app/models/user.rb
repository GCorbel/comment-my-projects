class User < ActiveRecord::Base
  has_many :projects

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
    :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :username, :email, :password, :password_confirmation,
    :remember_me, :login, :provider, :uid
  attr_accessor :login

  class << self
    def find_first_by_auth_conditions(warden_conditions)
      conditions = warden_conditions.dup
      if reset_password_token = conditions[:reset_password_token]
        where(conditions).where(["reset_password_token = ?", reset_password_token]).first
      else
        login = conditions.delete(:login).downcase
        where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
      end
    end

    def top_project(number)
      User.joins(:projects)
          .select("users.username")
          .select("users.id")
          .select("count(projects.id) as nb_projects")
          .group("users.id")
          .order("count(projects.id) DESC")
          .limit(number)
    end

    def create_with_omniauth_credentials(omniauth)
      info = omniauth.info
      name = info.name
      email = info.email
      provider = omniauth.provider
      uid = omniauth.uid

      User.create(username: name, email: email, provider: provider, uid: uid)
    end
  end

  def to_s
    username
  end

  def follow?(project)
    project.followers.include?(self)
  end

  def password_required?
    super && provider.blank?
  end
end
