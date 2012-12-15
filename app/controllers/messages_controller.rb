class MessagesController < ApplicationController
  inherit_resources
  load_and_authorize_resource

  def create
    MessageMailer.contact(@message.email, @message.body)
    create!
  end
end
