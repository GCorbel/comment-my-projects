module RequestHelpers
  def sign_in(user = create(:user))
    login_as user, scope: :user
  end

  def wait_until
    require "timeout"
    Timeout.timeout(Capybara.default_wait_time) do
      sleep(0.1) until value = yield
      value
    end
  end
end
