# encoding: UTF-8
require 'spec_helper'

describe CommentMailer do
  let(:user) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user) }

  describe :send_mail_to_project_owner do
    it "mails the user" do
      mail = CommentMailer.send_mail_to_project_owner(user, project)
      mail.to.should == [user.email]
      mail.subject.should == "Quelqu'un a jouter un commentaire à l'un de vos projet"
      mail.body.should have_content("http://example.com/projects/#{project.to_param}")
      mail.body.should have_content("Bonjour #{user.username}")
    end
  end

  describe :send_mail_to_creator_of_parents do
    it "mails the user" do
      mail = CommentMailer.send_mail_to_creator_of_parents(user, project)
      mail.to.should == [user.email]
      mail.subject.should == "Quelqu'un a ajouter une reponse à votre commentaire"
      mail.body.should have_content("http://example.com/projects/#{project.to_param}")
      mail.body.should have_content("Bonjour #{user.username}")
    end
  end
end
