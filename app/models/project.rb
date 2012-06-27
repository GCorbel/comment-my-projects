class Project < ActiveRecord::Base
  has_many(:categories, through: :category_projects)
  has_many :category_projects
  has_many :comments
  has_many :notes
  has_many(:followers, through: :project_user_followers, source: :user)
  has_many :project_user_followers
  belongs_to :user

  attr_accessible :title, :url

  validates :title, presence: true
  validates :url, presence: true, format: { with: /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$/ix }

  after_create :add_general_category

  class << self
    def search(params = nil)
      if params
        Project.where('title like ?', "%#{params}%")
      else
        Project.all
      end
    end
  end

  def add_general_category
    category = Category.find_by_label 'General'
    CategoryProject.create(category: category,
                           project: self,
                           description: "#{title} : [#{url}](#{url})")
  end

  def note_for(category)
    values = notes_for(category).pluck(:value)
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

  def notes_for(category)
    notes.where(category_id: category.id)
  end

  def number_of_notes_for(category)
    notes_for(category).count
  end

  def add_follower(user)
    project_user_followers.create(user: user)
  end

  def remove_follower(user)
    followers.delete(user)
  end
end
