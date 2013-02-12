describe CommentHelper do
  helper.extend(ApplicationHelper)

  let(:user) { build_stubbed(:user) }
  let(:comment) { build_stubbed(:comment, created_at: now) }
  let(:now) { DateTime.now }
  let(:formatted_now) { now.strftime('%d/%m/%Y %H:%M') }

  describe :comment_title do
    subject { comment_title_for(comment) }
    before { self.stubs(:avatar_url).returns('id') }

    context 'when there is a user' do
      it 'show the title' do
        comment.user = user
        should eq "<div class=\"comment_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "#{link_to(user.username, user)}" \
            "<br/>" \
            "#{formatted_now}" \
          "</div>"
      end
    end

    context 'when there is a username' do
      it 'show the title with the username' do
        should eq "<div class=\"comment_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "#{comment.username}" \
            "<br/>" \
            "#{formatted_now}" \
          "</div>"
      end
    end

    context 'when there is no user and no username' do
      before do
        comment.stubs(:user).returns(nil)
        comment.stubs(:username).returns(nil)
      end

      it 'show the title without the username' do
        should eq "<div class=\"comment_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "deleted user" \
            "<br/>" \
            "#{formatted_now}" \
          "</div>"
      end
    end
  end
end
