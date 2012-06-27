class ProjectUserFollowersController < ApplicationController
  load_resource :project
  load_and_authorize_resource

  def create
    @project_user_follower = @project.add_follower(current_user)
  end

  def destroy
    @project.remove_follower(current_user)
  end
end
