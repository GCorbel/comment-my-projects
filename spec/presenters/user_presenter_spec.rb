require 'spec_helper'

describe UserPresenter do
  describe :top_project do
    it "give the users who have more of project" do
      User.expects(:top_project).with(1)
      UserPresenter.top_project(1)
    end
  end
end
