class AddAkismetColumnsForComments < ActiveRecord::Migration
  def up
    add_column :comments, :user_ip, :string
    add_column :comments, :user_agent, :string
    add_column :comments, :referrer, :string
    add_column :comments, :approved, :boolean, default: true, null: false
    Comment.update_all(approved: true)
  end

  def down
    remove_column :comments, :user_ip
    remove_column :comments, :user_agent
    remove_column :comments, :referrer
    remove_column :comments, :approved
  end
end
