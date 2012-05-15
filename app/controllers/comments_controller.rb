#encoding=utf-8
class CommentsController < ApplicationController
  def create
    @project = Project.find(params[:project_id])
    @comment = Comment.new(params[:comment])
    if @comment.save
      redirect_to(@project, notice: 'Votre commentaire a été ajouté')
    else
      render 'projects/show'
    end
  end
end
