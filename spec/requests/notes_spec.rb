#encoding=utf-8
require 'spec_helper'

describe 'Notes' do
  let(:project) { create(:project) }
  let(:category1) { create(:category, label: 'New Category') }
  let(:category2) { create(:category, label: 'New Category 2') }
  let(:category3) { create(:category, label: 'New Category 3') }

  describe 'Show' do
    it 'show notes on project path' do
      create(:category_project, project: project, category: category1)
      create(:category_project, project: project, category: category2)
      create(:category_project, project: project, category: category3)

      Note.create(project: project, category: category1, value: 7)
      Note.create(project: project, category: category1, value: 3)
      Note.create(project: project, category: category1, value: 8)
      Note.create(project: project, category: category2, value: 7)
      Note.create(project: project, category: category2, value: 4)
      visit project_path(project)
      within('#notes') do
        page.should have_content('New Category : 6.0/10')
        page.should have_content('New Category 2 : 5.5/10')
        page.should have_content('New Category 3 : -')
      end
    end
  end

  describe 'Create' do
    context 'with valid data' do
      it 'add a new note' do
        create(:category_project, project: project, category: category1)
        visit project_path(project)
        within('#new_note') do
          select('New Category', from: 'Categorie')
          select('10', form: 'Note')
          click_button 'Noter'
        end
        page.should have_content('La note a été ajoutée')
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        visit project_path(project)
        within('#new_note') do
          click_button "Noter"
          page.body.should have_content("champ obligatoire")
        end
      end
    end
  end
end
