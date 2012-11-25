class ActualitiesController < ApplicationController
  inherit_resources
  belongs_to :project
  before_filter :authenticate_user!, except: :show
  load_and_authorize_resource

  def destroy
    destroy! { project_path(@project) }
  end
end
