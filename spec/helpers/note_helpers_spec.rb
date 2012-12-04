describe NoteHelper do
  let(:project) { create(:project) }
  let(:tag) { create(:tag) }
  let(:note) { create(:note, tag: tag, value: 3) }

  describe :note_for do
    context 'when there is a vote' do
      it 'show notes with stars' do
        project.notes << note
        note_for(project, tag).should == '<div class="notes">' \
          "#{tag.name} : " \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star true"></span>' \
          '<span class="star false"></span>' \
          ' (3.0/4 - 1 vote)' \
        '</div>'
      end
    end

    context 'when there is no vote' do
      it 'give a message' do
        note_for(project, tag).should == '<div class="notes">' \
        "#{tag.name} : " \
        'Aucun vote' \
        '</div>'
      end
    end
  end
end
