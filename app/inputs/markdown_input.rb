class MarkdownInput < SimpleForm::Inputs::Base
  def input
    template.content_tag(:div, class: 'wmd-panel') do
      template.content_tag(:div, '', id: 'wmd-button-bar') +
      @builder.text_area(attribute_name,
                         id: 'wmd-input', 
                         class: 'wmd-input')
    end +
    template.content_tag(:div,
                         '',
                         id: 'wmd-preview',
                         class: 'wmd-panel wmd-preview')
  end
end
