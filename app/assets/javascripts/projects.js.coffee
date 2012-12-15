$(document).ready ->
  initializeTagList()

$(document).on("pjax:end", () ->
  initializeTagList()
)
initializeTagList = ->
  field = $('#project_tag_list')
  field = $('#search_tag_list') if field.length == 0
  if field.length == 1 && !field.parent().children().first().is('div.select2-container')
      field.select2(width: '400px', tags: field.attr('data-tags').split(','))
