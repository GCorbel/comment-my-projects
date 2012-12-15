#encoding=utf-8
class MessageMailer < ActionMailer::Base
  def contact(email, body)
    mail subject: "Vous avez reçu un message de Social-Reviewing.com",
         to: email,
         body: body
  end
end
