class CreateCategoryProjects < ActiveRecord::Migration
  def change
    create_table :category_projects do |t|
      t.references :category
      t.references :project
      t.string :description

      t.timestamps
    end
  end
end
