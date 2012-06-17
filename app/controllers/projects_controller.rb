#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]
  load_and_authorize_resource

  def show
    @comment = Comment.new
    @note = Note.new
  end

  def index
    @projects = Project.search(params[:search])
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
