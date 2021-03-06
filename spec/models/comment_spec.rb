require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:item) }

  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:item) }
  it { should validate_presence_of(:username) }
end
