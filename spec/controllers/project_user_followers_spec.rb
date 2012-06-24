require 'spec_helper'

describe ProjectUserFollowersController do
  let(:project) { build_stubbed(:project) }
  let(:user) { build_stubbed(:user) }
  let(:project_user_follower) { build_stubbed(:project_user_follower) }
  let(:followers) { stub(find: user, new: user) }

  before(:each) do
    Project.stubs(:find).returns(project)
    project.stubs(:followers).returns(followers)
    project.stubs(:add_follower)
    project.stubs(:remove_follower)
    project.stubs(:to_s).returns(project.title)
    ProjectUserFollower.stubs(:find).returns(project_user_follower)
  end

  describe "POST 'create'" do
    it 'redirect to project''s path' do
      post 'create', project_id: project.id
      should redirect_to(project)
    end

    it 'add the user to the following users' do
      sign_in user
      project.expects(:add_follower).with(user)
      post 'create', project_id: project.id
    end

    it 'set a flash message' do
      post 'create', project_id: project.id
      should set_the_flash[:notice].to("Vous suivez #{project}")
    end
  end

  describe "DELETE 'destroy'" do
    it 'redirect to project''s path' do
      delete 'destroy', project_id: project.id, id: project_user_follower.id
      should redirect_to(project)
    end

    it 'remove the user from the followers' do
      sign_in user
      project.expects(:remove_follower).with(user)
      delete 'destroy', project_id: project.id, id: project_user_follower.id
    end

    it 'set a flash message' do
      delete 'destroy', project_id: project.id, id: project_user_follower.id
      should set_the_flash[:notice].to("Vous ne suivez plus #{project}")
    end
  end
end
