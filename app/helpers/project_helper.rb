#encoding=utf-8
module ProjectHelper
  def project_title_for(project)
    content_tag(:div, class: 'project_header') do
      image_tag(avatar_url(project.user, 76), class: 'avatar') +
      raw("<h1>#{project}</h1>") +
      raw("#{t('project.show.site')} : #{link_to(project.url, project.url)}") +
      raw("<br/>") +
      "#{t('project.show.added_by')} : #{project.user}" +
      raw("<br/>") +
      t('project.show.date', date: project.created_at.strftime('%d/%m/%Y %H:%M'))
    end
  end
end
