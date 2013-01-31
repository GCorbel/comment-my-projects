class UserPresenter
  class << self
    delegate :top_project, to: User
  end
end
