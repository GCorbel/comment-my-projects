require 'spec_helper'

describe Project do
  let(:project) { create(:project, title: "Title",
                                   url: "http://www.test.com") }
  let(:category) { create(:category) } 

  it { should have_many(:categories).through(:category_projects) }
  it { should have_many(:category_projects) }
  it { should have_many(:comments) }
  it { should have_many(:notes) }
  it { should belong_to(:user) }

  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

  it { should validate_format_of(:url).with('http://www.google.com') }
  it { should validate_format_of(:url).not_with('test') }

  it "have a category on creation" do
    project.categories.first.label.should == "General"
    project.category_projects.first.description.should == 
      "Title : <a href=\"http://www.test.com\">http://www.test.com</a>"
  end

  describe :to_s do
    subject { Category.new(label: "Category").to_s}

    it { should == "Category" }
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
end
