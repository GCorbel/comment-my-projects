#encoding=utf-8
require 'spec_helper'

describe CategoryProjectsController do
  let(:user) { stub }
  let(:project) { build_stubbed(:project) }
  let(:category_project) { stub(:save) }

  before(:each) do
    sign_in
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
      before(:each) { category_project.stubs(:save).returns(true) }

      it "returns http success" do
        post 'create'
        should redirect_to(project)
      end

      it "Save the relation" do
        category_project.expects(:save)
        post 'create'
      end

      it "set a flash message" do
        post 'create'
        should set_the_flash[:notice].to("La description a été ajoutée")
      end
    end

    context "with invalid data" do
      before(:each) { category_project.stubs(:save).returns(false) }

      it "render new template" do
        post 'create'
        should render_template('new')
      end
    end
  end

  describe "GET 'edit'" do
    before(:each) do
      sign_in user
      CategoryProject.stubs(:find)
    end

    it "render edit template" do
      get 'edit'
      should render_template('edit')
    end
  end

  describe "POST 'update'" do
    before(:each) do
      sign_in user
      CategoryProject.stubs(:find)
                     .returns(category_project)
      category_project.stubs(:category)
    end

    context "when valid" do
      before(:each) { category_project.stubs(:update_attributes).returns(true) }

      it "redirect to project path" do
        post 'update'
        should redirect_to(project)
      end

      it "update the project" do
        category_project.expects(:update_attributes)
        post 'update'
      end

      it "set a flash message" do
        post 'update'
        should set_the_flash[:notice].to("La description a été modifiée")
      end
    end

    context "when invalid" do
      before(:each) { category_project.stubs(:update_attributes).returns(false) }

      it "render edit template" do
        post 'update'
        should render_template('edit')
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      sign_in user
      CategoryProject.stubs(:find).returns(category_project)
      category_project.stubs(:destroy)
    end

    it "redirect to projects path" do
      delete 'destroy'
      should redirect_to(project)
    end

    it "delete the project" do
      category_project.expects(:destroy)
      delete 'destroy'
    end

    it "set a flash message" do
      delete 'destroy'
      should set_the_flash[:notice].to("La description a été supprimée")
    end
  end
end
