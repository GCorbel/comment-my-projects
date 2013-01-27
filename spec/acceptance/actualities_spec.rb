require 'spec_helper'

feature "Actualities" do
  given(:user) { create(:user) }
  given(:project) { create(:project, user: user) }
  given(:actuality) { create(:actuality, project: project) }

  scenario 'Show list of actualities' do
    sign_in project.user
    project.actualities << actuality
    visit project_path(project)
    expect(page).to have_content(actuality.title)
  end

  scenario "show an actuality" do
    visit project_actuality_path(project, actuality)

    expect(page).to have_content(actuality.title)
    expect(page).to have_content(actuality.body)
  end

  scenario "add a new actuality" do
    sign_in user
    visit new_project_actuality_path(project)
    within('#new_actuality') do
      fill_in("Title", with: "My Body")
      fill_in('wmd-input', with: 'My Body')
      click_button 'Create'
    end
    expect(page).to have_content("Your actuality has been added")
  end

  scenario "update an actuality" do
    sign_in user
    visit edit_project_actuality_path(project, actuality)
    within("#edit_actuality_#{actuality.id}") do
      fill_in("Title", with: "My Title")
      fill_in('wmd-input', with: 'My Body')
      click_button 'Update'
    end
    expect(page).to have_content("Your actuality has been updated")
  end

  scenario "destroy an actuality" do
    sign_in user
    visit project_actuality_path(project, actuality)
    within('.form-actions') do
      click_link "Delete"
    end
    expect(page).to have_content("Your actuality has been deleted")
  end
end
