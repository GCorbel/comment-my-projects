require 'spec_helper'

describe ProjectUserFollowersController do
  let(:project) { build_stubbed(:project) }
  let(:user) { build_stubbed(:user) }
  let(:project_user_follower) { build_stubbed(:project_user_follower) }
  let(:followers) { stub(find: user, new: user) }
  let(:args) do
    { project_id: project.id, format: :js, user_id: user.id }
  end

  before do
    sign_in user
    Project.stubs(:find).returns(project)
    project.stubs(:followers).returns(followers)
    project.stubs(:add_follower)
    project.stubs(:remove_follower)
    project.stubs(:to_s).returns(project.title)
    User.stubs(:find).returns(user)
    ProjectUserFollower.stubs(:find).returns(project_user_follower)
  end

  after { subject }

  describe "POST 'create'" do
    subject { post 'create', args }
    it { should render_template('create') }
    it 'add the user to the following users' do
      project.expects(:add_follower).with(user)
    end
  end

  describe "DELETE 'destroy'" do
    subject { delete 'destroy', args }
    it { should render_template('destroy') }
    it 'remove the user from the followers' do
      project.expects(:remove_follower).with(user)
    end
  end
end
