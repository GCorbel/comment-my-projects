#encoding=utf-8
require 'spec_helper'

describe 'Comments' do
  let!(:project) { create(:project, user: user) }
  let(:user) { create(:user) }
  let(:comment) do
    create(:comment,
           message: 'My Message',
           username: 'My name',
           item: project)
  end

  before do
    SpamChecker.any_instance.stubs(:spam?).returns(false)
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
    context 'when not signed in', js: true do
      self.use_transactional_fixtures = false

      it 'Enable to create a new comment' do
        visit project_path(project)
        within('#new_comment') do
          fill_in('Nom', with: 'My name')
          fill_in('wmd-input', with: 'My Message')
          click_button 'Valider'
        end

        wait_for_ajax
        new_comment = Comment.last
        within("#comment_#{new_comment.id}") do
          page.should have_content('My Message')
        end
        visit project_path(project)
        within("#comment_#{new_comment.id}") do
          page.should have_content('My Message')
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
        wait_for_ajax
        fill_in('Nom', with: 'My name')
        fill_in("wmd-input#{comment.id}", with: 'My answer')
        click_button 'Valider'
        page.should_not have_content('Ajouter un commentaire')
        page.should have_content('My answer')
      end
      visit project_path(project)
      within("#comment_#{comment.id}") do
        page.should_not have_content('Ajouter un commentaire')
        page.should have_content('My Message')
      end
    end
  end

  describe 'Delete', js: true do
    self.use_transactional_fixtures = false

    before { sign_in user }

    context 'When the user signed in is the project owner' do
      it 'allow to delete comment' do
        comment.item.user = user
        comment.item.save
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
    visit project_path(project)
    page.should_not have_content(comment.message)
  end
end
