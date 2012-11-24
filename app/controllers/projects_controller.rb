#encoding=utf-8
class ProjectsController < ApplicationController
  inherit_resources
  before_filter :authenticate_user!, except: [:index, :show, :advanced_search]
  load_and_authorize_resource

  def show
    @comment = Comment.new
    @note = Note.new
  end

  def index
    respond_to do |format|
      format.html
      format.json { render json: ProjectsDatatable.new(view_context) }
    end
  end

  def advanced_search
    if params[:search]
      @search = Search.new(params[:search])
      @projects = @search.project_text_search
    else
      @search = Search.new
    end
  end

  def create
    @project.user = current_user
    create!
  end

  def destroy
    destroy! { root_url }
  end
end
