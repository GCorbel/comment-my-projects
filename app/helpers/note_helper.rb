module NoteHelper
  def note_for(project, category)
    content_tag(:div, class: 'notes') do
      note = project.note_for(category)
      number_of_notes = project.number_of_notes_for(category)
      number_of_notes_plural = pluralize(number_of_notes, 'vote')
      raw(
        "#{category.label} : " +
        if number_of_notes == 0
          'Aucun vote'
        else
          stars(note, 'true') +
          stars(4 - note, 'false') +
          " (#{note}/4 - #{number_of_notes_plural})"
        end
      )
    end
  end

  private

  def stars(note, css)
    note.to_i.times.collect do
      content_tag(:span, '', class: "star #{css}")
    end.join
  end
end
