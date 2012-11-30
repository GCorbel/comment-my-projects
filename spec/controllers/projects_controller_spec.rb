#encoding=utf-8
require 'spec_helper'

describe ProjectsController do
  let(:project) { build_stubbed(:project) }
  let(:user) { build_stubbed(:user) }
  let(:search) { stub }
  let(:args) { { id: project.id } }

  before do
    sign_in user
    Search.stubs(:new).returns(search)
    Project.stubs(:find).returns(project)
    Project.stubs(:new).returns(project)
    project.stubs(:destroy)
    project.stubs(:save)
  end

  describe "GET 'index'" do
    context 'when it is an html format' do
      subject { get 'index' }
      it { should render_template('index') }
    end

    context 'when it is a json format' do
      it "should instanciate a new presenter" do
        ProjectsDatatable.expects(:new)
        get 'index', format: :json
      end
    end
  end

  describe "GET 'advanced_search'" do
    subject { get 'advanced_search' }
    it { should render_template('advanced_search') }

    context 'when there is a search' do
      it "do a full text search" do
        search.expects(:project_text_search).never
        get 'advanced_search'
      end
    end

    context 'when there is a search' do
      it "do a full text search" do
        search.expects(:project_text_search)
        get 'advanced_search', search: {}
      end
    end
  end

  describe "GET 'show'" do
    subject { get 'show', args }
    before do
      Comment.expects(:new)
      Note.expects(:new)
    end
    it { should render_template('show') }
  end

  describe "POST 'create'" do
    it "assign the signed user to the project" do
      post 'create', args
      project.user.should == user
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(root_path) }
  end

  describe "GET 'feed'" do
    subject { get 'feed', format: :atom }
    it { should be_success }
  end
end
