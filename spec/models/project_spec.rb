require 'spec_helper'

describe Project do
  let(:project) { create(:project, title: "Title",
                         url: "http://www.test.com",
                         user: user) }
  let(:project_type1) { create(:project_type) }
  let(:project_type2) { create(:project_type) }
  let(:user) { create(:user) }
  let(:category) { create(:category) }
  let(:comment) { create(:comment,
                         project: project,
                         category: category) }
  let(:project_type) { ProjectType.find_by_label('Ruby') }

  it { should have_many(:categories).through(:category_projects) }
  it { should have_many(:category_projects) }
  it { should have_many(:comments) }
  it { should have_many(:notes) }
  it { should have_many(:followers).through(:project_user_followers) }
  it { should have_many(:project_user_followers) }
  it { should have_many(:actualities) }
  it { should belong_to(:type).class_name('ProjectType') }
  it { should belong_to(:user) }

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }
  it { should validate_presence_of :type }

  it { should validate_format_of(:url).with('http://www.google.com') }
  it { should validate_format_of(:url).not_with('test') }

  it "have a category on creation" do
    project.categories.first.label.should == "General"
    project.category_projects.first.description.should ==
      "Title : [#{project.url}](#{project.url})"
  end

  describe :search do
    let!(:project1) { create(:project,
                             title: 'My First Project',
                             type: project_type1) }
    let!(:project2) { create(:project,
                             title: 'My Second Project',
                             type: project_type2) }

    context 'when there is a research' do
      it 'give all the projects with a word with title' do
        Project.search('first').should == [project1]
      end

      it 'give all the project with a type' do
        Project.search('', project_type2).should == [project2]
      end
    end

    context 'when there is no search' do
      it 'give all the project' do
        Project.search.should == [project1, project2]
      end
    end
  end

  describe :to_s do
    subject { project.to_s}

    it { should == project.title }
  end

  describe :to_param do
    subject { project.to_param }

    it { should == "#{project.id}-#{project.title.parameterize}" }
  end

  describe :note_for do
    it 'give notes for the project' do
      CategoryProject.create(project: project,
                             category: category,
                             description: 'test')
      Note.create(project: project, category: category, value: 8)
      Note.create(project: project, category: category, value: 3)
      Note.create(project: project, category: category, value: 3)
      project.note_for(category).should == 4.7
    end
  end

  it 'give nil when the is no notes' do
    project.note_for(category).should be_nil
  end

  describe :root_comments do
    it 'give root comments for the project' do
      create(:comment, parent: comment, category: category, project: project)
      project.root_comments.size.should == 1
    end
  end

  describe :add_comment do
    it 'add a new comment' do
      lambda do
        project.add_comment(comment)
      end.should change(project.comments, :size).by(1)
    end
  end

  describe :notes_for do
    it 'give number of notes' do
      CategoryProject.create(project: project,
                             category: category,
                             description: 'test')
      project.notes_for(category).should == []
      note = Note.create(project: project, category: category, value: 1)
      project.notes_for(category).should == [note]
    end
  end

  describe :number_of_notes do
    it 'give number of notes' do
      CategoryProject.create(project: project,
                             category: category,
                             description: 'test')
      project.number_of_notes_for(category).should == 0
      Note.create(project: project, category: category, value: 8)
      project.number_of_notes_for(category).should == 1
      Note.create(project: project, category: category, value: 3)
      project.number_of_notes_for(category).should == 2
    end
  end

  describe :add_follower do
    it 'add a user to the followers' do
      lambda do
        project.add_follower(user)
      end.should change(project.followers, :size).by(1)
    end

    it 'render the new relation' do
      project.add_follower(user).should be_a(ProjectUserFollower)
    end
  end

  describe :remove_follower do
    it 'add a user to the followers' do
      project.add_follower(user)
      lambda do
        project.remove_follower(user)
      end.should change(project.followers, :size).by(-1)
    end
  end

  describe :general_description do
    it "return the general description" do
      project.general_description.should == project.category_projects.first.description
    end
  end
end
