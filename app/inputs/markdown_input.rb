class MarkdownInput < SimpleForm::Inputs::Base
  def input
    out = template.content_tag(:div, class: 'wmd-panel') do
      out2 = template.content_tag(:div, '', id: 'wmd-button-bar')
      out2 << @builder.text_area(attribute_name,
                                 id: 'wmd-input', 
                                 class: 'wmd-input')
      out2.html_safe
    end
    out << template.content_tag(:div,
                                '',
                                id: 'wmd-preview',
                                class: 'wmd-panel wmd-preview')
    out.html_safe
  end
end
