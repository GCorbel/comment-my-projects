require 'spec_helper'

describe Category do
  let(:category) { create(:category) }

  it { should have_many(:projects).through(:category_projects) }
  it { should have_many(:category_projects) }

  describe :to_s do
    subject { category.to_s }

    it { should == category.label }
  end
end
