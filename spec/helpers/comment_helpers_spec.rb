describe CommentHelper do
  let(:user) { build_stubbed(:user) }
  let(:comment) { build_stubbed(:comment, created_at: now) }
  let(:now) { DateTime.now }
  let(:formatted_now) { now.strftime('%d/%m/%Y %H:%M') }

  describe :comment_title do
    subject { comment_title_for(comment) }

    context 'when there is a user' do
      it 'show the title' do
        comment.user = user
        should == "#{user.username} - #{formatted_now}"
      end
    end

    context 'when there is a username' do
      it 'show the title with the username' do
        should == "#{comment.username} - #{formatted_now}"
      end
    end
  end
end
