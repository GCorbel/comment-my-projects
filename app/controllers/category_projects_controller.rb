#encoding=utf-8
class CategoryProjectsController < ApplicationController
  before_filter :authenticate_user!
  load_resource
  before_filter :find_project_and_set_categories

  def new
    @category_project.id = @project.id
  end

  def create
    if @category_project.save
      redirect_to @project, notice: "La description a été ajoutée"
    else
      render :new
    end
  end

  def edit
    @categories << @category_project.category if @category_project
  end

  def update
    if @category_project.update_attributes(params[:category_project])
      redirect_to(@project, notice: "La description a été modifiée")
    else
      @categories << @category_project.category
      render :edit
    end
  end

  def destroy
    @category_project.destroy
    redirect_to(@project, notice: "La description a été supprimée")
  end

  private
    def find_project_and_set_categories
      @project = Project.find(params[:project_id])
      @category_project.project = @project
      @categories = Category.all - @project.categories
    end
end
