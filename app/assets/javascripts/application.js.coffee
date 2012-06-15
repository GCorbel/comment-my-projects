#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require jquery.pjax
#= require_tree ../../../vendor/assets/javascripts/markdown/
#= require_tree .
$(document).ready ->
  initMarkdown()

$(document).on("pjax:end", () ->
  initMarkdown()
)

jQuery ->
  $('a:not([data-method=delete]):not([data-remote]):not([data-behavior]):not([data-skip-pjax])').pjax('[data-pjax-container]')

initMarkdown = () ->
  converter1 = Markdown.getSanitizingConverter()
  editor1 = new Markdown.Editor(converter1, '', { title: 'Markdown?', handler: markdownHelp })
  editor1.run()

markdownHelp = () ->
  window.open('http://fr.wikipedia.org/wiki/Markdown')
