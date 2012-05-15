require 'spec_helper'

describe CategoryProject do
  let(:category) { create(:category) }
  let(:project) { create(:project) }
  let(:category_project) do
    CategoryProject.create(category_id: category.id,
                           project_id: project.id,
                           description: 'test')
  end

  it { should belong_to :project }
  it { should belong_to :category }

  it { should validate_presence_of :category }
  it { should validate_presence_of :project }
  it { should validate_presence_of :description }
end
