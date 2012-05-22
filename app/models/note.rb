class Note < ActiveRecord::Base
  belongs_to :project
  belongs_to :category

  validates :value, presence: true
  validates :project, presence: true
  validates :category, presence: true

  attr_accessible :value, :project_id, :category_id, :project, :category
end
