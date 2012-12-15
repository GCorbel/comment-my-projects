#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require jquery.pjax
#= require_tree ../../../vendor/assets/javascripts/markdown/
#= require_tree .
$(document).ready ->
  initialize()

$(document).on("pjax:end", () ->
  initialize()
)

initialize = () ->
  initMarkdown()
  $('.star').on('click', rate)

jQuery ->
  $('a:not(.dataTables_paginate a):not([data-method=delete]):not([data-method=post]):not([data-remote]):not([data-behavior]):not([data-skip-pjax])').pjax('[data-pjax-container]')

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
  $('#note_value').val($(this).attr('data-value'))
  $('#new_note>input').click()
