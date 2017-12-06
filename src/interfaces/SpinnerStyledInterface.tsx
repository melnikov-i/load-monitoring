interface CircularSpinnerInterface {
  width: string,
  color: string,
  degBefore: string,
  degAfter: string,
}

export type CircularSpinnerProps = 
  CircularSpinnerInterface & React.HTMLProps<HTMLDivElement>;