class Page < ActiveRecord::Base
  acts_as_page
  active_admin_translates :title, :body, :slug, :meta_keywords, :meta_description
end
