ActiveAdmin.register Page do
  form do |f|
    f.translated_inputs "Translated fields" do |t|
      t.input :title
      t.input :body
      t.input :slug
      t.input :meta_keywords
      t.input :meta_description
    end
    f.buttons
  end
end
