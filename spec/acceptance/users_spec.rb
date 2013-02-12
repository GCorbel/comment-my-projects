require 'spec_helper'

feature "Users" do

  given(:user) { create(:user) }

  scenario "Destroy a user", js: true do
    create(:page, home: true)
    sign_in user
    visit root_path
    click_link "User"
    click_link "Delete"
    expect(page).to have_content("Bye! Your account was successfully cancelled. We hope to see you again soon.")
  end
end
