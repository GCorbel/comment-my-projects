#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require jquery.pjax
#= require dataTables/jquery.dataTables
#= require_tree ../../../vendor/assets/javascripts/markdown/
#= require_tree ../../../vendor/assets/javascripts/datatables/
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

@initMarkdown = () ->
  if $('#wmd-input').length != 0
    converter1 = Markdown.getSanitizingConverter()
    editor1 = new Markdown.Editor(converter1, '', { title: 'Markdown?', handler: markdownHelp })
    editor1.run()

markdownHelp = () ->
  window.open('http://fr.wikipedia.org/wiki/Markdown')

rate = (event) ->
  $('#note_value').val($(this).attr('data-value'))
  $('#new_note>input').click()
