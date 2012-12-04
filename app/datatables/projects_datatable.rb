class ProjectsDatatable
  delegate :params, :h, :link_to, :number_to_currency, to: :@view

  def initialize(view)
    @view = view
  end

  def as_json(options = {})
    {
      sEcho: params[:sEcho].to_i,
      iTotalRecords: Project.count,
      iTotalDisplayRecords: projects.total_entries,
      aaData: data
    }
  end

  private

  def data
    data = projects.map do |project|
      [
        link_to(project.title, project),
        link_to(project.url, project),
        link_to(project.type.label, project),
      ]
    end
  end

  def projects
    @projects ||= fetch_projects
  end

  def fetch_projects
    projects = Project.order("#{sort_column} #{sort_direction}")
    projects = projects.select('id, title, url, type_id')
    projects = projects.page(page).per_page(per_page)
    if params[:sSearch].present? || params[:project_type]
      projects = projects.search(params[:sSearch], params[:project_type])
    end
    projects
  end

  def page
    params[:iDisplayStart].to_i/per_page + 1
  end

  def per_page
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 10
  end

  def sort_column
    columns = %w[title url]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end
