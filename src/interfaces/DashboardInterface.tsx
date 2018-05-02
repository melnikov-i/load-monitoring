export interface DashboardInterface {
  dash_id: {
    dashboard_id: string,
    dashboard_name: string,
    dash_columns: string,
  },
  dash_data: {
    widget_name: string,
    device_id: string,
  }[],
}

export interface ElementsOfDashboardCollectionInterface {
  dashboard_id: string,
  element: string,
  collection: {
    widget_name: string,
  }[],
}

export interface SeriesRequestInterface {
  dashboard_id: string,
  limit: string,
  dash_data: {
    widget_name: string,
  }[],
}