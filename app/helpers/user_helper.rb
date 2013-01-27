module UserHelper
  def date_for_user(user)
    content_tag(:p) do
      t('users.show.date', date: user.created_at.strftime('%d/%m/%Y %H:%M'))
    end
  end
end
