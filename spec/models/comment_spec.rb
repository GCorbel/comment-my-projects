require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:project) }
  it { should belong_to(:category) }

  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:project) }
  it { should validate_presence_of(:category) }
  it { should validate_presence_of(:username) }

  let(:category) { build(:category) }
  let(:user) { build(:user) }
  let(:project) { build(:project, user: user) }
  let(:comment) { build(:comment,
                        project: project,
                        category: category,
                        user: user,
                        username: nil) }
end
