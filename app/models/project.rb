class Project < ActiveRecord::Base
  belongs_to :user

  attr_accessible :title, :url

  validates :title, presence: true
  validates :url, presence: true
end
