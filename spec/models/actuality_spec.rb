require 'spec_helper'

describe Actuality do
  let(:actuality) { create(:actuality) }
  it { should belong_to(:project) }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:project) }

  describe :to_param do
    subject { actuality.to_param }

    it { should == "#{actuality.id}-#{actuality.title.parameterize}" }
  end
end
