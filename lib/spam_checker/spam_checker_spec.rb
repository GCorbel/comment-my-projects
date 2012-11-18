require 'spec_helper'

describe SpamChecker do
  let(:project) { create(:project) }
  let(:category) { create(:category) }
  let(:invalid_comment)  { create(:comment,
                                  project: project,
                                  category: category) }
  let(:request) { stub(remote_ip: '1.1.1.1',
                       env: {
                          "HTTP_USER_AGENT" => "User Agent",
                          "HTTP_REFERER" => "Referer"
                       }
                ) }

  context "when the comment is a spam" do
    it "say than the comment is a spam" do
      SpamChecker.any_instance.stubs(:spam?).returns(true)
      SpamChecker.spam?(invalid_comment, request).should be_true
    end
  end
end
