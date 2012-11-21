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

  after { subject }

  describe "POST 'create'" do
    subject { post 'create', args }

    context "with valid data" do
      before { note.expects(:save).returns(true) }
      it { should redirect_to(project) }
      it "set a flash message" do
        controller.should
          set_the_flash[:notice].to("Votre note a été ajouté")
      end
    end

    context "with invalid data" do
      before { note.expects(:save).returns(false) }
      it { should render_template('projects/show') }
    end
  end
end
