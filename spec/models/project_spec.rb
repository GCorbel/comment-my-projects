require 'spec_helper'

describe Project do
  it { belong_to(:user) }
end
