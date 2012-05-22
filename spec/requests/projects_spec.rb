#encoding=utf-8
require 'spec_helper'

describe 'Project' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }

  describe 'Search' do
    context 'When the is some results' do
      it 'show result' do
        create(:project, title: 'The first project')
        create(:project, title: 'The second project')
        create(:project, title: 'Another one')

        visit root_path
        within('#new_search') do
          fill_in('search_title', with: 'PrOject')
          click_button('submit')
        end
        page.should have_content('The first project')
        page.should have_content('The second project')
        page.should_not have_content('Another one')
      end
    end
  end

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

  describe 'Index' do
    context 'When there is a project' do
      it 'Show the list of projects' do
        project
        visit projects_path
        page.should have_content(project.title)
        page.should have_content(project.url)
      end
    end

    context 'Whene the is no project' do
      it 'Show a message' do
        visit projects_path
        page.should have_content('Désolé, aucun projet ne correspond à votre recherche. Veuillez recommencer.')
      end
    end
  end

  describe 'Show' do
    before(:each) do
    end

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
      sign_in project.user
      visit project_path(project)
      within('.form-actions') do
        click_link "Supprimer"
      end
      page.should have_content("Votre projet a été supprimé")
    end
  end
end
