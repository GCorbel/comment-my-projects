# encoding: UTF-8
require 'spec_helper'

describe CommentMailer do
  let(:user) { stub(email: 'name@host.com', username: 'test') }
  let(:project) { build_stubbed(:project) } 

  describe :send_mail_to_project_owner do
    it "mails the user" do
      mail = CommentMailer.send_mail_to_project_owner(user, project)
      mail.to.should == [user.email]
      mail.subject.should == "Quelqu'un a jouter un commentaire à l'un de vos projet"
      mail.body.should =~ /<a href="http:\/\/example.com\/projects\/1001-title">http:\/\/example.com\/projects\/1001-title<\/a>/
      mail.body.should =~ /Bonjour test/ 
    end
  end

  describe :send_mail_to_creator_of_parents do
    it "mails the user" do
      mail = CommentMailer.send_mail_to_creator_of_parents(user, project)
      mail.to.should == [user.email]
      mail.subject.should == "Quelqu'un a ajouter une reponse à votre commentaire"
      mail.body.should =~ /<a href="http:\/\/example.com\/projects\/1001-title">http:\/\/example.com\/projects\/1001-title<\/a>/
      mail.body.should =~ /Bonjour test/ 
    end
  end
end
