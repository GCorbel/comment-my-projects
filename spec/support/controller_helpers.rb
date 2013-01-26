module ControllerHelpers
  def sign_in(user = build_stubbed(:user))
    if user.nil?
      request.env['warden'].stubs(:authenticate!).
        and_throw(:warden, {scope: :user})
      controller.stubs(current_user: nil)
    else
      request.env['warden'].stubs(authenticate!: user)
      controller.stubs(current_user: user)
    end
  end
end
