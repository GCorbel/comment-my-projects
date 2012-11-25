require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:project) }

  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:project) }
  it { should validate_presence_of(:username) }

  let(:user) { build(:user) }
  let(:project) { build(:project, user: user) }
  let(:comment) { build(:comment,
                        project: project,
                        user: user,
                        username: nil) }
end
