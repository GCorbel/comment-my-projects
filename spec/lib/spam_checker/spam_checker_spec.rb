require 'spec_helper'

describe SpamChecker do
  let(:project) { build_stubbed(:project) }
  let(:category) { build_stubbed(:category) }
  let(:invalid_comment)  { build_stubbed(:comment, item: project) }
  let(:request) { stub(remote_ip: '1.1.1.1',
                       env: {
                          "HTTP_USER_AGENT" => "User Agent",
                          "HTTP_REFERER" => "Referer"
                       }
                ) }

  context "when the comment is a spam" do
    it "say than the comment is a spam" do
      SpamChecker.any_instance.stubs(:spam?).returns(true)
      expect(SpamChecker.spam?(invalid_comment, request)).to be_true
    end
  end
end
