interface WidgetInterface {
  widget_name: string,
  device_id: string,
}

interface DashIdInterface {
  dashboard_id: string,
  dashboard_name: string,
  dash_columns: string,
}

export interface DashboardInterface {
  dash_id: DashIdInterface,
  dash_data: WidgetInterface[],
}

export interface DashboardWidgetInterface {
  index: string,
  width: number,
  widget_name: WidgetInterface['widget_name'],
  device_id: WidgetInterface['device_id'],
}