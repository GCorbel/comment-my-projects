#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]

  def show
    @project = Project.find(params[:id])
    @comment = Comment.new
    @note = Note.new
  end

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(params[:project])
    if @project.valid? 
      current_user.projects << @project
      redirect_to(project_path(@project),
                  notice: "Votre projet a été ajouté")
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(params[:project])
      redirect_to(project_path(@project),
                  notice: "Votre projet a été modifié")
    else
      render :edit
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to(root_path, notice: "Votre projet a été supprimé")
  end
end
