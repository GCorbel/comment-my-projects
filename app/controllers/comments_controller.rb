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
end
