module NoteHelper
  def note_for(project, category)
    content_tag(:div, class: 'notes') do
      raw(
        category.label +
        ' : ' +
        if project.number_of_notes_for(category) == 0
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
            project.number_of_notes_for(category), 'vote'
          ) +
          ')'
        end
      )
    end
  end
end
