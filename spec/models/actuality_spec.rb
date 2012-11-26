require 'spec_helper'

describe Actuality do
  let(:actuality) { create(:actuality) }
  let(:comment) { create(:comment, item: actuality) }

  it { should have_many(:comments) }
  it { should belong_to(:project) }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:project) }

  it { should delegate_method(:user).to(:project) }
  it { should delegate_method(:user_id).to(:project) }
  it { should delegate_method(:followers).to(:project) }

  describe :to_param do
    subject { actuality.to_param }

    it { should == "#{actuality.id}-#{actuality.title.parameterize}" }
  end

  describe :root_comments do
    it 'give root comments for the actuality' do
      create(:comment, parent: comment, item: actuality)
      actuality.root_comments.size.should == 1
    end
  end
end
