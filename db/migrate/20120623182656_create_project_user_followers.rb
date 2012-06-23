class CreateProjectUserFollowers < ActiveRecord::Migration
  def change
    create_table :project_user_followers do |t|
      t.references :project
      t.references :user

      t.timestamps
    end
    add_index :project_user_followers, :project_id
    add_index :project_user_followers, :user_id
  end
end
