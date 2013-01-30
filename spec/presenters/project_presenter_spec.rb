require 'spec_helper'

describe ProjectPresenter do

  let(:project1) { create(:project) }
  let(:project2) { create(:project) }
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:user3) { create(:user) }

  describe :top do
    it "give the five best projects" do
      project1.notes << build(:note, value: 4, user: user1)
      project1.notes << build(:note, value: 4, user: user2)
      project1.notes << build(:note, value: 4, user: user3)

      project2.notes << build(:note, value: 4, user: user1)
      project2.notes << build(:note, value: 5, user: user2)

      projects = ProjectPresenter.top(1)

      expect(projects.length).to eq 1
      expect(projects.first.id).to eq project2.id
    end
  end
end
