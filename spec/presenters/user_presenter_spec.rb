require 'spec_helper'

describe UserPresenter do
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:project1) { create(:project) }
  let(:project2) { create(:project) }
  let(:project3) { create(:project) }

  describe :top_project do
    it "give the users who have more of project" do
      user1.projects << [project1, project2]
      user2.projects << project3

      users = UserPresenter.top_project(1)

      users.length.should == 1
      users.first.should == user1
    end
  end
end
