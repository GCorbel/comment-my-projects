require 'spec_helper'

describe Authentication do

  let(:info) { stub name: 'name', email: 'test@test.com' }
  let(:omniauth) { stub info: info }
  subject { Authentication.new(omniauth) }

  describe :user do
    it 'return the user if the user exists with the username' do
      User.expects(:find_by_username).with('name')
      subject.user
    end

    it 'create a new user if the name doesn''t exist' do
      User.expects(:find_by_username).returns(nil)
      User.expects(:create_by_username_and_email).with(info.name, info.email)
      subject.user
    end
  end

  describe :authenticated? do
    it 'return true if the user is finded' do
      subject.stubs(:user).returns(stub)
      expect(subject.authenticated?).to be_true
    end

    it 'return false if the user is not finded' do
      subject.stubs(:user).returns(nil)
      expect(subject.authenticated?).to be_false
    end
  end
end
