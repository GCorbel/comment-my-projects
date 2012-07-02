FactoryGirl.define do
  factory :comment do
    username "My username"
    message "My message"
    user_ip "10.10.10.10"
    user_agent "Mozilla"
    referrer "www.test.com"
  end
end
