class CommentMailerObserver < ActiveRecord::Observer
  observe :comment

  def after_create(comment)
    @comment = comment
    @item = comment.item
    @notified_followers = []
    @item_owner

    if comment.approved
      send_notification_to_item_owner
      add_followers_to_notified
      delete_comment_owner_to_notified
      send_notification
    end
  end

  private
    def send_notification_to_item_owner
      unless @comment.user == @item.user
        CommentMailer.comment_notify_item_owner(@item.user, @item).deliver
      end
    end

    def add_followers_to_notified
      @notified_followers += @item.followers_ids
    end

    def delete_comment_owner_to_notified
      @notified_followers.delete(@comment.user_id)
    end

    def send_notification
      @notified_followers.compact.uniq.each do |id|
        user = User.find id
        CommentMailer.comment_notify_followers(user, @item).deliver
      end
    end
end
