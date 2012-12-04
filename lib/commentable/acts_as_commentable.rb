module Commentable
  module ActsAsCommentable
    extend ActiveSupport::Concern

    included do
    end

    module ClassMethods
      def acts_as_commentable
      end
    end

    has_many :comments, as: :item

    def root_comments
      comments.where(ancestry: nil)
    end

    def add_comment(comment)
      comments << comment
    end
  end
end

ActiveRecord::Base.send :include, Commentable::ActsAsCommentable
