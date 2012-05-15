require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:project) }
  it { should belong_to(:category) }

  it { should validate_presence_of(:message) }
end
