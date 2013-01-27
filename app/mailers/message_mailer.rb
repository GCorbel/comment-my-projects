class MessageMailer < ActionMailer::Base
  def contact(email, body)
    mail subject: t('mailers.you_received_an_email'),
         from: email,
         body: body,
         to: "contact@social-reviewing.com"
  end
end
