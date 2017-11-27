interface PieChartIndicatorValue {
  value: number,
}

interface PieChartIndicatorBottomColor {
  color: string,
}

export type PieChartIndicatorProps = 
  PieChartIndicatorValue & React.HTMLProps<HTMLDivElement>;

export type PieChartIndicatorBottomProps =
  PieChartIndicatorBottomColor & React.HTMLProps<HTMLDivElement>;

export interface DataFromServerModel {
  cpu: string,
  cpu1: string,
  cpu2: string,
  cpu3: string,
  cpu4: string,
  cpu5: string,
  cpu6: string,
  cpu7: string,
  cpu8: string,
  cpu9: string,
  cpu10: string,
  cpu11: string,
  cpu12: string,
  cpu13: string,
  cpu14: string,
  cpu15: string,
  cpu16: string,
  dwMemoryLoad: string,
  hdd1: string | null,
  hdd2: string | null,
  hdd3: string | null,
  hdd4: string | null,
  hdd5: string | null,
  hdd6: string | null,
  hdd7: string | null,
  hdd8: string | null,
  net1: string | null,
  net2: string | null,
  net3: string | null,
  net4: string | null,
  net5: string | null,
  net6: string | null,
  data_add: string,
  id: string,
}