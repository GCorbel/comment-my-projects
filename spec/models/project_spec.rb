require 'spec_helper'

describe Project do
  let(:project) { create(:project, title: "Title",
                         url: "http://www.test.com",
                         user: user) }
  let(:user) { create(:user) }
  let(:comment) { create(:comment, item: project) }
  let(:tag) { create(:tag) }

  it { should have_many(:comments) }
  it { should have_many(:notes) }
  it { should have_many(:followers).through(:project_user_followers) }
  it { should have_many(:project_user_followers) }
  it { should have_many(:actualities) }
  it { should belong_to(:user) }

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }
  it { should validate_presence_of :description }

  it { should validate_format_of(:url).with('http://www.google.com') }
  it { should validate_format_of(:url).not_with('test') }

  describe :search do
    let!(:project1) { create(:project, title: 'My First Project') }
    let!(:project2) { create(:project, title: 'My Second Project') }

    context 'when there is a research' do
      it 'give all the projects with a word with title' do
        Project.search('first').should == [project1]
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
      Note.create(project: project, tag: tag, value: 8)
      Note.create(project: project, tag: tag, value: 3)
      Note.create(project: project, tag: tag, value: 3)
      project.note_for(tag).should == 4.7
    end
  end

  it 'give nil when the is no notes' do
    project.note_for(tag).should be_nil
  end

  describe :root_comments do
    it 'give root comments for the project' do
      create(:comment, parent: comment, item: project)
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
      project.notes_for(tag).should == []
      note = Note.create(project: project, tag: tag, value: 1)
      project.notes_for(tag).should == [note]
    end
  end

  describe :number_of_notes do
    it 'give number of notes' do
      project.number_of_notes_for(tag).should == 0
      Note.create(project: project, tag: tag, value: 8)
      project.number_of_notes_for(tag).should == 1
      Note.create(project: project, tag: tag, value: 3)
      project.number_of_notes_for(tag).should == 2
    end
  end

  describe :tags_with_general do
    it 'give all the tag with general' do
      project.tag_list = tag.name
      project.save
      project.reload
      tag_list = project.tags_with_general
      tag_list.size.should == 2
      tag_list.first.name.should == "General"
      tag_list.second.name.should == tag.name
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

  describe :followers_ids do
    it "return the ids of followers" do
      project.add_follower(user)
      project.followers_ids.should == [user.id.to_s]
    end
  end
end
