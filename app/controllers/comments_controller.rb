#encoding=utf-8
class CommentsController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @comment = Comment.new(params[:comment])
    @comment.user = current_user
    @comment.project = @project
    if @comment.valid?
      @project.comments << @comment
      redirect_to(@project, notice: 'Votre commentaire a été ajouté')
    else
      @note = Note.new
      render 'projects/show'
    end
  end

  def destroy
    project = Project.find(params[:project_id])
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to(project, notice: 'Votre commentaire a été supprimé')
  end
end
