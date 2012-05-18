FactoryGirl.define do
  factory :comment do
    username "My username"
    message "My message"
  end
  factory :note do
    value 10
    association :category, factory: :category
    association :project, factory: :project
  end
end
