export interface CircularSpinnerInterface {
  width: number,
  color: string,
}

export type CircularSpinnerProps = 
  CircularSpinnerInterface & React.HTMLProps<HTMLDivElement>;