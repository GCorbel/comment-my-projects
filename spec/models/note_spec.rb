require 'spec_helper'

describe Note do
  it { should belong_to(:project) }
  it { should belong_to(:category) }

  it { should validate_presence_of :value }
  it { should validate_presence_of :project }
  it { should validate_presence_of :category }
end
