require 'spec_helper'

describe ProjectUserFollower do
  it { should belong_to(:project) }
  it { should belong_to(:user) }
end
