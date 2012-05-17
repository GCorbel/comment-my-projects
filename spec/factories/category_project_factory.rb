FactoryGirl.define do
  factory :category_project do
    description 'test'
    association :category, factory: :category
    association :project, factory: :project
  end
end
