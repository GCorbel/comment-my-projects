#encoding=utf-8
class CategoryProjectsController < ApplicationController
  before_filter :authenticate_user!
  before_filter :find_project_and_set_categories

  def new
    @category_project = CategoryProject.new(project_id: @project.id)
  end

  def create
    @category_project = CategoryProject.new(params[:category_project])
    if @category_project.save
      redirect_to @project, notice: "La description a été ajoutée"
    else
      render :new
    end
  end

  private
    def find_project_and_set_categories
      @project = Project.find(params[:project_id])
      @categories = Category.all - @project.categories
    end
end
