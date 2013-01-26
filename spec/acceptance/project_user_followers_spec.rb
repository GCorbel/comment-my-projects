#encoding=utf-8
require 'spec_helper'

feature 'Follow', js: true do
  given(:user) { create(:user) }
  given(:project) { create(:project) }

  scenario 'Follow a project' do
    sign_in user
    visit project_path(project)
    click_link "Suivre le projet"
    page.should have_content("Arréter de suivre le projet")
  end

  scenario 'Stop to follow a project' do
    sign_in user
    project.add_follower(user)
    visit project_path(project)
    click_link "Arréter de suivre le projet"
    page.should have_content("Suivre le projet")
  end
end

