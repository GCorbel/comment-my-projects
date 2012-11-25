class CreateCommentableItem < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.remove :project_id
      t.references :item, polymorphic: true
    end
  end
end
