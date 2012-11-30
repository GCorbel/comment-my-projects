require 'spec_helper'

describe ActualitiesController do
  let(:project) { build_stubbed(:project, user: user) }
  let(:user) { build_stubbed(:user) }
  let(:actuality) { build_stubbed(:actuality, project: project) }
  let(:actualities) { stub(find: actuality) }
  let(:args) { { id: actuality.id, project_id: project.id } }

  before do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:actualities).returns(actualities)
    actuality.stubs(:destroy)
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should redirect_to(project) }
  end

  describe "GET 'feed'" do
    context "when the request is a rss" do
      subject { get 'feed', format: :rss }
      it { should be_redirect }
    end

    context "when the request is a atom" do
      subject { get 'feed', format: :atom }
      it { should be_success }
    end
  end
end
