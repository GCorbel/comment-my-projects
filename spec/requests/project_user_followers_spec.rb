#encoding=utf-8
require 'spec_helper'

describe 'Follow', js: true do
  self.use_transactional_fixtures = false

  let(:user) { create(:user) }
  let(:project) { create(:project) }

  describe 'Create' do
    it 'add the user to the followers' do
      sign_in user
      visit project_path(project)
      click_link "Suivre le projet"
      wait_until { page.evaluate_script("jQuery.active") == 0 }
      page.should have_content("Arréter de suivre le projet")
    end

    it 'remove the user from the followers' do
      sign_in user
      project.add_follower(user)
      visit project_path(project)
      click_link "Arréter de suivre le projet"
      wait_until { page.evaluate_script("jQuery.active") == 0 }
      page.should have_content("Suivre le projet")
    end
  end
end
