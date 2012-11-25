class Actuality < ActiveRecord::Base
  belongs_to :project
  attr_accessible :body, :title

  validates :body, presence: true
  validates :title, presence: true
  validates :project, presence: true

  def to_param
    "#{id}-#{title.parameterize}"
  end
end
