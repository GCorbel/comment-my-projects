#encoding=utf-8
require 'spec_helper'

describe CategoryProjectsController do
  let(:user) { build_stubbed(:user) }
  let(:category_projects) do
    stub(find: category_project, new: category_project)
  end
  let(:project) { build_stubbed(:project, user: user) }
  let(:category_project) { build_stubbed(:category_project) }

  before(:each) do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:category_projects).returns(category_projects)
  end

  describe "GET 'new'" do
    it "render new template" do
      get 'new', id: category_project.id, project_id: project.id
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) { CategoryProject.stubs(:new).returns(category_project) }

    context "with valid data" do
      before(:each) { category_project.stubs(:save).returns(true) }

      it "redirect to project's path" do
        post 'create', project_id: project.id
        should redirect_to(project)
      end

      it "Save the relation" do
        category_project.expects(:save)
        post 'create', project_id: project.id
      end

      it "set a flash message" do
        post 'create', project_id: project.id
        should set_the_flash[:notice].to("Votre description a été ajouté")
      end
    end

    context "with invalid data" do
      before(:each) { category_project.stubs(:save).returns(false) }

      it "render new template" do
        post 'create', project_id: project.id
        should render_template('new')
      end
    end
  end

  describe "GET 'edit'" do
    before(:each) { CategoryProject.stubs(:find).returns(category_project) }

    it "render edit template" do
      get 'edit', id: category_project.id, project_id: project.id
      should render_template('edit')
    end
  end

  describe "POST 'update'" do
    before(:each) do
      CategoryProject.stubs(:find).returns(category_project)
      category_project.stubs(:category)
    end

    context "when valid" do
      before(:each) { category_project.stubs(:update_attributes).returns(true) }

      it "redirect to project's path" do
        post 'update', id: category_project.id, project_id: project.id
        should redirect_to(project)
      end

      it "update the project" do
        category_project.expects(:update_attributes)
        post 'update', id: category_project.id, project_id: project.id
      end

      it "set a flash message" do
        post 'update', id: category_project.id, project_id: project.id
        should set_the_flash[:notice].to("Votre description a été modifié")
      end
    end

    context "when invalid" do
      before(:each) { category_project.stubs(:update_attributes).returns(false) }

      it "render edit template" do
        post 'update', id: category_project.id, project_id: project.id
        should render_template('edit')
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      CategoryProject.stubs(:find).returns(category_project)
      category_project.stubs(:destroy)
    end

    it "redirect to project's path" do
      delete 'destroy', id: category_project.id, project_id: project.id
      should redirect_to(project)
    end

    it "delete the project" do
      category_project.expects(:destroy)
      delete 'destroy', id: category_project.id, project_id: project.id
    end

    it "set a flash message" do
      delete 'destroy', id: category_project.id, project_id: project.id
      should set_the_flash[:notice].to("Votre description a été supprimé")
    end
  end
end
