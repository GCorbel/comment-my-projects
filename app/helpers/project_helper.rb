module ProjectHelper
  include NoteHelper
  include ApplicationHelper

  def project_title_for(project)
    @project = project
    content_tag(:div, class: 'project_header') do
      image + title + link + added_by + date
    end
  end

  def tags_for(project)
    "#{I18n.t('shared.tags')} : " +
    project.tags_with_general.map do |tag|
      stars_for(project, tag)
    end.join(", ")
  end

  private
  def image
    image_for(@project.user)
  end

  def title
    content_tag(:h1) do
      @project.to_s
    end
  end

  def link
    link_to_project = link_to(@project.url, @project.url)
    content_tag(:p) do
      raw(t('project.show.site', link: link_to_project))
    end
  end

  def added_by
    user = @project.user
    link = user ? link_to(user.username, user) : "deleted user"
    content_tag(:p) do
      raw(t('project.show.added_by', user: link))
    end
  end

  def date
    content_tag(:p) do
      t('project.show.date',
        date: @project.created_at.strftime('%d/%m/%Y %H:%M'))
    end
  end
end
