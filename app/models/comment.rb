class Comment < ActiveRecord::Base
  has_ancestry

  default_scope where(approved: true)

  belongs_to :user
  belongs_to :item, polymorphic: true

  attr_accessible :message, :username, :user_id, :ancestry,
                  :parent_id, :approved, :user, :item

  validates :message, presence: true
  validates :item, presence: true
  validates :username, presence: true, if: 'user.nil?'
end
