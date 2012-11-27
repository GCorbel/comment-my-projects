#encoding=utf-8
class CommentMailer < ActionMailer::Base
  default from: "guirec.corbel@gmail.com"

  def send_mail_to_project_owner(user, project)
    @user = user
    @project = project
    mail(to: user.email,
         subject: "Quelqu'un a jouter un commentaire à l'un de vos projet")
  end

  def comment_notify(user, item)
    @user = user
    @item = item
    @prefix = "mailers.#{item.class.to_s.downcase}_comment_notify"
    @url = url_for(item)
    subject = t("#{@prefix}_title")
    mail(to: user.email, subject: subject)
  end
end
