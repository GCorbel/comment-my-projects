class Note < ActiveRecord::Base
  belongs_to :project
  belongs_to :user
  belongs_to :tag, class_name: 'ActsAsTaggableOn::Tag'

  validates :value, presence: true
  validates :project, presence: true
  validates :user, presence: true

  attr_accessible :value, :project_id, :project, :tag, :tag_id, :user_id, :user
end
