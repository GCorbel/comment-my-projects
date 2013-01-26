FactoryGirl.define do
  factory :user do |f|
    f.sequence(:id) { |n| n}
    f.sequence(:username){ |n| "guirec#{n}"}
    f.password "test1234"
    f.password_confirmation "test1234"
    f.sequence(:email){ |n| "guirec.corbel#{n}@gmail.com"}
  end
end
