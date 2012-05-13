#encoding=utf-8
require 'spec_helper'

describe 'CategoryProjects' do
  let(:project) { create(:project) }

  before(:each) { sign_in }

  context 'Create' do
    before(:each) do
      create(:category, label: "New Category")
      visit new_project_category_projects_path(project)
    end

    context 'With valid data' do
      it 'Add a new category for a project' do
        select('New Category', from: 'Categorie')
        fill_in('Description', with: 'New description')
        click_button 'Valider'

        page.should have_content('La description a été ajoutée')
      end
    end

    context 'With invalid data' do
      it 'Show error' do
        click_button 'Valider'
        page.should have_content("champ obligatoire")
      end
    end
  end
end
