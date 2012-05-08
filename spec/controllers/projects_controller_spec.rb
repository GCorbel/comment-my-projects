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

  describe "GET 'edit'" do
    before(:each) do
      sign_in user
      Project.stubs(:find).returns(project)
    end

    it "render edit template" do
      get 'edit'
      should render_template('edit')
    end
  end

  describe "POST 'update'" do
    before(:each) do
      sign_in user
      Project.stubs(:find).returns(project)
    end

    context "when valid" do
      before(:each) { project.stubs(:update_attributes).returns(true) }

      it "redirect to project path" do
        post 'update'
        should redirect_to(project)
      end

      it "update the project" do
        project.expects(:update_attributes)
        post 'update'
      end

      it "set a flash message" do
        post 'update'
        should set_the_flash[:notice].to("Votre projet a été modifié")
      end
    end

    context "when invalid" do
      before(:each) { project.stubs(:update_attributes).returns(false) }

      it "render edit template" do
        post 'update'
        should render_template('edit')
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      sign_in user
      Project.stubs(:find).returns(project)
      project.stubs(:destroy)
    end

    it "redirect to projects path" do
      delete 'destroy'
      should redirect_to(projects_path)
    end

    it "delete the project" do
      project.expects(:destroy)
      delete 'destroy'
    end

    it "set a flash message" do
      delete 'destroy'
      should set_the_flash[:notice].to("Votre projet a été supprimé")
    end
  end
end
