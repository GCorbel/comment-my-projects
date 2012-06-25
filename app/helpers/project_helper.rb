#encoding=utf-8
module ProjectHelper
  def project_title_for(project)
    content_tag(:div, class: 'project_header') do
      image_tag(avatar_url(project.user, 76), class: 'avatar') +
      raw("<h1>#{project}</h1>") +
      raw("Site : #{link_to(project.url, project.url)}") +
      raw("<br/>") +
      "Ajouté par : #{project.user}" +
      raw("<br/>") +
      "Le : #{project.created_at.strftime('%d/%m/%Y %H:%M')}"
    end
  end
end
