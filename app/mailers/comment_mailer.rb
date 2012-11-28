#encoding=utf-8
class CommentMailer < ActionMailer::Base
  default from: "guirec.corbel@gmail.com"

  def comment_notify_item_owner(user, item)
    @user = user
    @item = item
    @prefix = "mailers.#{item.class.to_s.downcase}_comment_notify_item_owner"
    @url = url_for(item)
    mail(to: user.email, subject: subject)
  end

  def comment_notify_followers(user, item)
    @user = user
    @item = item
    @prefix = "mailers.#{item.class.to_s.downcase}_comment_notify"
    @url = url_for(item)
    mail(to: user.email, subject: subject)
  end

  private

  def subject
    t("#{@prefix}_title")
  end
end
