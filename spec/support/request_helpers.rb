module RequestHelpers
  def sign_in(user = create(:user))
    login_as user, scope: :user
  end
end
