class Comment < ActiveRecord::Base
  has_ancestry

  belongs_to :user
  belongs_to :project
  belongs_to :category
  
  attr_accessible :message, :username, :category_id, :user_id, :ancestry,
                  :parent_id

  validates :message, presence: true
  validates :project, presence: true
  validates :category, presence: true, if: 'ancestry.nil?'
  validates :username, presence: true, if: 'user.nil?'

  after_create :send_mail_to_creator_of_parents,
               :send_mail_to_project_owner,
               :send_mail
    
  private 
    def send_mail_to_project_owner
      @@receivers << project.user unless project.user == user
    end

    def send_mail_to_creator_of_parents
      receivers = @@receivers ||= []
      user_ids = ancestors.pluck(:user_id).compact.uniq
      user_ids.delete(user.id) if user
      user_ids.each do |id|
        receivers << User.find(id)
      end
    end

    def send_mail
      @@receivers = @@receivers.uniq
      @@receivers.each do |receiver|
        CommentMailer.send_mail_to_project_owner(receiver, project).deliver
      end
      @@receivers = []
    end
end
