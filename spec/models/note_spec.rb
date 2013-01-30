require 'spec_helper'

describe Note do
  it { should belong_to(:project) }
  it { should belong_to(:tag) }
  it { should belong_to(:user) }

  it { should validate_presence_of :value }
  it { should validate_presence_of :project }
  it { should validate_presence_of :user_id }

  it { should validate_uniqueness_of(:user_id).scoped_to(:project_id, :tag_id) }
end
