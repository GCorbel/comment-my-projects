require "spec_helper"

describe MessageMailer do
  describe "contact" do
    subject { MessageMailer.contact("email", "body") }
    its(:from) { should eq ["email"] }
    its(:subject) { should eq "You received an email from Social-Reviewing.com" }
    its(:body) { should have_content("body") }
    its(:to) { should eq ["contact@social-reviewing.com"] }
  end

end
