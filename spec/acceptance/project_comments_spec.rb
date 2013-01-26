#encoding=utf-8
require 'spec_helper'

feature "Projects" do
  given!(:project) { create(:project, user: user) }
  given(:user) { create(:user) }
  given(:comment) do
    create(:comment,
           message: 'My Message',
           username: 'My name',
           item: project)
  end

  background do
    SpamChecker.any_instance.stubs(:spam?).returns(false)
  end

  scenario 'Show comments for the project' do
    comment
    visit project_path(project)
    expect(page).to have_content('My Message')
    expect(page).to have_content('My name')
  end

  scenario 'Enable to create a new comment', js: true do
    visit project_path(project)
    within('#new_comment') do
      fill_in('Nom', with: 'My name')
      fill_in('wmd-input', with: 'My Message')
      click_button 'Valider'
    end
    comment_should_be_visible
  end

  scenario 'Enable to create a new comment is signed in', js: true do
    sign_in user
    visit project_path(project)
    within('#new_comment') do
      fill_in('wmd-input', with: 'My Message')
      click_button 'Valider'
    end
    comment_should_be_visible
  end

  def comment_should_be_visible
    wait_until { Comment.count == 1 }

    new_comment = Comment.last
    within("#comment_#{new_comment.id}") do
      expect(page).to have_content('My Message')
    end
    visit project_path(project)
    within("#comment_#{new_comment.id}") do
      expect(page).to have_content('My Message')
    end
  end

  scenario 'Create a response for a comment', js: true do
    comment
    visit project_path(project)
    within("#comment_#{comment.id}") do
      click_link 'Répondre'
      fill_in('Nom', with: 'My name')
      fill_in("wmd-input#{comment.id}", with: 'My answer')
      click_button 'Valider'
      expect(page).to_not have_content('Ajouter un commentaire')
      expect(page).to have_content('My answer')
    end
    visit project_path(project)
    within("#comment_#{comment.id}") do
      expect(page).to_not have_content('Ajouter un commentaire')
      expect(page).to have_content('My Message')
    end
  end

  scenario 'Destroy a comment when the user is the project owner', js: true do
      sign_in user
      comment.item.user = user
      comment.item.save
      delete_comment
  end

  scenario 'Destroy a comment when the user is the comment owner', js: true do
      sign_in user
      comment.user = user
      comment.save
      delete_comment
  end

  def delete_comment
    visit project_path(project)
    within("#comment_#{comment.id}") do
      click_link 'Supprimer'
    end
    expect(page).to_not have_content(comment.message)
    visit project_path(project)
    expect(page).to_not have_content(comment.message)
  end
end
