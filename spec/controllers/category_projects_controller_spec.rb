#encoding=utf-8
require 'spec_helper'

describe CategoryProjectsController do
  let(:user) { build_stubbed(:user) }
  let(:category_projects) do
    stub(find: category_project, new: category_project)
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
    subject { post 'create', args }

    context "with valid data" do
      before { category_project.expects(:save).returns(true) }
      it { should redirect_to(project) }
      it "set a flash message" do
        controller.should
          set_the_flash[:notice].to("Votre description a été ajouté")
      end
    end

    context "with invalid data" do
      before { category_project.expects(:save).returns(false) }
      it { should render_template('new') }
    end
  end

  describe "GET 'edit'" do
    subject { get 'edit', args }
    it { should render_template('edit') }
  end

  describe "POST 'update'" do
    subject { post 'update', args }

    context "when valid" do
      before { category_project.expects(:update_attributes).returns(true) }
      it { should redirect_to(project) }
      it "set a flash message" do
        controller.should
          set_the_flash[:notice].to("Votre description a été modifié")
      end
    end

    context "when invalid" do
      before { category_project.expects(:update_attributes).returns(false) }
      it { should render_template('edit') }
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(project) }
    it("delete the project") { category_project.expects(:destroy) }
    it "set a flash message" do
      controller.should
        set_the_flash[:notice].to("Votre description a été supprimé")
    end
  end
end
