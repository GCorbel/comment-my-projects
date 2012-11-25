class Comment < ActiveRecord::Base
  has_ancestry

  default_scope where(approved: true)

  belongs_to :user
  belongs_to :project

  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id, :approved, :user, :project

  validates :message, presence: true
  validates :project, presence: true
  validates :username, presence: true, if: 'user.nil?'
end
