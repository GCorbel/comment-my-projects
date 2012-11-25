require 'spec_helper'

describe ActualitiesController do
  let(:project) { build_stubbed(:project) }
  let(:user) { build_stubbed(:user) }
  let(:actuality) { build_stubbed(:actuality) }
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
end
