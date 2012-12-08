class ProjectPresenter
  def self.top(number)
    Project.joins(:notes)
           .select("projects.title")
           .select("projects.id")
           .select("count(value) as nb_notes")
           .select("sum(value) as sum_notes")
           .group("projects.id")
           .order("(sum(value) /count(value)) DESC")
           .limit(number)
  end
end
