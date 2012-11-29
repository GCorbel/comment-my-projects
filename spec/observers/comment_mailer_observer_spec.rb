describe CommentMailerObserver do

  let(:user) { build_stubbed(:user) }
  let(:user2) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user2) }
  let(:comment) { build(:comment, item: project, user: user, username: nil) }
  let(:mailer) { stub(:deliver) }

  before do
    project.stubs(:followers_ids).returns([user2.id])
    User.stubs(:find).returns(user2)
  end

  after { comment.save! }

  describe :after_create do
    context "when the comment is approved " do
      it "send an email to the project owner" do
        CommentMailer.expects(:comment_notify_item_owner)
        .with(user2, project)
        .returns(mailer)
      end

      context 'when there is followers' do
        it 'send an email to all the followers' do
          CommentMailer.expects(:comment_notify_followers)
          .with(user2, project)
          .returns(mailer)
        end
      end
    end
  end
end
