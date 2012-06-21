#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  let!(:project) { build_stubbed(:project, user: user) }
  let(:user) { build_stubbed(:user) }

  before(:each) { sign_in user }

  describe "GET 'index'" do
    it "render index template" do
      get 'index'
      should render_template('index')
    end

    context 'when there is a search' do
      it 'do the search' do
        params = {'title' => 'test'}
        Project.expects(:search).with(params).returns([project])
        get 'index', search: params, format: :js
      end
    end
  end

  describe "GET 'show'" do
    let!(:comment) { build_stubbed(:comment) }

    before(:each) { Project.stubs(:find).returns(project) } 

    it "render show template" do
      get 'show', id: project.id
      should render_template('show')
    end

    it "create a new comment" do
      Comment.expects(:new).returns(comment)
      get 'show', id: project.id
    end
  end

  describe "GET 'new'" do
    it "render new template" do
      get 'new'
      should render_template('new')
    end
  end

  describe "POST 'create'" do
    before(:each) do
      Project.stubs(:new).returns(project)
    end

    context "with valid data" do
      before(:each) { project.stubs(:save).returns(true) }

      it "redirect to project's path" do
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
      before(:each) { project.stubs(:save).returns(false) }

      it "render new template" do
        post 'create'
        should render_template('new')
      end
    end
  end

  describe "GET 'edit'" do
    before(:each) do
      Project.stubs(:find).returns(project)
    end

    it "render edit template" do
      get 'edit', id: project.id
      should render_template('edit')
    end
  end

  describe "POST 'update'" do
    before(:each) do
      Project.stubs(:find).returns(project)
    end

    context "when valid" do
      before(:each) { project.stubs(:update_attributes).returns(true) }

      it "redirect to project's path" do
        post 'update', id: project.id
        should redirect_to(project)
      end

      it "update the project" do
        project.expects(:update_attributes)
        post 'update', id: project.id
      end

      it "set a flash message" do
        post 'update', id: project.id
        should set_the_flash[:notice].to("Votre projet a été modifié")
      end
    end

    context "when invalid" do
      before(:each) { project.stubs(:update_attributes).returns(false) }

      it "render edit template" do
        post 'update', id: project.id
        should render_template('edit')
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      Project.stubs(:find).returns(project)
      project.stubs(:destroy)
    end

    it "redirect to project's path" do
      delete 'destroy', id: project.id
      should redirect_to(root_path)
    end

    it "delete the project" do
      project.expects(:destroy)
      delete 'destroy', id: project.id
    end

    it "set a flash message" do
      delete 'destroy', id: project.id
      should set_the_flash[:notice].to("Votre projet a été supprimé")
    end
  end
end
