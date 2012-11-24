#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  let(:project) { build_stubbed(:project, user: user) }
  let(:user) { build_stubbed(:user) }
  let(:search) { stub }
  let(:args) { { id: project.id, search: {} } }
  before do
    sign_in user
    Search.stubs(:new).returns(search)
    Project.stubs(:find).returns(project)
    Project.stubs(:new).returns(project)
    project.stubs(:destroy)
    project.stubs(:save)
  end

  after { subject }

  describe "GET 'index'" do
    context 'when it is an html format' do
      subject { get 'index' }
      it { should render_template('index') }
    end

    context 'when it is a json format' do
      subject { get 'index', format: :json }
      it "should instanciate a new presenter" do
        ProjectsDatatable.expects(:new)
      end
    end
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
    it { should render_template('show') }
    it "assign a new comment" do
      Comment.expects(:new)
    end
    it "create a new note" do
      Note.expects(:new)
    end
  end

  describe "POST 'create'" do
    it "assign the signed user to the project" do
      project.user = nil
      post 'create', args
      project.user.should == user
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(root_path) }
  end
end
