#encoding=utf-8
require 'spec_helper'

describe 'Notes', js: true do
  self.use_transactional_fixtures = false
  let(:project) { create(:project) }
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
    context 'with valid data' do
      it 'add a new note' do
        create(:category_project, project: project, category: category1)
        visit project_path(project)
        select('New Category', from: 'Categorie')
        find('.star').click
        page.should have_content('La note a été ajoutée')
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        visit project_path(project)
        within('#new_note') do
          find('.star').click
          page.body.should have_content("champ obligatoire")
        end
      end
    end
  end
end
