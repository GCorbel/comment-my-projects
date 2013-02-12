class Actuality < ActiveRecord::Base
  belongs_to :project

  default_scope where(locale: I18n.locale)

  has_many :comments, as: :item, dependent: :destroy

  attr_accessible :body, :title, :user_id

  validates :body, presence: true
  validates :title, presence: true
  validates :project, presence: true

  delegate :user, :user_id, :followers, :followers_ids, to: :project

  def to_param
    "#{id}-#{title.parameterize}"
  end

  def root_comments
    comments.where(ancestry: nil)
  end
end
