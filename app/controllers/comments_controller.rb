#encoding=utf-8
class CommentsController < ApplicationController
  before_filter :find_project
  load_resource

  def new
    @comment.ancestry = params[:ancestry]
  end
  
  def create
    @comment.parent = Comment.find(@comment.ancestry) if @comment.ancestry
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
    @comment.destroy
    redirect_to(@project, notice: 'Votre commentaire a été supprimé')
  end

  private
    def find_project
      @project = Project.find(params[:project_id])
    end
end
