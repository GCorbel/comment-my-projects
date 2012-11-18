require 'spec_helper'

describe Comment do
  it { should belong_to(:user) }
  it { should belong_to(:project) }
  it { should belong_to(:category) }

  it { should validate_presence_of(:message) }
  it { should validate_presence_of(:project) }
  it { should validate_presence_of(:category) }
  it { should validate_presence_of(:username) }

  let(:category) { build(:category) }
  let(:user) { build(:user) }
  let(:project) { build(:project, user: user) }
  let(:comment) { build(:comment,
                        project: project,
                        category: category,
                        user: user,
                        username: nil) }

  describe :request do
    it 'retrive information from request' do
      request = stub(remote_ip: '1.1.1.1',
                     env: {"HTTP_USER_AGENT" => "User Agent", "HTTP_REFERER" => "Referer"})
      comment.request = request
      comment.user_ip.should == '1.1.1.1'
      comment.user_agent.should == 'User Agent'
      comment.referrer.should == 'Referer'
    end
  end

  describe :after_create do
    it "mark as a spam if it's a spam" do
      comment = build(:comment, project: project, category: category)
      comment.approved = true
      comment.expects(:spam?).returns(true)
      comment.save
      comment.approved.should == false
    end

    context 'when the comment have a user' do
      it "don't validate presence of username" do
        comment.should be_valid
      end
    end
  end
end
