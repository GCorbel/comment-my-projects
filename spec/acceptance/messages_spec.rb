#encoding=utf-8
require 'spec_helper'

feature 'Mesage' do
  scenario "Send a new message" do
    Page.create!(title: 'home', home: true)
    visit new_message_path
    fill_in 'Nom', with: 'username'
    fill_in 'Email', with: 'user@host.com'
    fill_in 'Message', with: 'message'
    click_button 'Envoyer'
    page.should have_content('Votre message a été envoyé')
  end
end
