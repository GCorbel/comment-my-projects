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


  before(:each) { sign_in }

  context 'Create' do
    before(:each) do
      category
      visit new_project_category_project_path(project)
    end

    context 'With valid data' do
      it 'Add a new category for a project' do
        fill_form
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

  context 'Update' do
    before(:each) do
      category
      visit edit_project_category_project_path(project, category_project)
    end

    context 'With valid data' do
      it 'Update the category for the project' do
        fill_form
        page.should have_content('La description a été modifiée')
      end
    end

    context 'With invalid data' do
      it 'Show error' do
        fill_in('Description', with: '')
        click_button 'Valider'
        page.should have_content("champ obligatoire")
      end
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
      page.should have_content("La description a été supprimée")
    end
  end

  def fill_form
    select('New Category', from: 'Categorie')
    fill_in('Description', with: 'New description')
    click_button 'Valider'
  end
end
