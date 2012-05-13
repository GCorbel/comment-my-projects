require 'spec_helper'

describe CategoryProject do
  it { should belong_to :project }
  it { should belong_to :category }

  it { should validate_presence_of :category }
  it { should validate_presence_of :project }
  it { should validate_presence_of :description }
end
