#encoding=utf-8
class ProjectsController < ApplicationController
  before_filter :authenticate_user!

  def new
    @project = Project.new
  end

  def create
    @project = Project.new
    current_user.projects << @project
    redirect_to(project_path(@project),
                notice: "Votre projet a été ajouté")
  end

  def show
    @project = Project.find(params[:id])
  end
end
