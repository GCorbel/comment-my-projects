#encoding=utf-8
class NotesController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @note = @project.notes.new(params[:note], project: @project)
    if @note.save
      redirect_to(project_path(@project),
                  notice: t('controller.create.success', model: 'note'))
    else
      @comment = Comment.new
      render 'projects/show'
    end
  end
end
