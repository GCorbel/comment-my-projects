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
  $(document).ajaxStart(showBusyCursor)
  $(document).ajaxStop(hideBusyCursor)

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
  user = $(this).data('user')
  $.post(
    url
    note:
      value: value
      tag_id: tag
      user_id: user
  ).done( => $(this).parent().parent().html('Your rate has been added<br/><br/>') )

showBusyCursor = (event) ->
  $('body').css('cursor','wait')

hideBusyCursor = (event) ->
  $('body').css('cursor','auto')

$(document).on('page:fetch', showBusyCursor)
