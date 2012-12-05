require 'spec_helper'
describe Search do
  describe :project_text_search do
    let(:project1) { create(:project) }
    let(:project2) { create(:project) }
    let(:tag1) { create(:tag) }
    let(:tag2) { create(:tag) }
    let(:options) { {text: 'Simple', category: Search::PROJECT_DESCRIPTION} }

    it "order by update time" do
      create(:project, id: 1, title: 'Project 1', updated_at: 10.minutes.ago)
      create(:project, id: 2, title: 'Project 2', updated_at: 5.minutes.ago)

      search = Search.new({})

      projects = search.project_text_search
      projects.map(&:title).should == ['Project 2', 'Project 1']
    end

    it "give the project's title and the project's id" do
      create(:project, id: 1, title: 'Project 1')
      create(:project, id: 2, title: 'Project 2')

      search = Search.new({})

      projects = search.project_text_search
      projects.map(&:title).should == ['Project 2', 'Project 1']
      projects.map(&:id).should == [2, 1]
    end

    it "give all the projects with a word in the title" do
      create(:project, title: 'Simple Project 1')
      create(:project, title: 'Complexe Project 2')
      search = Search.new(options)

      projects = search.project_text_search
      projects.map(&:title).should == ['Simple Project 1']
    end

    it "give all the projects with a word in a description" do
      create(:project, description: 'A simple description')
      create(:project, description: 'A complexe description')
      search = Search.new(options)

      projects = search.project_text_search
      projects.map(&:description).should == ['A simple description']
    end

    it "give all the projects with a word in a comment" do
      create(:comment, item: project1, message: "A simple message")
      create(:comment, item: project2, message: "A complexe message")
      search = Search.new({text: 'Simple', category: Search::PROJECT_COMMENT})

      projects = search.project_text_search
      projects.map(&:comment_message).should == ['A simple message']
    end

    it "give all the project with a tag in the tag list" do
      project1 = create(:project, title: 'Simple Title')
      project2 = create(:project, title: 'Complex Title')

      project1.tag_list = tag1
      project2.tag_list = tag2

      project1.save
      project2.save

      search = Search.new({text: '', tag_list: tag1.to_s})

      projects = search.project_text_search
      projects.map(&:title).should == [project1.title]
    end

    context "when we search only in comments" do
      it "give all the projects with a word in a comment" do
        create(:comment, item: project1, message: "A simple message")
        project1.update_attributes(description: 'A simple description')
        search = Search.new({text: 'simple', category: Search::PROJECT_COMMENT})

        projects = search.project_text_search
        projects.length.should == 1
      end

      it "give all the projects with a word in a description" do
        create(:comment, item: project1, message: "A simple message")
        project1.update_attributes(description: 'A simple description')
        search = Search.new({text: 'simple', category: Search::PROJECT_DESCRIPTION})

        projects = search.project_text_search
        projects.length.should == 1
      end
    end

    context "when the project has many comments" do
      context "when we search a word in many comments" do
        it "give only one result" do
          project1 = create(:project, title: "A simple Project")
          create(:comment, item: project1, message: "A simple message")
          create(:comment, item: project1, message: "A simple text")
          search = Search.new(options)
          projects = search.project_text_search
          projects.length.should == 1
        end
      end
    end
  end
end
