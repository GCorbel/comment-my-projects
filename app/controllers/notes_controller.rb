class NotesController < ApplicationController
  respond_to :js
  inherit_resources
  belongs_to :project

  def create
    create! { project_path(@project)  }
  end
end
