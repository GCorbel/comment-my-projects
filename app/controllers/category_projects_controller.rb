#encoding=utf-8
class CategoryProjectsController < ApplicationController
  inherit_resources
  belongs_to :project
  before_filter :authenticate_user!
  load_resource :project
  load_resource through: :project
  before_filter :add_project_to_category_project, :set_categories
  before_filter :add_category_to_list, only: [:edit, :update]
  authorize_resource

  def new
    @category_project.id = @project.id
  end

  def create
    create! { project_path(@project) }
  end

  def update
    update! { project_path(@project) }
  end

  def destroy
    destroy! { project_path(@project) }
  end

  private
    def add_category_to_list
      @categories << @category_project.category
    end

    def add_project_to_category_project
      @category_project.project = @project if @category_project
    end

    def set_categories
      @categories = Category.all - @project.categories
    end
end
