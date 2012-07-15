class Search
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  PROJECT_ALL = I18n.t("activemodel.search.project_all")
  PROJECT_COMMENT = I18n.t("activemodel.search.project_comment")
  PROJECT_DESCRIPTION = I18n.t("activemodel.search.project_description")
  PROJECT_CATEGORIES = [PROJECT_ALL, PROJECT_COMMENT, PROJECT_DESCRIPTION]
  
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
    word = "%#{text}%"
    conditions = 'projects.title ilike :word'
    projects = Project.select('projects.title')

    if category == PROJECT_COMMENT || category == PROJECT_ALL
      projects = projects.select('comments.message as comment_message')
                         .joins("LEFT OUTER JOIN comments ON comments.project_id = projects.id")
      conditions += " or comments.message ilike :word"
    end

    if category == PROJECT_DESCRIPTION || category == PROJECT_ALL
      projects = projects.select('category_projects.description as category_description')
                         .joins("LEFT OUTER JOIN category_projects ON category_projects.project_id = projects.id")
      conditions += ' or category_projects.description ilike :word'
    end

    projects = projects.where(type_id: project_type) if project_type.present?
    projects.where(conditions, word: word) 
  end
end
