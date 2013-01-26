FactoryGirl.define do
  factory :note do
    value 10
    association :project, factory: :project
  end
end
