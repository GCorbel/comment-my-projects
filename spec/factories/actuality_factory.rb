FactoryGirl.define do
  factory :actuality do
    title "Title"
    body "Body"
    association :project, factory: :project
  end
end
