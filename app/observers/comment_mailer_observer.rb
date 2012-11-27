class CommentMailerObserver < ActiveRecord::Observer
  observe :comment

  def after_create(comment)
    @comment = comment
    @item = comment.item
    @notified = []

    add_project_owner_to_notified
    add_comments_owner_to_notified
    add_followers_to_notified
    delete_comment_owner_to_notified
    send_notification
  end

  private
    def add_project_owner_to_notified
      @notified << @item.user_id
    end

    def add_comments_owner_to_notified
      @notified += @item.comments.pluck(:user_id)
    end

    def add_followers_to_notified
      @notified += @item.followers.pluck(:user_id)
    end

    def delete_comment_owner_to_notified
      @notified.delete(@comment.user_id)
    end

    def send_notification
      @notified.compact.uniq.each do |id|
        user = User.find id
        CommentMailer.comment_notify(user, @item).deliver
      end
    end
end
