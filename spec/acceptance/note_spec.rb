#encoding=utf-8
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

  scenario 'Add a new note' do
    project.tag_list = tag1.name
    project.save
    project.reload

    sign_in
    visit project_path(project)
    select('New tag', from: 'Tag')
    first('.star').click
    expect(page).to have_content('Votre note a été ajouté')
  end

  scenario 'Visit the projet when the user is the project owner' do
    sign_in project.user
    visit project_path(project)
    expect(page).to have_content("Vous ne pouvez pas voter pour votre projet")
  end

  scenario 'Visit the project when the user is not signed in' do
    visit project_path(project)
    expect(page).to have_content("Vous devez être connecté pour ajouter une note")
  end
end
