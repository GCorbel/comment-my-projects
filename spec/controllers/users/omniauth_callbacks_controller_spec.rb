require 'spec_helper'

describe Users::OmniauthCallbacksController do

  let(:auth) { stub(user: user) }
  let(:user) { build_stubbed(:user) }

  before do
    Authentication.stubs(:new).returns(auth)
    @request.env["devise.mapping"] = Devise.mappings[:user]
    controller.stubs(:render)
  end

  shared_examples "a omniauth action" do
    subject { do_get! }

    context "when the user is authencated" do
      before { auth.stubs(:authenticated?).returns(true) }

      it "sign in and redirect to user" do
        controller.expects(:sign_in_and_redirect).with(user)
        do_get!
      end
    end

    context "when the user is not authencated" do
      before { auth.stubs(:authenticated?).returns(false) }

      it { should redirect_to(new_user_registration_url) }
    end
  end

  describe "GET 'google'" do
    let(:do_get!) { get 'google_oauth2' }

    it_behaves_like "a omniauth action"
  end

  describe "GET 'facebook'" do
    let(:do_get!) { get 'facebook' }

    it_behaves_like "a omniauth action"
  end
end
