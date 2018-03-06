export interface WidgetInterface {
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

export interface DashboardWidgetWrapperInterface {
  index: number,
  width: string,
  widget_name: WidgetInterface['widget_name'],
  device_id: WidgetInterface['device_id'],
}

export interface MoveWidgetsInterface {
  source: number,
  target: number,
};