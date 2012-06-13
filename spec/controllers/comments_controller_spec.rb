#encoding=utf-8
require 'spec_helper'

describe CommentsController do
  let!(:project) { build_stubbed(:project) }
  let!(:comment) { build_stubbed(:comment) }
  let(:user) { build_stubbed(:user) }

  before(:each) do
    Project.stubs(:find).returns(project)
    comment.stubs(:save)
  end

  describe "GET 'new'" do
    it "render new template" do
      sign_in user
      get 'new'
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) { Comment.stubs(:new).returns(comment) }

    context "with valid data" do
      before(:each) { comment.stubs(:valid?).returns(true) }

      it "returns http success" do
        post 'create'
        should redirect_to(project)
      end

      it "add the new comment to the project" do
        project.expects(:add_comment).with(comment)
        post 'create'
      end

      it "set a flash message" do
        post 'create'
        should set_the_flash[:notice].to("Votre commentaire a été ajouté")
      end
    end

    context "with invalid data" do
      before(:each) { comment.stubs(:valid?).returns(false) }

      it "render new template" do
        post 'create'
        should render_template('projects/show')
      end
    end

    context "when user is signed in" do
      before(:each) do 
        comment.stubs(:save)
        sign_in user
      end

      it "add the user to comment" do
        post 'create'
        comment.user.should == user
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      Comment.stubs(:find).returns(comment)
      comment.stubs(:destroy)
    end

    it "redirect to project path" do
      delete 'destroy'
      should redirect_to(project)
    end

    it "delete the comment" do
      comment.expects(:destroy)
      delete 'destroy'
    end

    it "set a flash message" do
      delete 'destroy'
      should set_the_flash[:notice].to("Votre commentaire a été supprimé")
    end
  end
end
