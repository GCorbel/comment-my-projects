#encoding=utf-8
require 'spec_helper'

describe 'Notes', js: true do
  self.use_transactional_fixtures = false
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:category1) { create(:category, label: 'New Category') }
  let(:category2) { create(:category, label: 'New Category 2') }
  let(:category3) { create(:category, label: 'New Category 3') }

  describe 'Show' do
    it 'show notes on project path' do
      create(:category_project, project: project, category: category1)
      create(:category_project, project: project, category: category2)
      create(:category_project, project: project, category: category3)

      Note.create(project: project, category: category1, value: 1)
      Note.create(project: project, category: category1, value: 2)
      Note.create(project: project, category: category1, value: 4)
      Note.create(project: project, category: category2, value: 3)
      Note.create(project: project, category: category2, value: 1)
      visit project_path(project)
      within('#notes') do
        page.should have_content('New Category : (2.3/4 - 3 votes)')
        page.should have_content('New Category 2 : (2.0/4 - 2 votes)')
        page.should have_content('New Category 3 : Aucun vote')
      end
    end
  end

  describe 'Create' do
    it 'add a new note' do
      sign_in
      create(:category_project, project: project, category: category1)
      visit project_path(project)
      select('New Category', from: 'Categorie')
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
