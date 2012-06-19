class MarkdownInput < SimpleForm::Inputs::Base
  def input
    input_html_options.merge!({id: 'wmd-input'})
    template.content_tag(:div, class: 'wmd-panel') do
      template.content_tag(:div, '', id: 'wmd-button-bar') +
      @builder.text_area(attribute_name, input_html_options)
    end +
    template.content_tag(:div,
                         '',
                         id: 'wmd-preview',
                         class: 'wmd-panel wmd-preview')
  end
end
