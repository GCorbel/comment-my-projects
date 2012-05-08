#encoding=utf-8
require 'spec_helper'

describe 'Project' do
  let(:project) { create(:project) }

  describe 'Create' do
    before(:each) do
      sign_in
      visit new_project_path
    end

    context 'with valid data' do
      it 'add a new project' do
        fill_in("Titre", with: "Mon Projet")
        fill_in("Url", with: "http://www.google.com")
        click_button "Créer"
        page.should have_content("Votre projet a été ajouté")
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        click_button "Créer"
        page.should have_content("champ obligatoire")
      end
    end
  end

  describe 'Index' do
    it 'Show the list of projects' do
      project
      visit projects_path
      page.should have_content(project.title)
      page.should have_content(project.url)
    end
  end

  describe 'Show' do
    it 'Show informations about the project' do
      visit project_path(project)
      page.should have_content(project.title)
      page.should have_content(project.url)
    end
  end

  describe 'Update' do
    before(:each) do
      sign_in
      visit edit_project_path(project)
    end

    context "with valid data" do
      it 'update the project' do
        fill_in("Titre", with: "Mon Projet")
        fill_in("Url", with: "http://www.google.com")
        click_button "Modifier"
        page.should have_content("Votre projet a été modifié")
      end
    end

    context "with invalid data" do
      it "show errors" do
        fill_in("Titre", with: "")
        fill_in("Url", with: "")
        click_button "Modifier"
        page.should have_content("champ obligatoire")
      end
    end
  end

  describe 'Destroy' do
    it 'Destroy the project' do
      sign_in
      visit project_path(project)
      click_link "Supprimer"
      page.should have_content("Votre projet a été supprimé")
    end
  end
end
