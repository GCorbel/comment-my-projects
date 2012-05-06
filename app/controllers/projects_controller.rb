#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]

  def show
    @project = Project.find(params[:id])
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
end
