class Project < ActiveRecord::Base
  has_many(:categories, through: :category_projects)
  has_many :category_projects
  has_many :comments
  has_many :notes
  belongs_to :user

  attr_accessible :title, :url

  validates :title, presence: true
  validates :url, presence: true, format: { with: /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/ix }

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
    return nil if values.empty?
    (values.sum / values.count.to_f).round(1)
  end

  def to_param
    "#{id}-#{title.parameterize}"
  end

  def to_s
    title
  end

  def root_comments
    comments.where(ancestry: nil)
  end

  def add_comment(comment)
    comments << comment
  end
end
