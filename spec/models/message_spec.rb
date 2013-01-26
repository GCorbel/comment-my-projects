require 'spec_helper'

describe Message do
  it { should validate_presence_of(:email) }
  it { should validate_format_of(:email).not_with('test@test') }
  it { should validate_format_of(:email).with('test@test.com') }
  it { should_not be_persisted }
end
