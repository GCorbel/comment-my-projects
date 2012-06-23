class Category < ActiveRecord::Base
  default_scope order: [:position, :label]

  has_many :projects, through: :category_projects
  has_many :category_projects

  attr_accessible :label, :position

  def to_s
    label
  end
end
