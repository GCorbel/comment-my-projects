#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require_tree .
#= require jquery.pjax
#= require bootstrap-wysihtml5-all
$(document).ready ->
  $('textarea').wysihtml5()

$(document).on("pjax:end", () ->
  $('textarea').wysihtml5()
)

jQuery ->
  $('a:not([data-method=delete]):not([data-remote]):not([data-behavior]):not([data-skip-pjax])').pjax('[data-pjax-container]')
