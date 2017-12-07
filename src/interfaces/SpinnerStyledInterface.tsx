export interface CircularSpinnerInterface {
  width: number,
  color: string,
  deg: {
    before: number,
    after: number,
  }
}

export type CircularSpinnerProps = 
  CircularSpinnerInterface & React.HTMLProps<HTMLDivElement>;