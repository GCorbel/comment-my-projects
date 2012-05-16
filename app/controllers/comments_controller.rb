#encoding=utf-8
class CommentsController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @comment = Comment.new(params[:comment])
    @comment.user = current_user
    if @project.comments << @comment
      redirect_to(@project, notice: 'Votre commentaire a été ajouté')
    else
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
