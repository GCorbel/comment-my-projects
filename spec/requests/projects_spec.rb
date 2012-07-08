#encoding=utf-8
require 'spec_helper'

describe 'Project' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }

  describe 'Create' do
    before(:each) do
      sign_in
      visit new_project_path
    end

    context 'with valid data' do
      it 'add a new project' do
        within('#new_project') do
          fill_in("Titre", with: "Mon Projet")
          fill_in("Url", with: "http://www.google.com")
          click_button "Créer"
        end
        page.should have_content("Votre projet a été ajouté")
      end
    end

    context 'with invalid data' do
      it 'show errors' do
        click_button "Créer"
        page.body.should have_content("champ obligatoire")
      end
    end
  end

  describe 'Index', js: true do
    self.use_transactional_fixtures = false

    context 'When there is a project', js: true do
      it 'Show the list of projects' do
        project
        visit projects_path
        page.should have_content(project.title)
        page.should have_content(project.url)
      end
    end

    it 'Enable to search project' do
      create(:project, title: 'The First Project')
      create(:project, title: 'The Second Project')
      visit projects_path
      fill_in('Rechercher', with: 'First')
      wait_for_ajax
      page.should have_content('The First Project')
      page.should_not have_content('The Second Project')
    end

    it 'Enable pagination' do
      11.times do
        create(:project)
      end
      visit projects_path
      page.should have_content("Affichage de l'élement 1 à 10 sur 11 éléments")
      select('50', from: 'Afficher')
      wait_for_ajax
      page.should have_content("Affichage de l'élement 1 à 11 sur 11 éléments")
    end
  end

  describe 'Show' do
    context 'when there is only one description' do
      it 'don\'t show the link to remove the description' do
        sign_in project.user
        visit project_path(project)
        within('.tab-content') do
          page.should_not have_css('a', text: 'Supprimer')
        end
      end
    end

    context 'when there is two description' do
      it 'show a link to remove the description' do
        sign_in project.user
        create(:category_project, project: project)
        visit project_path(project)
        within('.tab-content') do
          page.should have_css('a', text: 'Supprimer')
        end
      end
    end

    it 'Show informations about the project' do
      sign_in project.user
      visit project_path(project)
      page.should have_content("#{project.title} : #{project.url}")
    end
  end

  describe 'Update' do
    before(:each) do
      sign_in user
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
      sign_in project.user
      visit project_path(project)
      within('.form-actions') do
        click_link "Supprimer"
      end
      page.should have_content("Votre projet a été supprimé")
    end
  end
end
