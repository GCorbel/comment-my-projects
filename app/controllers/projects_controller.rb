#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show, :advanced_search]
  load_and_authorize_resource

  def show
    @comment = Comment.new
    @note = Note.new
    if current_user
      @project_user_follower = @project.project_user_followers
                                       .where(user_id: current_user.id).first
    end
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

  def new
  end

  def create
    @project = current_user.projects.new(params[:project])
    if @project.save
      redirect_to(project_path(@project),
                  notice: t('controller.create.success', model: 'projet'))
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @project.update_attributes(params[:project])
      redirect_to(project_path(@project),
                  notice: t('controller.update.success', model: 'projet'))
    else
      render :edit
    end
  end

  def destroy
    @project.destroy
    redirect_to(root_path,
                notice: t('controller.destroy.success', model: 'projet'))
  end
end
