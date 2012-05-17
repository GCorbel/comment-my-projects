class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :project
  belongs_to :category
  
  attr_accessible :message, :username, :category_id, :user_id

  validates :message, presence: true
end