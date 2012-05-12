class CategoryProject < ActiveRecord::Base
  belongs_to :project
  belongs_to :category

  attr_accessible :category, :description, :project
end
