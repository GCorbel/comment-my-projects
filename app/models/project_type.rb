class ProjectType < ActiveRecord::Base
  default_scope { order(:label) }

  has_many :projects, foreign_key: 'type_id'

  attr_accessible :label

  def to_s
    label
  end
end
