class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :user
      t.references :project
      t.references :category
      t.text :message, limit: nil
      t.string :username

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :project_id
    add_index :comments, :category_id
  end
end
