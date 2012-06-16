require 'spec_helper'

describe User do
  let(:user) { create(:user) }
  
  it { should have_many(:projects) }

  describe :to_s do
    subject { user.to_s }

    it { should == user.username }
  end
end
