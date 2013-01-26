#encoding=utf-8
describe ProjectHelper do
  let(:user) { build_stubbed(:user) }
  let(:project) { build_stubbed(:project, user: user, created_at: now) }
  let(:now) { DateTime.now }
  let(:formatted_now) { now.strftime('%d/%m/%Y %H:%M') }
  describe :comment_title do
    subject { project_title_for(project) }

    context 'when there is a user' do
      before { self.stubs(:avatar_url).returns('id') }

      it 'show the title' do
        should eq "<div class=\"project_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "<h1>#{project}</h1>" \
            "<p>Site : #{link_to(project.url, project.url)}</p>" \
            "<p>Ajouté par : #{user.username}</p>" \
            "<p>Le : #{formatted_now}</p>" \
          "</div>"
      end
    end
  end

  describe :tags_for do
    context "when the project don't have notes" do
      it "show tags" do
        tag = build_stubbed(:tag)
        project.stubs(:tags_with_general).returns([tag])
        expect(tags_for(project)).to eq "Tags : <div class=\"notes\">#{tag.name}</div>"
      end
    end
  end
end
