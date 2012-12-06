$(document).ready ->
  initializeDataTables()
  initializeTagList()

$(document).on("pjax:end", () ->
  initializeDataTables()
  initializeTagList()
)

initializeDataTables = () ->
  if $('#projects').length != 0 && !$('#projects').parent().attr('role')
    $('#projects').dataTable
      sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>"
      sPaginationType: "bootstrap"
      bProcessing: true
      bServerSide: true
      bRetrieve: true
      sAjaxSource: $('#projects').data('source')
      fnServerParams: (aoData) ->
        value = $("#project_type").val()
        if value
          aoData.push(
            name: "project_type"
            value: value
          )
      oLanguage:
        sProcessing:   "Traitement en cours..."
        sLengthMenu:   "Afficher _MENU_ éléments"
        sZeroRecords:  "Aucun élément à afficher"
        sInfo:         "Affichage de l'élement _START_ à _END_ sur _TOTAL_ éléments"
        sInfoEmpty:    "Affichage de l'élement 0 à 0 sur 0 éléments"
        sInfoFiltered: "(filtré de _MAX_ éléments au total)"
        sInfoPostFix:  ""
        sSearch:       "Rechercher :"
        sUrl:          ""
        oPaginate:
          sFirst:    "Premier"
          sPrevious: ""
          sNext:     ""
          sLast:     "Dernier"

$.extend( $.fn.dataTableExt.oStdClasses, {
  "sWrapper": "dataTables_wrapper form-inline"
} )

initializeTagList = ->
  field = $('#project_tag_list')
  field = $('#search_tag_list') if field.length == 0
  if field.length == 1 && !field.parent().children().first().is('div.select2-container')
      field.select2(width: '400px', tags: field.attr('data-tags').split(','))
