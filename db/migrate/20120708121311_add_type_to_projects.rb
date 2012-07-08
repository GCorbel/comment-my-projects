class AddTypeToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :type_id, :integer
    add_index :projects, :type_id
  end
end
