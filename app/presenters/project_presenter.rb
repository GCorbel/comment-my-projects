class ProjectPresenter
  class << self
    delegate :top, to: Project
  end
end
