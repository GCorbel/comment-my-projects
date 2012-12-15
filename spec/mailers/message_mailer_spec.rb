#encoding=utf-8
require "spec_helper"

describe MessageMailer do
  describe "contact" do
    subject { MessageMailer.contact("email", "body") }
    its(:to) { should == ["email"] }
    its(:subject) { should == "Vous avez reçu un message de Social-Reviewing.com" }
    its(:body) { should have_content("body") }
  end

end
