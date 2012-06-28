class Comment < ActiveRecord::Base
  has_ancestry

  belongs_to :user
  belongs_to :project
  belongs_to :category
  
  class << self; attr_accessor :receivers end

  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id

  validates :message, presence: true
  validates :project, presence: true
  validates :category, presence: true, if: 'ancestry.nil?'
  validates :username, presence: true, if: 'user.nil?'

  after_create :init_receivers,
               :send_mail_to_creator_of_other_comments,
               :send_mail_to_project_owner,
               :send_mail_to_followers,
               :send_mail
    
  private 
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
