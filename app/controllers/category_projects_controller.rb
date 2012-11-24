#encoding=utf-8
class CategoryProjectsController < ApplicationController
  inherit_resources
  belongs_to :project
  before_filter :authenticate_user!
  load_resource :project
  load_resource through: :project
  before_filter :add_project_to_category_project, :set_categories
  authorize_resource

  def new
    @category_project.id = @project.id
  end

  def create
    create! { project_path(@project) }
  end

  def edit
    @categories << @category_project.category if @category_project
    edit!
  end

  def update
    @categories << @category_project.category
    update! { project_path(@project) }
  end

  def destroy
    destroy! { project_path(@project) }
  end

  private
    def add_project_to_category_project
      @category_project.project = @project if @category_project
    end

    def set_categories
      @categories = Category.all - @project.categories
    end
end
