#encoding=utf-8
class NotesController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @note = Note.new(params[:note])
    @note.project = @project
    if @note.valid?
      @project.notes << @note
      redirect_to(project_path(@project), notice: "La note a été ajoutée")
    else
      @comment = Comment.new
      render 'projects/show'
    end
  end
end
