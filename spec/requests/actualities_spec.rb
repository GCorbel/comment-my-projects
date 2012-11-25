#encoding=utf-8
require 'spec_helper'

describe 'Actualities' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:actuality) { create(:actuality, project: project) }

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
end
