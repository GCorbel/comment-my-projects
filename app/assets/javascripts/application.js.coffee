#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require jquery.turbolinks
#= require turbolinks
#= require_tree ../../../vendor/assets/javascripts/markdown/
#= require projects

$(document).ready ->
  initMarkdown()
  $('.star').on('click', rate)

@initMarkdown = (suffix = '') ->
  identifier = if suffix
    '#wmd-input' + suffix
  else
    'textarea.markdown'

  if $(identifier).length != 0 &&
     $(identifier).parent().find('#wmd-bold-button').length == 0
    converter = Markdown.getSanitizingConverter()
    editor = new Markdown.Editor(converter,
                                 suffix,
                                 { title: 'Markdown?', handler: markdownHelp })
    editor.run()

markdownHelp = () ->
  window.open('http://fr.wikipedia.org/wiki/Markdown')

rate = (event) ->
  value = $(this).data('value')
  tag = $(this).data('tag')
  url = $(this).data('url')
  $.post(
    url
    note:
      value: value
      tag_id: tag
  ).done( => $(this).parent().parent().html('Your rate has been added<br/><br/>') )
