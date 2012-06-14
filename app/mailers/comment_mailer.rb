#encoding=utf-8
class CommentMailer < ActionMailer::Base
  default from: "guirec.corbel@gmail.com"

  def send_mail_to_project_owner(user)
    mail(to: user.email,
         subject: "Quelqu'un a jouter un commentaire à l'un de vos projet")
  end

  def send_mail_to_creator_of_parents(user)
    mail(to: user.email,
         subject: "Quelqu'un a ajouter une reponse à votre commentaire")
  end
end
