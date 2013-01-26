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
    ActsAsTaggableOn::Tag.stubs(:all).returns([])
    project.stubs(:destroy)
    project.stubs(:save)
  end

  describe "GET 'index'" do
    subject { get 'index' }
    before { ActsAsTaggableOn::Tag.expects(:all).returns([]) }

    it { should render_template('index') }

    context 'when there is a search' do
      it "do a full text search" do
        search.expects(:project_text_search).never
        get 'index'
      end
    end

    context 'when there is a search' do
      it "do a full text search" do
        search.expects(:project_text_search)
        get 'index', search: {}
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
      expect(project.user).to eq user
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
