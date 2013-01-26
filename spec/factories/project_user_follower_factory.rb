FactoryGirl.define do
  factory :project_user_follower do
    association :user, factory: :user
    association :project, factory: :project
  end
end
