FactoryGirl.define do
  factory :actuality do
    title "Actuality Title"
    body "Body"
    association :project, factory: :project
  end
end
