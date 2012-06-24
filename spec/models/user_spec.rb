require 'spec_helper'

describe User do
  let(:user) { create(:user) }
  let(:project) { create(:project) }
  
  it { should have_many(:projects) }

  describe :to_s do
    subject { user.to_s }

    it { should == user.username }
  end

  describe :follow? do
    context 'when the user follow the project' do
      it 'give true' do
        project.add_follower(user)
        user.follow?(project).should be_true
      end
    end

    context 'when the user doesn\'t follow the project' do
      it 'give false' do
        user.follow?(project).should be_false
      end
    end
  end
end
