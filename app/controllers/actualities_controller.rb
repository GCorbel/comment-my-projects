class ActualitiesController < ApplicationController
  inherit_resources
  belongs_to :project, optional: true
  before_filter :authenticate_user!, except: :show
  load_and_authorize_resource

  def show
    @comment = Comment.new
    @project = @actuality.project
  end

  def destroy
    destroy! { project_path(@actuality.project) }
  end
end
