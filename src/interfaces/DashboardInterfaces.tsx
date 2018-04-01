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

export interface SeriesInterface {
  dashboard_id: string,
  limit: string,
  dash_data: WidgetInterface[],
}

export interface DashboardDragWidgetInterface {
  id: string,
  findWidget: ( id: string ) => any,
  moveWidget: ( id: string, atIndex: string ) => any,
}

// export interface DashboardWidgetWrapperInterface {
//   widget_name: WidgetInterface['widget_name'],
//   device_id: WidgetInterface['device_id'],
//   series: any,
// }

export interface MoveWidgetsInterface {
  source: number,
  target: number,
};

export interface DraggableDashboardChangerIterface {
  dashboard: DashboardInterface,
  checkbox: string,
}