class Comment < ActiveRecord::Base
  include Rakismet::Model
  rakismet_attrs author: proc { username || user.username},
                 content: :message

  has_ancestry

  default_scope where(approved: true)

  belongs_to :user
  belongs_to :project
  belongs_to :category

  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id, :user_ip, :user_agent, :referrer, :approved,
                  :user, :category, :project

  validates :message, presence: true
  validates :project, presence: true
  validates :category, presence: true, if: 'ancestry.nil?'
  validates :username, presence: true, if: 'user.nil?'

  before_create :check_for_spam

  def request=(request)
    self.user_ip = request.remote_ip
    self.user_agent = request.env['HTTP_USER_AGENT']
    self.referrer = request.env['HTTP_REFERER']
  end

  private
    def check_for_spam
      self.approved = !spam?
      true
    end
end
