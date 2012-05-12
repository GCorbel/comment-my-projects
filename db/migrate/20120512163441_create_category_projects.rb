class CreateCategoryProjects < ActiveRecord::Migration
  def change
    create_table :category_projects, id: false do |t|
      t.references :category
      t.references :project
      t.string :description

      t.timestamps
    end
  end
end
