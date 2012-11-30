class ActualitiesController < ApplicationController
  inherit_resources
  belongs_to :project, optional: true
  before_filter :authenticate_user!, except: :show
  load_and_authorize_resource

  def show
    @comment = Comment.new
  end

  def destroy
    destroy! { project_path(@actuality.project) }
  end

  def feed
    respond_to do |format|
      @actualities = Actuality.order("updated_at DESC")
      @updated = @actualities.first.try(:updated_at)

      format.atom { render layout: false }
      format.rss { redirect_to feed_actualities_path(format: :atom), status: 301 }
    end
  end
end
