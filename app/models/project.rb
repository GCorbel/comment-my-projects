class Project < ActiveRecord::Base
  has_many(:categories, through: :category_projects)
  has_many :category_projects
  has_many :comments
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
end
