#encoding=utf-8
require "#{Rails.root}/lib/action_view/helpers/text_helper"
module ApplicationHelper
  extend ActionView::Helpers::TextHelper

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
    [(title if title.present?), "Social Reviewing"].compact.join(" - ")
  end

  def page_description(description)
    content_for(:description, description)
  end

  def browser_description(description = nil)
    if description.present?
      description[0..160]
    else
      t('helpers.site_description')
    end
  end

  def markdown(code)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML,
                                       autolink: true,
                                       no_intra_emphasis: true,
                                       fenced_code_blocks: true)
    raw(markdown.render(code))
  end

  def avatar_url(user, size=100)
    default_url = "http://#{request.host}:#{request.port}/assets/guest.png"
    return default_url if user.nil? || Rails.env.test?
    avatar_id = Digest::MD5.hexdigest(user.email.downcase)
    "http://gravatar.com/avatar/#{avatar_id}.png" \
      "?s=#{size}&d=#{CGI.escape(default_url)}"
  end

  def image_for(user)
    image_tag(avatar_url(user, 76), class: 'avatar')
  end

  def excerpt_for(project, text)
    regex = Regexp.new text
    options = { separator: "\n", radius: 1 }
    finded_text = if project.description =~ regex
      excerpt(project.description, text, options)
    elsif project.comment_message =~ regex
      excerpt(project.comment_message, text, options)
    else
      excerpt(project.description, "", options)
    end
    highlight(finded_text, text)
  end

  def link_to_locales
    text = I18n.locale == :en ? "Version Française" : "English Version"
    locale = I18n.locale == :en ? :fr : :en
    link_to raw("<i class='icon-flag'></i> #{text}"), root_path(locale: locale)
  end
end
