FactoryGirl.define do
  factory :tag, class: ActsAsTaggableOn::Tag do
    name 'tag'
  end
end
