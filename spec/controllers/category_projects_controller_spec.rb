#encoding=utf-8
require 'spec_helper'

describe CategoryProjectsController do
  let(:user) { build_stubbed(:user) }
  let(:category_projects) do
    stub(find: category_project, new: category_project, build: category_project)
  end
  let(:project) { build_stubbed(:project, user: user) }
  let(:category_project) { build_stubbed(:category_project) }
  let(:args) { { id: category_project.id, project_id: project.id } }

  before do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:category_projects).returns(category_projects)
    CategoryProject.stubs(:find).returns(category_project)
    category_project.stubs(:category)
    CategoryProject.stubs(:new).returns(category_project)
    category_project.stubs(:destroy)
  end

  after { subject }

  describe "GET 'new'" do
    subject { get 'new', args }
    it { should render_template('new') }
  end

  describe "POST 'create'" do
    context "when valid" do
      subject { post 'create', args }
      before { category_project.expects(:save).returns(true) }
      it { should redirect_to(project) }
    end
  end

  describe "POST 'update'" do
    context "when valid" do
      subject { post 'update', args }
      before { category_project.expects(:update_attributes).returns(true) }
      it { should redirect_to(project) }
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(project) }
  end
end
