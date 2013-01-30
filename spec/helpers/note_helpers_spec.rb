describe NoteHelper do
  let(:project) { create(:project) }
  let(:tag) { create(:tag) }
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:user3) { create(:user) }
  let(:note1) { create(:note, tag: tag, value: 3, user: user1) }
  let(:note2) { create(:note, tag: tag, value: 4, user: user2) }
  let(:note3) { create(:note, tag: tag, value: 3, user: user3) }

  describe :note_for do
    context 'when there is a vote' do
      it 'show notes with stars' do
        project.notes << note1
        project.notes << note2
        project.notes << note3
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

  describe :star_for do
    context 'when there is a vote' do
      it 'show notes with stars' do
        project.notes << note1
        project.notes << note2
        project.notes << note3
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
