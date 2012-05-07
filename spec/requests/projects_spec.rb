#encoding=utf-8
require 'spec_helper'

describe 'Project' do
  describe 'Create' do
    context 'with valid data' do
      it 'add a new project' do
        sign_in

        visit new_project_path
        fill_in("Titre", with: "Mon Projet")
        fill_in("Url", with: "http://www.google.com")
        click_button "Créer"

        page.should have_content("Votre projet a été ajouté")
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        sign_in

        visit new_project_path
        click_button "Créer"

        page.body.should have_content("champ obligatoire")
      end
    end
  end

  describe 'Index' do
    it 'Show the list of projects' do
      project = create(:project)
      visit projects_path
      page.should have_content(project.title)
      page.should have_content(project.url)
    end
  end

  describe 'Show' do
    it 'Show informations about the project' do
      project = create(:project)
      visit project_path(project)
      page.should have_content(project.title)
      page.should have_content(project.url)
    end
  end

  describe 'Update' do
    let(:project) { create(:project) }

    it 'update the project' do
      sign_in

      visit edit_project_path(project)
      fill_in("Titre", with: "Mon Projet")
      fill_in("Url", with: "http://www.google.com")
      click_button "Modifier"

      page.should have_content("Votre projet a été modifié")
    end
  end
end
