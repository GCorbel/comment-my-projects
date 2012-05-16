#encoding=utf-8
require 'spec_helper'

describe 'Comments' do
  let!(:project) { create(:project) }
  let(:user1) { create(:user) }
  let(:comment) do 
    create(:comment,
           message: 'My Message', 
           username: 'My name', 
           project: project)
  end

  describe 'Index' do
    it 'Show comments for the project' do
      comment
      visit project_path(project)
      page.should have_content('My Message')
      page.should have_content('My name')
    end
  end

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

  describe 'Delete' do
    context 'When the user signed in is the project owner' do
      it 'allow to delete comment' do
        sign_in user1
        comment.project.user = user1
        comment.project.save
        visit project_path(project)
        within("#comment_#{comment.id}") do
          click_link 'Supprimer'
        end
        page.should have_content('Votre commentaire a été supprimé')
      end
    end
  end
end
