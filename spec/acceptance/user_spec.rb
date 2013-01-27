require 'spec_helper'
feature 'User' do
  given(:user) { create(:user) }
  given(:project) { create(:project) }

  scenario 'Visit a use page' do
    user.projects << project

    visit user_path(user)
    expect(page).to have_content(user.username)
    expect(page).to have_content(user.email)
    expect(page).to have_content(project.title)
  end
end
