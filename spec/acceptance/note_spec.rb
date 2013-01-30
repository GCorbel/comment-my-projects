require 'spec_helper'

feature 'Notes', js: true do
  given(:user) { create(:user) }
  given(:project) { create(:project, user: user) }
  given(:tag1) { create(:tag, name: 'New tag') }
  given(:tag2) { create(:tag, name: 'New tag 2') }
  given(:tag3) { create(:tag, name: 'New tag 3') }

  scenario 'Show notes on project path' do
    project.tag_list = [tag1, tag2, tag3].join(",")
    project.save
    project.reload

    Note.create(project: project, tag: nil, value: 1)
    Note.create(project: project, tag: tag1, value: 1)
    Note.create(project: project, tag: tag1, value: 2)
    Note.create(project: project, tag: tag1, value: 4)
    Note.create(project: project, tag: tag2, value: 3)
    Note.create(project: project, tag: tag2, value: 1)
    visit project_path(project)
    within('#notes') do
      expect(page).to have_content('General : (1.0/4 - 1 vote)')
      expect(page).to have_content('New tag : (2.3/4 - 3 votes)')
      expect(page).to have_content('New tag 2 : (2.0/4 - 2 votes)')
      expect(page).to have_content('New tag 3 : Aucun vote')
    end
  end

  scenario 'Add a new note', js: true do
    project.tag_list = tag1.name
    project.save
    project.reload

    sign_in
    visit project_path(project)
    within('#new_tag_') do
      first('.star').click
      expect(page).to have_content('Your rate has been added')
    end
    within('#tag_') do
      expect(page).to have_content('General : (4.0/4 - 1 vote)')
    end

    within("#new_tag_#{tag1.id}") do
      first('.star').click
      expect(page).to have_content('Your rate has been added')
    end
    within("#tag_#{tag1.id}") do
      expect(page).to have_content('New tag : (4.0/4 - 1 vote)')
    end
  end

  scenario 'Visit the projet when the user is the project owner' do
    sign_in project.user
    visit project_path(project)
    expect(page).to have_content("You can not rate for your project")
  end

  scenario 'Visit the project when the user is not signed in' do
    visit project_path(project)
    expect(page).to have_content("You must be logged to add a rate")
  end
end
