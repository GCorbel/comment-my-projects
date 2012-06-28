#encoding=utf-8
class CommentsController < ApplicationController
  load_resource :project
  load_resource through: :project
  before_filter :add_project_to_comment
  authorize_resource

  def new
    @comment.ancestry = params[:ancestry]
    render format: :js
  end
  
  def create
    @comment.parent = Comment.find(@comment.ancestry) if @comment.ancestry
    @comment.user = current_user
    @comment.project = @project
    if @comment.valid?
      @project.add_comment(@comment)
      render format: :js
    else
      @note = Note.new
      render 'projects/show'
    end
  end

  def destroy
    @comment.destroy
  end

  private
    def add_project_to_comment
      @comment.project = @project
    end
end
