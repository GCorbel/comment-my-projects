class Search
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  PROJECT_ALL = I18n.t("activemodel.search.project_all")
  PROJECT_COMMENT = I18n.t("activemodel.search.project_comment")
  PROJECT_DESCRIPTION = I18n.t("activemodel.search.project_description")
  PROJECT_CATEGORIES = [PROJECT_DESCRIPTION, PROJECT_COMMENT]

  attr_accessor :text, :project_type, :category

  def initialize(attributes = {})
    attributes.each do |key, value|
      self.send("#{key}=", value)
    end
    @attributes = attributes
  end

  def persisted?
    false
  end

  def project_text_search
    projects = Project.select('projects.id, projects.title, projects.description')
      .select('MIN(comments.message) as comment_message')
      .joins("LEFT OUTER JOIN comments ON comments.item_id = projects.id")
      .group("projects.id")
      .order("projects.updated_at DESC")

    projects = projects.where(type_id: project_type) if project_type.present?
    add_conditions_for(projects, category)
  end

  private
  def add_conditions_for(projects, category)
    word = "%#{text}%"
    conditions = 'projects.title ilike :word'
    conditions += ' or projects.description ilike :word'

    if category == PROJECT_COMMENT
      conditions += " or comments.message ilike :word"
    end

    projects.where(conditions, word: word)
  end
end
