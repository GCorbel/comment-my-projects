class CommentMailer < ActionMailer::Base
  default from: "guirec.corbel@gmail.com"

  def comment_notify_item_owner(user, item)
    @prefix = "mailers.#{item.class.to_s.downcase}_comment_notify_item_owner"
    prepare_mail(user, item)
  end

  def comment_notify_followers(user, item)
    @prefix = "mailers.#{item.class.to_s.downcase}_comment_notify"
    prepare_mail(user, item)
  end

  private
  def prepare_mail(user, item)
    @user = user
    @item = item
    @url = url_for(item)
    mail(to: user.email, subject: subject)
  end

  def subject
    t("#{@prefix}_title")
  end
end
