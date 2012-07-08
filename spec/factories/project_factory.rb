FactoryGirl.define do
  factory :project do
    url "http://www.test.com"
    title "Title"
    association :type, factory: :project_type
  end
end
