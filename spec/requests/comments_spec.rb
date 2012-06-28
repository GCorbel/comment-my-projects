#encoding=utf-8
require 'spec_helper'

describe 'Comments' do
  let!(:project) { create(:project, user: user) }
  let(:user) { create(:user) }
  let(:category) { create(:category) }
  let(:comment) do 
    create(:comment,
           message: 'My Message', 
           username: 'My name', 
           project: project,
           category: category)
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
    context 'when not signed in' do
      before(:each) { visit project_path(project) }

      context 'with valid data', js: true do
        self.use_transactional_fixtures = false

        it 'Enable to create a new comment' do
          within('#new_comment') do
            fill_in('Nom', with: 'My name')
            select('General', from: 'Categorie')
            fill_in('wmd-input', with: 'My Message')
            click_button 'Envoyer'
          end

          wait_until { Comment.count == 1 }
          new_comment = Comment.last
          within("#comment_#{new_comment.id}") do
            page.should have_content('My Message')
          end
        end
      end

      context 'with invalid data' do
        it 'show errors' do
          within('#new_comment') do
            click_button "Envoyer"
          end
          page.body.should have_content("champ obligatoire")
        end
      end
    end

    context 'when the user is signed in' do
      it 'don''t show the username field' do
        sign_in
        visit project_path(project)
        page.should_not have_css('input#comment_username')
      end
    end
  end

  describe 'Create a response', js: true do
    self.use_transactional_fixtures = false

    it 'create a response for a comment' do
      comment
      visit project_path(project)
      within("#comment_#{comment.id}") do
        click_link 'Répondre'
        fill_in('Nom', with: 'My name')
        fill_in('wmd-input', with: 'My answer')
        click_button 'Envoyer'
        page.should_not have_content('Ajouter un commentaire')
        page.should have_content('My answer')
      end
    end
  end

  describe 'Delete', js: true do
    self.use_transactional_fixtures = false

    before(:each) { sign_in user }

    context 'When the user signed in is the project owner' do
      it 'allow to delete comment' do
        comment.project.user = user
        comment.project.save
        delete_comment
      end
    end

    context 'When the user signed in is the comment owner' do
      it 'allow to delete the comment' do
        comment.user = user
        comment.save
        delete_comment
      end
    end
  end

  def delete_comment
    visit project_path(project)
    within("#comment_#{comment.id}") do
      click_link 'Supprimer'
    end
    page.should_not have_content(comment.message)
  end
end
