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
  dash_data: {
    widget_name: string,
  }[],
}

export interface DashboardDragWidgetInterface {
  id: string,
  findWidget: ( id: string ) => any,
  moveWidget: ( id: string, atIndex: string ) => any,
}

export interface MoveWidgetsInterface {
  source: number,
  target: number,
};

export interface DraggableDashboardChangerIterface {
  dashboard: DashboardInterface,
  checkbox: string,
}