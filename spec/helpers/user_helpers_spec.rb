require 'spec_helper'
describe UserHelper do
  let(:user) { create(:user) }
  let(:formatted_now) { DateTime.now.strftime('%d/%m/%Y %H:%M') }

  describe :date_for_user do
    it "give the date" do
      expect(helper.date_for_user(user)).to eq "<p>Membre since the : #{formatted_now}</p>"
    end
  end
end
