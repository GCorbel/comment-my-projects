class Note < ActiveRecord::Base
  belongs_to :project

  validates :value, presence: true
  validates :project, presence: true

  attr_accessible :value, :project_id, :project
end
