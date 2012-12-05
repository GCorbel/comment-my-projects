#encoding=utf-8
require 'spec_helper'

describe 'Notes', js: true do
  self.use_transactional_fixtures = false
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:tag1) { create(:tag, name: 'New tag') }
  let(:tag2) { create(:tag, name: 'New tag 2') }
  let(:tag3) { create(:tag, name: 'New tag 3') }

  describe 'Show' do
    it 'show notes on project path' do
      project.tag_list = [tag1, tag2, tag3].join(",")
      project.save
      project.reload

      Note.create(project: project, tag: nil, value: 1)
      Note.create(project: project, tag: tag1, value: 1)
      Note.create(project: project, tag: tag1, value: 2)
      Note.create(project: project, tag: tag1, value: 4)
      Note.create(project: project, tag: tag2, value: 3)
      Note.create(project: project, tag: tag2, value: 1)
      visit project_path(project)
      within('#notes') do
        page.should have_content('General : (1.0/4 - 1 vote)')
        page.should have_content('New tag : (2.3/4 - 3 votes)')
        page.should have_content('New tag 2 : (2.0/4 - 2 votes)')
        page.should have_content('New tag 3 : Aucun vote')
      end
    end
  end

  describe 'Create' do
    it 'add a new note' do
      pending
      sign_in
      create(:tag_project, project: project, tag: tag1)
      visit project_path(project)
      select('New tag', from: 'Categorie')
      find('.star').click
      page.should have_content('Votre note a été ajouté')
    end

    context 'when the user logged is the project owner' do
      it 'show a message' do
        sign_in project.user
        visit project_path(project)
        page.should have_content("Vous ne pouvez pas voter pour votre projet")
      end
    end

    context 'when the user is not signed in' do
      it 'show a message' do
        visit project_path(project)
        page.should
          have_content("Vous devez être connecté pour ajouter une note")
      end
    end
  end
end
