class CreateActualities < ActiveRecord::Migration
  def change
    create_table :actualities do |t|
      t.string :title
      t.text :body
      t.belongs_to :project

      t.timestamps
    end
    add_index :actualities, :project_id
  end
end
