class Project < ActiveRecord::Base
  has_many(:categories, through: :category_projects)
  has_many :category_projects
  belongs_to :user

  attr_accessible :title, :url

  validates :title, presence: true
  validates :url, presence: true

  after_create :add_general_category

  def add_general_category
    category = Category.find_by_label 'General'
    CategoryProject.create(category_id: category, 
                           project_id: self,
                           description: 'Description de votre projet'
                          )
  end
end
