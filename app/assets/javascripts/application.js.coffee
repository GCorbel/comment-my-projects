#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require_tree .
#= require pjax
#= require bootstrap-wysihtml5-all
$(document).ready ->
  $('textarea').wysihtml5()

$(document).on("pjax:end", () ->
  $('textarea').wysihtml5()
)
