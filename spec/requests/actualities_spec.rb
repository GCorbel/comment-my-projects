#encoding=utf-8
require 'spec_helper'

describe 'Actualities' do
  let(:user) { create(:user) }
  let(:project) { create(:project, user: user) }

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
end
