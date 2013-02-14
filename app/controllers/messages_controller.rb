class MessagesController < ApplicationController
  inherit_resources
  load_and_authorize_resource

  def create
    MessageMailer.contact(@message.email, @message.body).deliver
    create! { root_url }
  end
end
