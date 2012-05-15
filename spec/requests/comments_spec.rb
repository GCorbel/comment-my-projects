#encoding=utf-8
require 'spec_helper'

describe 'Comments' do
  let!(:project) { create(:project) }

  describe 'Create' do
    before(:each) { visit project_path(project) }

    it 'Enable to create a new comment' do
      within('#new_comment') do
        fill_in('Nom', with: 'My name')
        select('General', from: 'Categorie')
        fill_in('Message', with: 'My Message')
        click_button 'Envoyer'
      end

      page.should have_content('Votre commentaire a été ajouté')
    end

    context 'with invalid data' do
      it 'show errors' do
        within('#new_comment') do
          click_button "Envoyer"
          page.body.should have_content("champ obligatoire")
        end
      end
    end
  end
end
