require 'spec_helper'

describe ApplicationHelper do
  let(:user) { build_stubbed(:user) }
  let(:avatar_id) { Digest::MD5::hexdigest(user.email).downcase } 
  let(:default_url) { "http://test.host:80/assets/guest.png"}

  describe :alert_box do
    context "when there is a message" do
      subject { helper.alert_box("info", "message") }

      it "create a valid message" do
        should == %Q{<div class=\"alert alert-info\"><button class=\"close\" data-dismiss=\"alert\">x</button><div>message</div></div>}
      end
    end

    context "when there is any message" do
      subject { helper.alert_box("info", nil) }

      it { should be_nil }
    end
  end

  describe :page_title do
    it "set a new title" do
      helper.expects(:content_for).with(:title, "My Title")
      helper.page_title("My Title")
    end
  end

  describe :browser_title do
    context "when there is a title" do
      it "show the title" do
        helper.browser_title("title").should == 
          "title - Comment My Projects"
      end
    end

    context "when there is no title" do
      it "show the site name" do
        helper.browser_title().should == "Comment My Projects"
      end
    end
  end
  
  describe :markdown do
    it "convert a markdown to html" do
      helper.markdown("**test**").should ==
        "<p><strong>test</strong></p>\n"
    end
  end

  describe :avatar_url do
    it "give a path to the avatar" do
      helper.avatar_url(user).should ==
        "http://gravatar.com/avatar/#{avatar_id}.png" \
        "?s=100&d=#{CGI.escape(default_url)}"
    end

    context "when a size is specified" do
      it "give a path to the avatar with a size" do
        helper.avatar_url(user, 50).should ==
          "http://gravatar.com/avatar/#{avatar_id}.png" \
          "?s=50&d=#{CGI.escape(default_url)}"
      end
    end

    context "the user is nil" do
      it "give a path to the avatar with a size" do
        helper.avatar_url(nil).should ==
          "/assets/guest.png"
      end
    end
  end
end
