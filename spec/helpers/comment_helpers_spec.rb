describe CommentHelper do
  helper.extend(ApplicationHelper)

  let(:user) { build_stubbed(:user) }
  let(:comment) { build_stubbed(:comment, created_at: now) }
  let(:now) { DateTime.now }
  let(:formatted_now) { now.strftime('%d/%m/%Y %H:%M') }

  describe :comment_title do
    subject { comment_title_for(comment) }

    context 'when there is a user' do
      before { self.stubs(:avatar_url).returns('id') }

      it 'show the title' do
        comment.user = user
        should eq "<div class=\"comment_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "#{user.username}" \
            "<br/>" \
            "#{formatted_now}" \
          "</div>"
      end
    end

    context 'when there is a username' do
      before { self.stubs(:avatar_url).returns('id') }
      it 'show the title with the username' do
        should eq "<div class=\"comment_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "#{comment.username}" \
            "<br/>" \
            "#{formatted_now}" \
          "</div>"
      end
    end
  end
end
