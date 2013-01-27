module CommentHelper
  def comment_title_for(comment)
    content_tag(:div, class: 'comment_header') do
      image_tag(avatar_url(comment.user, 66), class: 'avatar') +
      username_for(comment) +
      raw('<br/>') +
      comment.created_at.strftime('%d/%m/%Y %H:%M')
    end
  end

  private

  def username_for(comment)
    if comment.user
      link_to(comment.user.username, comment.user)
    else
      comment.username
    end
  end
end
