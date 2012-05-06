require 'spec_helper'

describe Project do
  it { should belong_to(:user) }

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }
end
