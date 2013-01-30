class AddUserForNotes < ActiveRecord::Migration
  def change
    change_table :notes do |t|
      t.references :user
    end
    add_index :notes, :user_id
  end
end
