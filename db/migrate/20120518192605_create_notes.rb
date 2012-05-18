class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.references :project
      t.references :category
      t.integer :value

      t.timestamps
    end
    add_index :notes, :project_id
    add_index :notes, :category_id
  end
end
