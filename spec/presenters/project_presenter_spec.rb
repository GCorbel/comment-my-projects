require 'spec_helper'

describe ProjectPresenter do

  let(:note1) { create(:note, value: 1) }
  let(:note2) { create(:note, value: 5) }

  let(:project1) { create(:project) }
  let(:project2) { create(:project) }


  describe :top do
    it "give the five best projects" do
      project1.notes << note1
      project2.notes << note2

      projects = ProjectPresenter.top(1)

      projects.length.should == 1
      projects.first.id.should == project2.id
    end
  end
end
