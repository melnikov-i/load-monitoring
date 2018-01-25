interface WidgetInterface {
  widget_name: string,
  device_id: string,
  widget_width: string,
}

interface DashIdInterface {
  id: string,
  dashboard_name: string,
}

export interface DashboardInterface {
  dash_id: DashIdInterface,
  dash_data: WidgetInterface[],
}