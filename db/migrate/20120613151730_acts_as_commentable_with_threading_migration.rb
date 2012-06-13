class ActsAsCommentableWithThreadingMigration < ActiveRecord::Migration
  def change 
    change_table :comments do |t|
      t.integer :commentable_id, :default => 0
      t.string :commentable_type, :default => ""
      t.integer :parent_id, :lft, :rgt
    end
  end
end
