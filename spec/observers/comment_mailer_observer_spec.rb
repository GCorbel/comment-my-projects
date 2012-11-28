describe CommentMailerObserver do

  let(:category) { build(:category) }
  let(:user) { build(:user) }
  let(:user2) { build(:user) }
  let(:user3) { build(:user) }
  let(:project) { build(:project) }
  let(:comment1) { build(:comment,
                         item: project,
                         user: user,
                         username: nil) }
  let(:comment2) { build(:comment, username: nil) }
  let(:mailer) { stub(:deliver) }

  describe :after_create do
    it "send an email to the project owner" do
      project.user = user2
      project.save!
      CommentMailer.expects(:comment_notify_item_owner)
                   .with(user2, project)
                   .returns(mailer)
      comment1.save
    end
  end

  context 'when there is followers' do
    it 'send an email to all the followers' do
      project.user = user2
      project.save
      project.add_follower(user2)
      CommentMailer.expects(:comment_notify_followers)
                   .with(user2, project)
                   .returns(mailer)
      comment1.save
    end
  end
end
