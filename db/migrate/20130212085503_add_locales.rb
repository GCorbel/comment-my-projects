class AddLocales < ActiveRecord::Migration
  def change
    add_column :projects, :locale, :string
    add_column :comments, :locale, :string
    add_column :actualities, :locale, :string
  end
end
