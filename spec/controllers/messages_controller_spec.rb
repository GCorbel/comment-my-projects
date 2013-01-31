require 'spec_helper'

describe MessagesController do
  let!(:message) { build_stubbed(:message) }

  before do
    Message.stubs(:new).returns(message)
    message.stubs(:save)
  end

  describe "POST 'create'" do
    it "send an email" do
      MessageMailer.expects(:contact).with(message.email, message.body)
      post :create, { body: message.body }
    end
  end
end
