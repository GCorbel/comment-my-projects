# encoding: UTF-8
require 'spec_helper'

describe CommentMailer do
  let(:user) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user) }
  let(:actuality) { build_stubbed(:actuality, project: project) }

  describe :send_mail_to_project_owner do
    it "mails the user" do
      mail = CommentMailer.send_mail_to_project_owner(user, project)
      mail.to.should == [user.email]
      mail.subject.should == "Quelqu'un a jouter un commentaire à l'un de vos projet"
      mail.body.should have_content("http://example.com/projects/#{project.to_param}")
      mail.body.should have_content("Bonjour #{user.username}")
    end
  end

  describe :comment_notify do
    context 'when the item is a project' do
      it 'send the mail for project' do
        mail = CommentMailer.comment_notify(user, project)
        mail.to.should == [user.email]
        mail.subject.should == "Un commentaire a été ajouté à l'un des projets que vous suivez"
        mail.body.should have_content("http://example.com/projects/#{project.to_param}")
        mail.body.should have_content("Bonjour #{user.username}")
      end
    end
    context 'when the item is a actuality' do
      it 'send the mail for actuality' do
        mail = CommentMailer.comment_notify(user, actuality)
        mail.to.should == [user.email]
        mail.subject.should == "Un commentaire a été ajouté à l'une des actualités que vous suivez"
        mail.body.should have_content("http://example.com/actualities/#{actuality.to_param}")
        mail.body.should have_content("Bonjour #{user.username}")
      end
    end
  end
end
