require 'spec_helper'

describe ProjectType do
  it { should have_many(:projects) }
end
