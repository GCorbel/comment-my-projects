#encoding=utf-8
require 'spec_helper'
require "#{Rails.root}/lib/spam_checker/spam_checker"

describe CommentsController do
  let(:project) { build_stubbed(:project, user: user) }
  let(:comment) { build_stubbed(:comment) }
  let(:comments) { stub(find: comment, new: comment) }
  let(:user) { build_stubbed(:user) }
  let(:args) { { id: comment.id, project_id: project.id, format: :js } }

  before do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:comments).returns(comments)
    comments.stubs(:build).returns(comment)
    SpamChecker.stubs(:spam?).returns(false)
    Comment.stubs(:new).returns(comment)
    Comment.stubs(:find).returns(comment)
    comment.stubs(:destroy)
    comment.stubs(:save)
  end

  describe "GET 'new'" do
    subject { get 'new', args }
    it { should render_template('new') }
  end

  describe "POST 'create'" do
    subject(:do_create) { post 'create', args }
    context "with valid data" do
      before do
        comment.stubs(:valid?).returns(true)
        comment.stubs(:ancestry).returns(comment)
        comment.expects(:parent=).with(comment)
      end

      context "when the comment is not a spam" do
        it "approve the comment" do
          SpamChecker.expects(:spam?).returns(false)
          do_create
          comment.approved.should be_true
        end
      end

      context "when the comment is a spam" do
        it "disapprove the comment" do
          SpamChecker.expects(:spam?).returns(true)
          do_create
          comment.approved.should be_false
        end
      end
    end

    context "when user is signed in" do
      it "add the user to comment" do
        do_create
        comment.user.should == user
      end
    end
  end

  describe "DELETE 'destroy'" do
    subject(:do_destroy) { delete 'destroy', args }
    it "assign project to comment" do
      comment.item = project
      comment.expects(:item=).with(project)
      do_destroy
    end
  end
end
