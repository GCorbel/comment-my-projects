require 'spec_helper'

describe Users::OmniauthCallbacksController do

  let(:auth) { stub(user: user) }
  let(:user) { build_stubbed(:user) }

  before do
    Authentication.stubs(:new).returns(auth)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    controller.stubs(:render)
  end

  describe "GET 'google'" do
    subject { get 'google_oauth2' }

    context "when the user is authencated" do
      before { auth.stubs(:authenticated?).returns(true) }

      it "sign in and redirect to user" do
        controller.expects(:sign_in_and_redirect).with(user)
        get 'google_oauth2'
      end
    end

    context "when the user is not authencated" do
      before { auth.stubs(:authenticated?).returns(false) }

      it { should redirect_to(new_user_registration_url) }
    end
  end
end
