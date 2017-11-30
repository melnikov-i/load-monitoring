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