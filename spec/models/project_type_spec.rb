require 'spec_helper'

describe ProjectType do
  let(:project_type) { create(:project_type) }
  it { should have_many(:projects) }

  describe :to_s do
    subject { project_type.to_s }

    it { should == project_type.label }
  end
end
