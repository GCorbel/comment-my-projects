# encoding: UTF-8
require 'spec_helper'

describe CommentMailer do
  let(:user) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user) }
  let(:actuality) { build_stubbed(:actuality, project: project) }

  before do
    @prefix = "Un commentaire a été ajouté à"
  end

  describe :comment_notify_item_owner do
    context 'when the item is a project' do
      subject { CommentMailer.comment_notify_item_owner(user, project) }
      its(:to) { should == [user.email] }
      its(:subject) { should == "#{@prefix} l'un de vos projet" }
      its(:body) { should have_content(url_for(project)) }
    end

    context 'when the item is a actuality' do
      subject { CommentMailer.comment_notify_item_owner(user, actuality) }
      its(:to) { should == [user.email] }
      its(:subject) { should == "#{@prefix} l'une de vos actualité" }
      its(:body) { should have_content(url_for(actuality)) }
    end
  end

  describe :comment_notify_followers do
    context 'when the item is a project' do
      subject { CommentMailer.comment_notify_followers(user, project) }
      its(:to) { should == [user.email] }
      its(:subject) { should == "#{@prefix} l'un des projets que vous suivez" }
      its(:body) { should have_content(url_for(project)) }
    end

    context 'when the item is a actuality' do
      subject { CommentMailer.comment_notify_followers(user, actuality) }
      its(:to) { should == [user.email] }
      its(:subject) { should == "#{@prefix} l'une des actualités que vous suivez" }
      its(:body) { should have_content(url_for(actuality)) }
    end
  end
end
