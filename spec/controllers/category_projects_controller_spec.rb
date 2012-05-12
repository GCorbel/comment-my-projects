#encoding=utf-8
require 'spec_helper'

describe CategoryProjectsController do
  let(:user) { stub }
  let(:project) { build_stubbed(:project) }
  let(:category_project) { stub }

  before(:each) do
    sign_in user
    Project.stubs(:find).returns(project)
  end

  describe "GET 'new'" do
    it "render new template" do
      sign_in user
      get 'new'
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) do
      sign_in user
      CategoryProject.stubs(:new).returns(category_project)
      Project.stubs(:find).returns(project)
    end

    context "with valid data" do
      before(:each) { project.stubs(:valid?).returns(true) }

      it "returns http success" do
        post 'create'
        should redirect_to(project)
      end

      it "set a flash message" do
        post 'create'
        should set_the_flash[:notice].to("La description a été ajoutée")
      end
    end
  end
end
