#encoding=utf-8
class CategoryProjectsController < ApplicationController
  before_filter :authenticate_user!

  def new
    @project = Project.find(params[:project_id])
    @category_project = CategoryProject.new(project: @project)
    @categories = Category.all - @project.categories
  end

  def create
    @project = Project.find(params[:project_id])
    redirect_to @project, notice: "La description a été ajoutée"
  end
end
