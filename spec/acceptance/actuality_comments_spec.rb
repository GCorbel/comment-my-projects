require 'spec_helper'

feature "Comments" do
  given(:project) { create(:project, user: user) }
  given!(:actuality) { create(:actuality, project: project) }
  given(:user) { create(:user) }
  given(:comment) do
    create(:comment,
           message: 'My Message',
           username: 'My name',
           item: actuality)
  end

  background do
    SpamChecker.any_instance.stubs(:spam?).returns(false)
  end

  scenario 'Show comments for the actuality' do
    comment
    visit project_actuality_path(project, actuality)
    expect(page).to have_content('My Message')
    expect(page).to have_content('My name')
  end

  scenario 'Enable to create a new comment', js: true do
    visit project_actuality_path(project, actuality)
    within('#new_comment') do
      fill_in('Username', with: 'My name')
      fill_in('wmd-input', with: 'My Message')
      click_button 'Submit'
    end
    comment_should_be_visible
  end

  scenario 'Enable to create a new comment is signed in', js: true do
    sign_in user
    visit project_actuality_path(project, actuality)
    within('#new_comment') do
      fill_in('wmd-input', with: 'My Message')
      click_button 'Submit'
    end
    comment_should_be_visible
  end

  def comment_should_be_visible
    wait_until { Comment.count == 1 }

    new_comment = Comment.last
    within("#comment_#{new_comment.id}") do
      expect(page).to have_content('My Message')
    end
    visit project_actuality_path(project, actuality)
    within("#comment_#{new_comment.id}") do
      expect(page).to have_content('My Message')
    end
  end

  scenario 'Create a response for a comment', js: true do
    comment
    visit project_actuality_path(project, actuality)
    within("#comment_#{comment.id}") do
      click_link 'Answer'
      fill_in('Username', with: 'My name')
      fill_in("wmd-input#{comment.id}", with: 'My answer')
      click_button 'Submit'
      expect(page).to_not have_content('Add a comment')
      expect(page).to have_content('My answer')
    end
    visit project_actuality_path(project, actuality)
    within("#comment_#{comment.id}") do
      expect(page).to_not have_content('Add a comment')
      expect(page).to have_content('My answer')
    end
  end

  scenario 'Destroy a comment when the user is the actuality owner', js: true do
    sign_in user
    project = comment.item.project
    project.user = user
    project.save
    delete_comment
  end

  scenario 'Destroy a comment when the user is the comment owner', js: true do
    sign_in user
    comment.user = user
    comment.save
    delete_comment
  end

  def delete_comment
    visit project_actuality_path(project, actuality)
    within("#comment_#{comment.id}") do
      click_link 'Delete'
    end
    expect(page).to_not have_content(comment.message)
    visit project_actuality_path(project, actuality)
    expect(page).to_not have_content(comment.message)
  end
end
