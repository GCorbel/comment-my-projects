class Comment < ActiveRecord::Base
  has_ancestry

  default_scope where(approved: true)

  belongs_to :user
  belongs_to :project
  belongs_to :category

  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id, :approved, :user, :category, :project

  validates :message, presence: true
  validates :project, presence: true
  validates :category, presence: true, if: 'ancestry.nil?'
  validates :username, presence: true, if: 'user.nil?'
end
