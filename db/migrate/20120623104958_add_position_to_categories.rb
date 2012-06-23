class AddPositionToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :position, :integer, default: 999
  end
end
