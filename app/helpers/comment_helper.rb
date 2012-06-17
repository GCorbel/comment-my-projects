module CommentHelper
  def comment_title_for(comment)
    (comment.user ? comment.user.username : comment.username) +
    ' - ' +
    comment.created_at.strftime('%d/%m/%Y %H:%M')
  end
end
