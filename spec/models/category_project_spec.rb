require 'spec_helper'

describe CategoryProject do
  it { should belong_to :project }
  it { should belong_to :category }
end
