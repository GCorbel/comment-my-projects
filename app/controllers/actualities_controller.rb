class ActualitiesController < ApplicationController
  inherit_resources
  belongs_to :project

  def destroy
    destroy! { project_path(@project) }
  end
end
