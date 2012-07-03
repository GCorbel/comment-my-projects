FactoryGirl.define do
  factory :comment do
    username "My username"
    message "My message"
    user_ip "10.10.10.10"
    user_agent "Mozilla"
    referrer "www.test.com"
    after_build { |comment| comment.stubs(:spam?).returns(false) }
    after_create { |comment| comment.stubs(:spam?).returns(false) }
  end
end
