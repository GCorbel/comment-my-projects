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

  after_create :send_mail_to_creator_of_parents, :send_mail_to_project_owner
    
  private 
    def send_mail_to_project_owner
      CommentMailer.send_mail_to_project_owner(project.user).deliver
    end

    def send_mail_to_creator_of_parents
      user_ids = ancestors.pluck(:user_id).compact.uniq
      user_ids.delete(user.id) if user
      user_ids.each do |id|
        CommentMailer.answer_to_comment(User.find(id)).deliver
      end
    end
end
