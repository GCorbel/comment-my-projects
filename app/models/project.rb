class Project < ActiveRecord::Base
  has_many(:categories, through: :category_projects)
  has_many :category_projects
  has_many :comments
  has_many :notes
  belongs_to :user

  attr_accessible :title, :url

  validates :title, presence: true
  validates :url, presence: true

  after_create :add_general_category

  def add_general_category
    link = ActionController::Base.helpers.link_to(url, url)
    category = Category.find_by_label 'General'
    CategoryProject.create(category: category,
                           project: self,
                           description: "#{title} : #{link}")
  end

  def note_for(category)
    values = notes.where(category_id: category.id).pluck(:value)
    result = (values.sum / values.count.to_d).round(1)
    result.nan? ? '-' : result
  end
end
