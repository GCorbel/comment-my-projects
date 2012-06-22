module NoteHelper
  def note_for(project, category)
    content_tag(:div, class: 'notes') do
      raw(
        category.label +
        ' : ' +
        if project.notes.where(category_id: category.id).count == 0
          'Aucun vote'
        else
          project.note_for(category).to_i.times.collect do
            content_tag(:span, '', class: 'star true')
          end.join +
          project.note_for(category).to_i.times.collect do
            content_tag(:span, '', class: 'star false')
          end.join +
          ' (' +
          project.note_for(category).to_s +
          '/4 - ' +
          pluralize(
            project.notes.where(category_id: category.id).count, 'vote'
          ) +
          ')'
        end
      )
    end
  end
end
