export interface CircularSpinnerInterface {
  width: number,
  color: string,
  bgColor: string,
}

export type CircularSpinnerProps = 
  CircularSpinnerInterface & React.HTMLProps<HTMLDivElement>;