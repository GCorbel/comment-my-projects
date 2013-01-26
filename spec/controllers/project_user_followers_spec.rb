require 'spec_helper'

describe ProjectUserFollowersController do
  let(:project) { build_stubbed(:project) }
  let(:user) { build_stubbed(:user) }
  let(:args) do
    { project_id: project.id, format: :js, user_id: user.id }
  end

  before do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:remove_follower)
  end

  describe "POST 'create'" do
    subject { post 'create', args }
    before { project.expects(:add_follower).with(user) }
    it { should render_template('create') }
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    before { project.expects(:remove_follower).with(user) }
    it { should render_template('destroy') }
  end
end
