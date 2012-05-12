require 'spec_helper'

describe Category do
  it { should have_many(:projects).through(:category_projects) }
  it { should have_many(:category_projects) }
end
