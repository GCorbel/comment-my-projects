#encoding=utf-8
require 'spec_helper'

describe ApplicationHelper do
  let(:user) { build_stubbed(:user) }
  let(:avatar_id) { Digest::MD5::hexdigest(user.email).downcase }
  let(:default_url) { "http://test.host:80/assets/guest.png"}

  describe :alert_box do
    context "when there is a message" do
      subject { helper.alert_box("info", "message") }

      it "create a valid message" do
        should eq %Q{<div class=\"alert alert-info\"><button class=\"close\" data-dismiss=\"alert\">x</button><div>message</div></div>}
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
        expect(helper.browser_title("title")).to eq "title - Social Reviewing"
      end
    end

    context "when there is no title" do
      it "show the site name" do
        expect(helper.browser_title).to eq "Social Reviewing"
      end
    end
  end

  describe :page_description do
    it "set a new description" do
      helper.expects(:content_for).with(:description, "My Description")
      helper.page_description("My Description")
    end
  end

  describe :browser_description do
    context "when there is a description" do
      it "show the description" do
        expect(helper.browser_description("description")).to eq "description"
      end
    end

    context "where there is no description" do
      it "show a standard description" do
        expect(helper.browser_description).to eq "This site is a discussion plateforme for open-source proects where you can to submit your project and comment one those already subscribed"
      end
    end
  end

  describe :markdown do
    it "convert a markdown to html" do
      expect(helper.markdown("**test**")).to eq "<p><strong>test</strong></p>\n"
    end
  end

  describe :avatar_url do
    before { Rails.env.stubs(:test?).returns(false) }
    after { Rails.env.stubs(:test?).returns(true) }

    it "give a path to the avatar" do
      expect(helper.avatar_url(user)).to eq "http://gravatar.com/avatar/#{avatar_id}.png?s=100&d=#{CGI.escape(default_url)}"
      Rails.env.stubs(:test?).returns(true)
    end

    context "when a size is specified" do
      it "give a path to the avatar with a size" do
        expect(helper.avatar_url(user, 50)).to eq "http://gravatar.com/avatar/#{avatar_id}.png?s=50&d=#{CGI.escape(default_url)}"
      end
    end

    context "the user is nil" do
      it "give a path to the avatar with a size" do
        expect(helper.avatar_url(nil)).to eq "http://test.host:80/assets/guest.png"
      end
    end
  end

  describe :excerpt_for do
    let(:description) { "This is\n a description\n with four\n lines" }
    let(:message) { "This is\n a message\n with four\n lines" }
    let(:project) { build(:project) }

    context "when the text is in the description for the project" do
      it "return the line before and after" do
        project.stubs(:description).returns(description)
        project.stubs(:comment_message).returns(nil)
        expect(helper.excerpt_for(project, "description")).to eq "This is\n a <strong class=\"highlight\">description</strong>\n with four..."
      end
    end

    context "when the text is in the comment for the project" do
      it "return the line before and after" do
        project.stubs(:description).returns(nil)
        project.stubs(:comment_message).returns(message)
        expect(helper.excerpt_for(project, "message")).to eq "This is\n a <strong class=\"highlight\">message</strong>\n with four..."
      end
    end

    context "when is no comment and no description" do
      it "return the first lines of the project's description" do
        project.stubs(:description).returns(description)
        project.stubs(:comment_message).returns(nil)
        expect(helper.excerpt_for(project, "something")).to eq "This is\n a description..."
      end
    end

    it "hillight the result" do
      project.stubs(:description).returns(description)
      project.stubs(:comment_message).returns(nil)
      expect(helper.excerpt_for(project, "description")).to eq "This is\n a <strong class=\"highlight\">description</strong>\n with four..."
    end
  end

  describe :image_for do
    it "give the gravatar for the user" do
      expect(helper.image_for(user)).to eq '<img alt="Guest" class="avatar" src="http://test.host:80/assets/guest.png" />'
    end
  end

  describe :link_to_locales do
    after do
      I18n.locale = I18n.default_locale
    end

    context "when the locale is english" do
      it "give a link to root with the french locale" do
        I18n.locale = :en
        expect(link_to_locales).to eq "<a href=\"/?locale=fr\"><i class='icon-flag'></i> Version Française</a>"
      end
    end

    context "when the locale is french" do
      it "give a link to root with the english locale" do
        I18n.locale = :fr
        expect(link_to_locales).to eq "<a href=\"/?locale=en\"><i class='icon-flag'></i> English Version</a>"
      end
    end
  end
end
