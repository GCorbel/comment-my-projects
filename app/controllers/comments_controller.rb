#encoding=utf-8
require "#{Rails.root}/lib/spam_checker/spam_checker"
class CommentsController < ApplicationController
  inherit_resources
  belongs_to :project
  load_resource :project
  load_resource through: :project
  authorize_resource
  respond_to :js

  def new
    @comment.ancestry = params[:ancestry]
  end

  def create
    @comment.parent = Comment.find(@comment.ancestry) if @comment.ancestry
    @comment.user = current_user
    @comment.approved = !SpamChecker.spam?(@comment, request)
    create!
  end

  def destroy
    @comment.project = @project
    destroy!
  end
end
