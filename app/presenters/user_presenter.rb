class UserPresenter
  def self.top_project(number)
    User.joins(:projects)
        .select("users.username")
        .select("users.id")
        .select("count(projects) as nb_projects")
        .group("users.id")
        .order("count(projects) DESC")
        .limit(number)
  end
end
