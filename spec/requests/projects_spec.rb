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
  end
end
