export interface WidgetInterface {
  /* Получаем это поле от бэкэнда */
  widget_name: string,
  /* Получаем это поле от бэкэнда */
  device_id: string,
  /* Комбинируем это поле из двух предыдущих */
  id: string,
  /* Полученные позднее от бэкэнда данные для диаграмм */
  series: any, // пока any!!!
  // index?: number,
  // width?: string,
  // isPreview?: boolean,
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