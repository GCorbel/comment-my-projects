#encoding=utf-8
require 'spec_helper'

describe NotesController do
  let!(:note) { build_stubbed(:note) }
  let(:project) { build_stubbed(:project) }
  let(:args) { { project_id: project.id } }

  before do
    Project.stubs(:find).returns(project)
    Note.stubs(:new).returns(note)
    note.stubs(:save)
  end

  describe "POST 'create'" do
    subject { post 'create', args }
    it "should rendirect to project"
  end
end
