module CommentHelper
  def comment_title_for(comment)
    content_tag(:div, class: 'comment_header') do
      image_tag(avatar_url(comment.user, 66), class: 'avatar') +
      (comment.user ? comment.user.username : comment.username) +
      raw('<br/>') +
      comment.created_at.strftime('%d/%m/%Y %H:%M')
    end
  end
end
