class MarkdownInput < SimpleForm::Inputs::Base
  def input
    suffix = input_options[:suffix]
    input_html_options.merge!({id: "wmd-input#{suffix}"})
    template.content_tag(:div, class: 'wmd-panel') do
      template.content_tag(:div, '', id: "wmd-button-bar#{suffix}") +
      @builder.text_area(attribute_name, input_html_options)
    end +
    template.content_tag(:div,
                         '',
                         id: "wmd-preview#{suffix}",
                         class: 'wmd-panel wmd-preview')
  end
end
