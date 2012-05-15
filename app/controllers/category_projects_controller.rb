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

  def edit
    @category_project = CategoryProject.find(params[:id])
    @categories << @category_project.category if @category_project
  end

  def update
    @category_project = CategoryProject.find(params[:id])
    if @category_project.update_attributes(params[:category_project])
      redirect_to(@project, notice: "La description a été modifiée")
    else
      @categories << @category_project.category
      render :edit
    end
  end

  private
    def find_project_and_set_categories
      @project = Project.find(params[:project_id])
      @categories = Category.all - @project.categories
    end
end
