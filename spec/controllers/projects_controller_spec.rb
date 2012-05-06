#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  render_views 

  let!(:project) { build_stubbed(:project) }
  let(:user) { stub(projects: []) }

  describe "GET 'index'" do
    it "render index template" do
      get 'index'
      should render_template('index')
    end
  end

  describe "GET 'index'" do
    it "render index template" do
      Project.stubs(:find).returns(project)
      get 'show'
      should render_template('show')
    end
  end

  describe "GET 'new'" do
    it "returns http success" do
      sign_in user
      get 'new'
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) do
      sign_in user
      Project.stubs(:new).returns(project)
    end

    context "with valid data" do
      before(:each) { project.stubs(:valid?).returns(true) }
      it "returns http success" do
        post 'create'
        should redirect_to(project)
      end

      it "save the project" do
        lambda do
          post 'create'
        end.should change(user.projects, :size).by(1)
      end

      it "set a flash message" do
        post 'create'
        should set_the_flash[:notice].to("Votre projet a été ajouté")
      end
    end

    context "with invalid data" do
      before(:each) { project.stubs(:valid?).returns(false) }

      it "render new template" do
        post 'create'
        should render_template('new')
      end
    end
  end
end
