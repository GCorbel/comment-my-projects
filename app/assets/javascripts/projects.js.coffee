$(document).ready ->
  initializeDataTables()

$(document).on("pjax:end", () ->
  initializeDataTables()
)

initializeDataTables = () ->
  $('#projects').dataTable
    sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>"
    sPaginationType: "bootstrap"
    bProcessing: true
    bServerSide: true
    sAjaxSource: $('#projects').data('source')
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
} );
