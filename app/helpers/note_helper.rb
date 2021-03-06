module NoteHelper
  def note_for(project, tag)
    content_tag(:div, class: 'notes') do
      note = project.note_for(tag)
      number_of_notes = project.number_of_notes_for(tag)
      number_of_notes_plural =
        number_of_notes.to_s + ' vote'.pluralize(number_of_notes)

      raw(
        "#{tag.name} : " +
        if number_of_notes == 0
          'Aucun vote'
        else
          all_stars(note) + " (#{note}/4 - #{number_of_notes_plural})"
        end
      )
    end
  end

  def link_and_note_for(project)
    tag = ActsAsTaggableOn::Tag.new(name: 'General')
    note = project.note_for(tag)
    number_of_notes = project.number_of_notes_for(tag)
    number_of_notes_plural =
      number_of_notes.to_s + ' vote'.pluralize(number_of_notes)

    link = link_to project,project
    raw(
      "#{link} : " +
      all_stars(note) + " (#{note}/4 - #{number_of_notes_plural})"
    )
  end

  def stars_for(project, tag)
    number_of_notes = project.number_of_notes_for(tag)
    note = project.note_for(tag)
    content_tag(:div, class: 'notes') do
      raw(
        if number_of_notes == 0
          tag.name
        else
          "#{tag.name} : " + all_stars(note)
        end
      )
    end
  end

  private

  def all_stars(note)
    stars(note, 'true') + stars(4 - note, 'false')
  end

  def stars(note, css)
    note.round.times.collect do
      content_tag(:span, '', class: "star #{css}")
    end.join
  end
end
