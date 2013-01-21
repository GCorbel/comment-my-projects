class HomeController < ApplicationController
  def index
    @page = Page.where(home: true).first
  end
end
