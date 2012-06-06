class CreateCategoryProjects < ActiveRecord::Migration
  def change
    create_table :category_projects do |t|
      t.references :category
      t.references :project
      t.text :description, limit: nil 

      t.timestamps
    end
  end
end
