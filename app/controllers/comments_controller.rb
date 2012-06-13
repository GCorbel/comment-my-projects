#encoding=utf-8
class CommentsController < ApplicationController
  before_filter :find_project

  def new
    @comment = Comment.new(parent_id: params[:parent_id])
  end
  
  def create
    @comment = Comment.new(params[:comment])
    @comment.user = current_user
    @comment.project = @project
    if @comment.valid?
      @project.add_comment(@comment)
      redirect_to(@project, notice: 'Votre commentaire a été ajouté')
    else
      @note = Note.new
      render 'projects/show'
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to(@project, notice: 'Votre commentaire a été supprimé')
  end

  private
    def find_project
      @project = Project.find(params[:project_id])
    end
end
