class Comment < ActiveRecord::Base
  include Rakismet::Model
  rakismet_attrs author: proc { username || user.username},
                 content: :message

  has_ancestry

  default_scope where(approved: true)

  belongs_to :user
  belongs_to :project
  belongs_to :category
  
  class << self; attr_accessor :receivers end

  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id, :user_ip, :user_agent, :referrer, :approved

  validates :message, presence: true
  validates :project, presence: true
  validates :category, presence: true, if: 'ancestry.nil?'
  validates :username, presence: true, if: 'user.nil?'

  before_create :check_for_spam

  after_create :init_receivers,
               :send_mail_to_creator_of_other_comments,
               :send_mail_to_project_owner,
               :send_mail_to_followers,
               :send_mail

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

    def init_receivers
      Comment.receivers = []
    end

    def send_mail_to_project_owner
      Comment.receivers << project.user unless project.user == user
    end

    def send_mail_to_creator_of_other_comments
      user_ids = project.comments.pluck(:user_id).compact
      user_ids.delete(user.id) if user
      user_ids.each do |id|
        Comment.receivers << User.find(id)
      end
    end

    def send_mail_to_followers
      Comment.receivers = Comment.receivers + project.followers
    end

    def send_mail
      receivers = Comment.receivers.compact.uniq
      receivers.each do |receiver|
        CommentMailer.send_mail_to_project_owner(receiver, project).deliver
      end
    end
end
