require 'spec_helper'

describe ProjectPresenter do

  let(:project1) { create(:project) }
  let(:project2) { create(:project) }

  describe :top do
    it "give the five best projects" do
      project1.notes << build(:note, value: 4)
      project1.notes << build(:note, value: 4)
      project1.notes << build(:note, value: 4)

      project2.notes << build(:note, value: 4)
      project2.notes << build(:note, value: 5)

      projects = ProjectPresenter.top(1)

      projects.length.should == 1
      projects.first.id.should == project2.id
    end
  end
end
