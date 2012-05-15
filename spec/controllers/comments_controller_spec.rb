#encoding=utf-8
require 'spec_helper'

describe CommentsController do
  let!(:project) { create(:project) }
  let!(:comment) { create(:comment) }

  describe "POST 'create'" do
    before(:each) do
      Project.stubs(:find).returns(project)
      Comment.stubs(:new).returns(comment)
    end

    context "with valid data" do
      before(:each) { comment.stubs(:valid?).returns(true) }

      it "returns http success" do
        post 'create'
        should redirect_to(project)
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
  end
end
