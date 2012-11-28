ActiveAdmin.register Comment, as: 'ProjectComment' do
  scope_to(association_method: :unscoped) { Comment }
end
