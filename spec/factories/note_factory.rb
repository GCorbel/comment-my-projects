FactoryGirl.define do
  factory :note do
    value 10
    association :category, factory: :category
    association :project, factory: :project
  end
end
