#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]
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

  def new
  end

  def create
    @project = current_user.projects.new(params[:project])
    if @project.save
      redirect_to(project_path(@project),
                  notice: "Votre projet a été ajouté")
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @project.update_attributes(params[:project])
      redirect_to(project_path(@project),
                  notice: "Votre projet a été modifié")
    else
      render :edit
    end
  end

  def destroy
    @project.destroy
    redirect_to(root_path, notice: "Votre projet a été supprimé")
  end
end
