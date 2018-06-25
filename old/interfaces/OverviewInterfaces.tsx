export interface OverviewInterface {
  counts: {
    normal: string,
    warning: string,
    offline: string,
  },
  events_table: OverviewEventsTableInterface[],
}

export interface OverviewEventsTableInterface {
  id: string,
  comp_name: string,
  text: string,
  event_data: string,
}