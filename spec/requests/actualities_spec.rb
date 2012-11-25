#encoding=utf-8
require 'spec_helper'

describe 'Actualities' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:actuality) { create(:actuality, project: project) }

  describe 'Index' do
    it 'Show list of actualities' do
      sign_in project.user
      project.actualities << actuality
      visit project_path(project)
      page.should have_content(actuality.title)
    end
  end

  describe 'Show' do
    it "show an actuality" do
      visit project_actuality_path(project, actuality)

      page.should have_content(actuality.title)
      page.should have_content(actuality.body)
    end
  end

  describe 'Create' do
    it "add a new actuality" do
      sign_in user
      visit new_project_actuality_path(project)
      within('#new_actuality') do
        fill_in("Titre", with: "Mon Titre")
        fill_in('wmd-input', with: 'Mon Corps')
        click_button 'Créer'
      end
      page.should have_content("Votre actualité a été ajoutée")
    end
  end

  describe 'Update' do
    it "update an actuality" do
      sign_in user
      visit edit_project_actuality_path(project, actuality)
      within("#edit_actuality_#{actuality.id}") do
        fill_in("Titre", with: "Mon Titre")
        fill_in('wmd-input', with: 'Mon Corps')
        click_button 'Modifier'
      end
      page.should have_content("Votre actualité a été modifiée")
    end
  end

  describe 'Destroy' do
    it "destroy an actuality" do
      sign_in user
      visit project_actuality_path(project, actuality)
      within('.form-actions') do
        click_link "Supprimer"
      end
      page.should have_content("Votre projet a été supprimé")
    end
  end
end
