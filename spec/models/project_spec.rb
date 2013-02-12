require 'spec_helper'

describe Project do
  let(:project) { create(:project, title: "Title",
                         url: "http://www.test.com",
                         user: user1) }
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:user3) { create(:user) }
  let(:comment) { create(:comment, item: project) }
  let(:tag) { create(:tag) }

  it { should have_many(:comments).dependent(:destroy) }
  it { should have_many(:notes).dependent(:destroy) }
  it { should have_many(:followers).through(:project_user_followers).dependent(:destroy) }
  it { should have_many(:project_user_followers).dependent(:destroy) }
  it { should have_many(:actualities).dependent(:destroy) }
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
        expect(Project.search('first')).to eq [project1]
      end
    end

    context 'when there is no search' do
      it 'give all the project' do
        expect(Project.search).to eq [project1, project2]
      end
    end
  end

  describe :top do
    let!(:project1) { create(:project, title: 'My First Project') }
    let!(:project2) { create(:project, title: 'My Second Project') }

    it 'give the top of the projects' do
      project1.notes << build(:note, value: 4, user: user1)
      project1.notes << build(:note, value: 4, user: user2)
      project1.notes << build(:note, value: 4, user: user3)

      project2.notes << build(:note, value: 4, user: user1)
      project2.notes << build(:note, value: 5, user: user2)

      projects = Project.top(1)

      expect(projects.length).to eq 1
      expect(projects.first.id).to eq project2.id
    end
  end

  describe :to_s do
    subject { project.to_s}

    it { should eq project.title }
  end

  describe :to_param do
    subject { project.to_param }

    it { should eq "#{project.id}-#{project.title.parameterize}" }
  end

  describe :note_for do
    it 'give notes for the project' do
      Note.create(project: project, tag: tag, value: 8, user: user1)
      Note.create(project: project, tag: tag, value: 3, user: user2)
      Note.create(project: project, tag: tag, value: 3, user: user3)
      expect(project.note_for(tag)).to eq 4.7
    end
  end

  it 'give nil when the is no notes' do
    expect(project.note_for(tag)).to be_nil
  end

  describe :root_comments do
    it 'give root comments for the project' do
      create(:comment, parent: comment, item: project)
      expect(project.root_comments.size).to eq 1
    end
  end

  describe :add_comment do
    it 'add a new comment' do
      expect(lambda do
        project.add_comment(comment)
      end).to change(project.comments, :size).by(1)
    end
  end

  describe :notes_for do
    it 'give number of notes' do
      expect(project.notes_for(tag)).to eq []
      note = Note.create(project: project, tag: tag, value: 1, user: user1)
      expect(project.notes_for(tag)).to eq [note]
    end
  end

  describe :number_of_notes do
    it 'give number of notes' do
      expect(project.number_of_notes_for(tag)).to eq 0
      Note.create(project: project, tag: tag, value: 8, user: user1)
      expect(project.number_of_notes_for(tag)).to eq 1
      Note.create(project: project, tag: tag, value: 3, user: user2)
      expect(project.number_of_notes_for(tag)).to eq 2
    end
  end

  describe :tags_with_general do
    it 'give all the tag with general' do
      project.tag_list = tag.name
      project.save
      project.reload
      tag_list = project.tags_with_general
      expect(tag_list.size).to eq 2
      expect(tag_list.first.name).to eq "General"
      expect(tag_list.second.name).to eq tag.name
    end
  end

  describe :add_follower do
    it 'add a user to the followers' do
      expect(lambda do
        project.add_follower(user1)
      end).to change(project.followers, :size).by(1)
    end

    it 'render the new relation' do
      expect(project.add_follower(user1)).to be_a(ProjectUserFollower)
    end
  end

  describe :remove_follower do
    it 'add a user to the followers' do
      project.add_follower(user1)
      expect(lambda do
        project.remove_follower(user1)
      end).to change(project.followers, :size).by(-1)
    end
  end

  describe :followers_ids do
    it "return the ids of followers" do
      project.add_follower(user1)
      expect(project.followers_ids).to eq [user1.id]
    end
  end
end
