require 'spec_helper'

describe ProjectPresenter do

  let(:project1) { create(:project) }
  let(:project2) { create(:project) }
  let(:user) { create(:user) }

  describe :top do
    it "give the five best projects" do
      project1.notes << build(:note, value: 4, user: user)
      project1.notes << build(:note, value: 4, user: user)
      project1.notes << build(:note, value: 4, user: user)

      project2.notes << build(:note, value: 4, user: user)
      project2.notes << build(:note, value: 5, user: user)

      projects = ProjectPresenter.top(1)

      expect(projects.length).to eq 1
      expect(projects.first.id).to eq project2.id
    end
  end
end
