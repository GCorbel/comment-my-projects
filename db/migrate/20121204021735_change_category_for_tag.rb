class ChangeCategoryForTag < ActiveRecord::Migration
  def change
    drop_table :categories
    remove_column :notes, :category_id
    add_column :notes, :tag_id, :integer
    add_index :notes, :tag_id
  end
end
