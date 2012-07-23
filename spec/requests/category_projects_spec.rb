#encoding=utf-8
require 'spec_helper'

describe 'CategoryProjects' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:category) { create(:category, label: "New Category") }
  let(:category_project) do
    CategoryProject.create(project_id: project.id, 
                           category_id: category.id, 
                           description: "test")
  end

  before(:each) { sign_in user }

  context 'Create' do
    it 'Add a new category for a project' do
      category
      visit new_project_category_project_path(project)
      fill_form
      page.should have_content('Votre description a été ajouté')
    end
  end

  context 'Update' do
    it 'Update the category for the project' do
      category
      visit edit_project_category_project_path(project, category_project)
      fill_form
      page.should have_content('Votre description a été modifié')
    end
  end

  describe 'Destroy' do
    it 'Destroy the project' do
      sign_in project.user
      create(:category_project, project: project)
      visit project_path(project)
      within('.tab-content') do
        click_link "Supprimer"
      end
      page.should have_content("Votre description a été supprimé")
    end
  end

  def fill_form
    select('New Category', from: 'Categorie')
    fill_in('wmd-input', with: 'New description')
    click_button 'Valider'
  end
end
