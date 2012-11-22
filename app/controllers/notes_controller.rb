class NotesController < ApplicationController
  inherit_resources
  belongs_to :project

  def create
    create! { project_path(@project)  }
  end
end
