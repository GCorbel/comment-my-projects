require 'spec_helper'

describe ApplicationHelper do
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
end
