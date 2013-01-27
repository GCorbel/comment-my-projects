require 'spec_helper'

feature 'Mesage' do
  scenario "Send a new message" do
    Page.create!(title: 'home', home: true)
    visit new_message_path
    fill_in 'Username', with: 'username'
    fill_in 'Email', with: 'user@host.com'
    fill_in 'Message', with: 'message'
    click_button 'Send'
    expect(page).to have_content('Your message has been sended')
  end
end
