module RequestHelpers
  def sign_in(user = create(:user))
    login_as user, scope: :user
  end

  def wait_for_ajax
    wait_until { page.evaluate_script("jQuery.active") == 0 }
  end
end
