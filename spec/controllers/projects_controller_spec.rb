#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  let!(:project) { build_stubbed(:project, user: user) }
  let(:user) { build_stubbed(:user) }
  let(:search) { stub }
  let(:args) { { id: project.id, search: {} } }
  let!(:comment) { build_stubbed(:comment) }
  before do
    sign_in user
    Search.stubs(:new).returns(search)
    Project.stubs(:find).returns(project)
    Project.stubs(:new).returns(project)
    project.stubs(:destroy)
  end

  after { subject }

  describe "GET 'index'" do
    subject { get 'index' }
    it { should render_template('index') }
  end

  describe "GET 'advanced_search'" do
    subject { get 'advanced_search' }
    it { should render_template('advanced_search') }
    context 'when there is no search' do
      it 'don\'t search a text' do
        search.expects(:project_text_search).never
      end
    end

    context 'when there is a search' do
      subject { get 'advanced_search', args }
      it "do a full text search" do
        search.expects(:project_text_search)
      end
    end
  end

  describe "GET 'show'" do
    subject { get 'show', args }
    let!(:comment) { build_stubbed(:comment) }
    it { should render_template('show') }
    it "create a new comment" do
      Comment.expects(:new).returns(comment)
    end
  end

  describe "GET 'new'" do
    subject { get 'new' }
    it { should render_template('new') }
  end

  describe "POST 'create'" do
    subject { post 'create' }

    context "with valid data" do
      before { project.expects(:save).returns(true) }
      it { should redirect_to(project) }
      it "set a flash message" do
        controller.should
          set_the_flash[:notice].to("Votre projet a été ajouté")
      end
    end

    context "with invalid data" do
      before { project.expects(:save).returns(false) }
      it { should render_template('new') }
    end
  end

  describe "GET 'edit'" do

    it "render edit template" do
      get 'edit', id: project.id
      should render_template('edit')
    end
  end

  describe "POST 'update'" do
    subject { post 'update', args }

    context "when valid" do
      before { project.expects(:update_attributes).returns(true) }
      it { should redirect_to(project) }
      it "set a flash message" do
        controller.should
          set_the_flash[:notice].to("Votre projet a été modifié")
      end
    end

    context "when invalid" do
      before { project.expects(:update_attributes).returns(false) }
      it { should render_template('edit') }
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(root_path) }

    it "delete the project" do
      project.expects(:destroy)
    end

    it "set a flash message" do
      controller.should
        set_the_flash[:notice].to("Votre projet a été supprimé")
    end
  end
end
