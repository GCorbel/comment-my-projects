#encoding=utf-8
require 'spec_helper'

describe NotesController do
  let!(:note) { build_stubbed(:note) }
  let(:project) { build_stubbed(:project) }

  describe "POST 'create'" do
    before(:each) do
      Project.stubs(:find).returns(project)
      Note.stubs(:new).returns(note)
      note.stubs(:save)
    end

    context "with valid data" do
      before(:each) { note.stubs(:save).returns(true) }

      it "redirect to project's path" do
        post 'create', project_id: project.id
        should redirect_to(project)
      end

      it "save the project" do
        lambda do
          post 'create', project_id: project.id
        end.should change(project.notes, :size).by(1)
      end

      it "set a flash message" do
        post 'create', project_id: project.id
        should set_the_flash[:notice].to("La note a été ajoutée")
      end
    end

    context "with invalid data" do
      before(:each) { note.stubs(:save).returns(false) }

      it "render project's show template" do
        post 'create', project_id: project.id
        should render_template('projects/show')
      end
    end
  end
end
