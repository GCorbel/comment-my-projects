#encoding=utf-8
class MessageMailer < ActionMailer::Base
  def contact(email, body)
    mail subject: "Vous avez reçu un message de Social-Reviewing.com",
         from: email,
         body: body,
         to: "contact@social-reviewing.com"
  end
end
