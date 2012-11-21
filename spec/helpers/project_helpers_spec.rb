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
        should == "<div class=\"project_header\">" \
            "<img alt=\"Id\" class=\"avatar\" src=\"/images/id\" />" \
            "<h1>#{project}</h1>" \
            "Site : #{link_to(project.url, project.url)}" \
            "<br/>" \
            "Ajouté par : #{user.username}" \
            "<br/>" \
            "Le : #{formatted_now}" \
          "</div>"
      end
    end
  end
end
