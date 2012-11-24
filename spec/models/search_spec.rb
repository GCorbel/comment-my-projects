require 'spec_helper'
describe Search do
  describe :project_text_search do
    let(:project1) { create(:project) }
    let(:project2) { create(:project) }
    let(:category) { create(:category) }
    let(:options) { {text: 'Simple', category: Search::PROJECT_ALL} }

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
      create(:category_project,
             project: project1,
             category: category,
             description: "A simple description")
      create(:category_project,
             project: project2,
             category: category,
             description: "A complexe description")
      search = Search.new(options)

      projects = search.project_text_search
      projects.map(&:category_description).should == ['A simple description']
    end

    it "give all the projects with a word in a comment" do
      create(:comment,
             project: project1,
             category: category,
             message: "A simple message")
      create(:comment,
             project: project2,
             category: category,
             message: "A complexe message")
      search = Search.new(options)

      projects = search.project_text_search
      projects.map(&:comment_message).should == ['A simple message']
    end

    it "give all the projects with a type" do
      type1 = create(:project_type, label: "Java")
      type2 = create(:project_type, label: "Ruby")
      create(:project, title: "Simple project 1", type: type1)
      create(:project, title: "Simple project 1", type: type2)
      search = Search.new(options.merge({project_type: type1}))

      projects = search.project_text_search
      projects.length.should == 1
    end

    it "give all the projects when the project type is blank" do
      create(:project, title: 'Simple Project 1')
      search = Search.new(options.merge({project_type: ""}))

      projects = search.project_text_search
      projects.should_not be_empty
    end

    context "when we search only in comments" do
      it "give all the projects with a word in a comment" do
        create(:comment,
               project: project1,
               category: category,
               message: "A simple message")
        create(:category_project,
               project: project2,
               category: category,
               description: "A simple description")
        search = Search.new({text: 'simple', category: Search::PROJECT_COMMENT})

        projects = search.project_text_search
        projects.length.should == 1
      end

      it "give all the projects with a word in a description" do
        create(:comment,
               project: project1,
               category: category,
               message: "A simple message")
        create(:category_project,
               project: project1,
               category: category,
               description: "A simple description")
        search = Search.new({text: 'simple', category: Search::PROJECT_DESCRIPTION})

        projects = search.project_text_search
        projects.length.should == 1
      end
    end

    context "when the project has many comments" do
      context "when we search a word in many comments" do
        it "give only one result" do
          project1 = create(:project, title: "A simple Project")
          create(:comment, project: project1, category: category, message: "A simple message")
          create(:comment, project: project1, category: category, message: "A simple text")
          search = Search.new(options)
          projects = search.project_text_search
          projects.length.should == 1
        end
      end
    end

    context "when the project has many categories" do
      context "when we search a word in many categories" do
        it "give only one result" do
          project1 = create(:project, title: "A simple Project")
      create(:category_project,
             project: project1,
             category: category,
             description: "A simple description")
      create(:category_project,
             project: project1,
             category: category,
             description: "A simple text")
          search = Search.new(options)
          projects = search.project_text_search
          projects.length.should == 1
        end
      end
    end
  end
end
