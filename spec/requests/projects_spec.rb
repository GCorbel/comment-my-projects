#encoding=utf-8
require 'spec_helper'

describe 'Project' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:tag) { create(:tag) }

  describe 'Create' do
    it 'add a new project' do
      sign_in
      visit new_project_path
      within('#new_project') do
        fill_in("Titre", with: "Mon Projet")
        fill_in("Url", with: "http://www.google.com")
        fill_in('wmd-input', with: 'My Project')
        fill_in('Tag list', with: 'Ruby, Rails')
        click_button "Créer"
      end
      page.should have_content("Votre projet a été ajouté")
    end
  end

  describe 'Index' do
    it 'Enable to search in descriptions' do
      description = 'This is a simple description\nwith two lines'
      project = create(:project, title: 'Title', description: description, tag_list: tag)

      visit projects_path
      fill_in('search_text', with: 'simple')
      select('Descriptions', from: 'search_category')
      fill_in('Tag list', with: tag.name)

      click_button('Go!')
      page.should have_content(description.split('\n').first)
    end
  end

  describe 'Show' do
    it 'Show informations about the project' do
      sign_in project.user
      visit project_path(project)
      page.should have_content(project.title)
      page.should have_content(project.description)
    end
  end

  describe 'Update' do
    it 'update the project' do
      sign_in user
      visit edit_project_path(project)
      fill_in("Titre", with: "Mon Projet")
      fill_in("Url", with: "http://www.google.com")
      fill_in('wmd-input', with: 'My Project')
      click_button "Modifier"
      page.should have_content("Votre projet a été modifié")
    end
  end

  describe 'Destroy' do
    it 'Destroy the project' do
      sign_in project.user
      visit project_path(project)
      within('.form-actions') do
        click_link "Supprimer"
      end
      page.should have_content("Votre projet a été supprimé")
    end
  end
end
