require 'spec_helper'

describe MessagesController do
  let!(:message) { build_stubbed(:message) }
  let(:mailer) { stub }

  before do
    Message.stubs(:new).returns(message)
    message.stubs(:save)
  end

  describe "POST 'create'" do
    it "send an email" do
      MessageMailer.stubs(:contact)
                   .with(message.email, message.body)
                   .returns(mailer)
      mailer.expects(:deliver)
      post :create, { body: message.body }
    end
  end
end
