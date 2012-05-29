module ApplicationHelper
  def alert_box(class_name, message)
    if message.present?
      message_tag = content_tag(:div, message)
      button_tag = content_tag(:button, "x", class: "close", data: { dismiss: "alert" })
      content_tag :div, button_tag + message_tag , class: "alert alert-#{class_name}"
    end
  end

  def page_title(title)
    content_for(:title, title)
  end

  def browser_title(title = nil)
    [(title if title.present?), "Comment My Projects"].compact.join(" - ")
  end
end
