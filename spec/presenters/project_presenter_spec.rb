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

      expect(projects.length).to eq 1
      expect(projects.first.id).to eq project2.id
    end
  end
end
