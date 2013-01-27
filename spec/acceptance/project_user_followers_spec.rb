require 'spec_helper'

feature 'Follow', js: true do
  given(:user) { create(:user) }
  given(:owner) { create(:user) }
  given(:project) { create(:project, user: owner) }

  scenario 'Follow a project' do
    sign_in user
    visit project_path(project)
    click_link "Follow the project"
    expect(page).to have_content("Stop to follow the project")
  end

  scenario 'Stop to follow a project' do
    sign_in user
    project.add_follower(user)
    visit project_path(project)
    click_link "Stop to follow the project"
    expect(page).to have_content("Follow the project")
  end
end

