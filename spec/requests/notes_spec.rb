#encoding=utf-8
require 'spec_helper'

describe 'Notes' do
  let(:project) { create(:project) }

  describe 'Create' do
    before(:each) do
      create(:category, label: 'New Category')
      visit project_path(project)
    end

    context 'with valid data' do
      it 'add a new note' do
        select('New Category', from: 'Category')
        select('10', form: 'Note')
        click_button 'Noter'
        page.should have_content('La note a été ajoutée')
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        within('#new_note') do
          click_button "Noter"
          page.body.should have_content("champ obligatoire")
        end
      end
    end
  end
end
