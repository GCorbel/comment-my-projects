#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  render_views 

  let(:project) { build_stubbed(:project) }
  let(:user) { stub(projects: []) }

  before(:each) { sign_in user }

  describe "GET 'new'" do
    it "returns http success" do
      get 'new'
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) do
      project.stubs(:save).returns(true)
      Project.stubs(:new).returns(project)
    end

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
end
