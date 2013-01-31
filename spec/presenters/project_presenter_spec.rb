require 'spec_helper'

describe ProjectPresenter do
  describe :top do
    it "give the five best projects" do
      Project.expects(:top).with(1)
      ProjectPresenter.top(1)
    end
  end
end
