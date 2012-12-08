#encoding=utf-8
class ProjectsController < ApplicationController
  inherit_resources
  before_filter :authenticate_user!, except: [:index, :show, :feed]
  before_filter :search_tags, only: [:new, :edit, :index]
  load_and_authorize_resource

  def show
    @comment = Comment.new
    @note = Note.new
  end

  def index
    if params[:search]
      @search = Search.new(params[:search])
      @projects = @search.project_text_search
    else
      @search = Search.new(text: '')
      @projects = Project.order("updated_at DESC")
    end
  end

  def create
    @project.user = current_user
    create!
  end

  def destroy
    destroy! { root_url }
  end

  def feed
    respond_to do |format|
      @projects = Project.order("updated_at DESC")
      @updated = @projects.first.try(:updated_at)

      format.atom { render layout: false }
    end
  end

  private

  def search_tags
    @tags = ActsAsTaggableOn::Tag.all.map(&:name).join(',')
  end
end
