require 'spec_helper'

describe CommentMailer do
  let(:user) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user) }
  let(:actuality) { build_stubbed(:actuality, project: project) }

  before do
    @prefix = "A comment has been added to"
  end

  describe :comment_notify_item_owner do
    context 'when the item is a project' do
      subject { CommentMailer.comment_notify_item_owner(user, project) }
      its(:to) { should eq [user.email] }
      its(:subject) { should eq "#{@prefix} one of your projects" }
      its(:body) { should have_content(url_for(project)) }
    end

    context 'when the item is a actuality' do
      subject { CommentMailer.comment_notify_item_owner(user, actuality) }
      its(:to) { should eq [user.email] }
      its(:subject) { should eq "#{@prefix} one of your news" }
      its(:body) { should have_content(url_for(actuality)) }
    end
  end

  describe :comment_notify_followers do
    context 'when the item is a project' do
      subject { CommentMailer.comment_notify_followers(user, project) }
      its(:to) { should eq [user.email] }
      its(:subject) { should eq "#{@prefix} one of the projects that you follow" }
      its(:body) { should have_content(url_for(project)) }
    end

    context 'when the item is a actuality' do
      subject { CommentMailer.comment_notify_followers(user, actuality) }
      its(:to) { should eq [user.email] }
      its(:subject) { should eq "#{@prefix} one of the news that you follow" }
      its(:body) { should have_content(url_for(actuality)) }
    end
  end
end
