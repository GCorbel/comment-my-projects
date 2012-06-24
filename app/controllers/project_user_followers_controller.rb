class ProjectUserFollowersController < ApplicationController
  load_resource :project
  load_and_authorize_resource

  def create
    @project.add_follower(current_user)
    redirect_to(@project, notice: "Vous suivez #{@project.title}.")
  end

  def destroy
    @project.remove_follower(current_user)
    redirect_to(@project, notice: "Vous ne suivez plus #{@project.title}.")
  end
end
