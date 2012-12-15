require 'spec_helper'

describe MessagesController do
  before do
    @message = Message.create(email: 'test@test.com', body: 'test')
    Message.stubs(:new).returns(@message)
  end

  describe "POST 'create'" do
    it "send an email" do
      MessageMailer.expects(:contact).with(@message.email, @message.body)
      post :create, { body: @message.body }
    end
  end
end
