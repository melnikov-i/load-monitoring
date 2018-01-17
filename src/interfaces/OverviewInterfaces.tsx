export interface OverviewPageInterface {
  counts: OverviewCountInterface,
  events_table: OverviewEventsTableInterface[],
}

export interface OverviewCountInterface {
  normal: string,
  warning: string,
  offline: string,
}

export interface OverviewEventsTableInterface {
  id: string,
  comp_name: string,
  text: string,
  event_data: string,
}