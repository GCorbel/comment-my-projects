$(document).ready ->
  $('a').click (e) ->
    e.preventDefault
    $(this).tab 'show'
