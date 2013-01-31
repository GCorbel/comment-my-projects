require 'spec_helper'

describe User do
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:project1) { create(:project) }
  let(:project2) { create(:project) }
  let(:project3) { create(:project) }

  it { should have_many(:projects) }

  describe :top_project do
    it "provides users with the most project" do
      user1.projects << [project1, project2]
      user2.projects << project3

      users = User.top_project(1)

      expect(users.length).to eq 1
      expect(users.first).to eq user1
    end
  end

  describe :to_s do
    subject { user1.to_s }

    it { should eq user1.username }
  end

  describe :follow? do
    context 'when the user follow the project' do
      it 'give true' do
        project1.add_follower(user1)
        expect(user1.follow?(project1)).to be_true
      end
    end

    context 'when the user doesn\'t follow the project' do
      it 'give false' do
        expect(user1.follow?(project1)).to be_false
      end
    end
  end
end
