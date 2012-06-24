class User < ActiveRecord::Base
  has_many :projects

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :username, :email, :password, :password_confirmation, :remember_me, :login
  attr_accessor :login

  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if reset_password_token = conditions[:reset_password_token]
      where(conditions).where(["reset_password_token = ?", reset_password_token]).first
    else
      login = conditions.delete(:login).downcase
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    end
  end

  def to_s
    username
  end

  def follow?(project)
    project.followers.include?(self)
  end
end
