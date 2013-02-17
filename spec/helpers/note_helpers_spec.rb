describe NoteHelper do
  let(:project) { build_stubbed(:project) }
  let(:tag) { build_stubbed(:tag) }

  describe :note_for do
    context 'when there is a vote' do
      it 'show notes with stars' do
        project.expects(:note_for).with(tag).returns(3.3)
        project.expects(:number_of_notes_for).with(tag).returns(3)
        expect(note_for(project, tag)).to eq '<div class="notes">' \
          "#{tag.name} : " \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star false"></span>' \
          ' (3.3/4 - 3 votes)' \
        '</div>'
      end
    end

    context 'when there is no vote' do
      it 'give a message' do
        expect(note_for(project, tag)).to eq '<div class="notes">' \
        "#{tag.name} : " \
        'Aucun vote' \
        '</div>'
      end
    end
  end

  describe :link_and_note_for do
    it "show the note for a project with a link" do
      expect(link_and_note_for(project)).to eq "" \
        "<a href=\"/en/projects/#{project.id}-title\">Title</a> : Aucun vote"
    end
  end

  describe :star_for do
    context 'when there is a vote' do
      it 'show notes with stars' do
        project.expects(:note_for).with(tag).returns(3.3)
        project.expects(:number_of_notes_for).returns(3)
        expect(stars_for(project, tag)).to eq '<div class="notes">' \
          "#{tag.name} : " \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star false"></span>' \
        '</div>'
      end
    end

    context 'when there is no vote' do
      it 'show only the tag name' do
        expect(stars_for(project, tag)).to eq '<div class="notes">' \
          "#{tag.name}" \
        '</div>'
      end
    end
  end
end
