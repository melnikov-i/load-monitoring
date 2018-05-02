export interface LoginFormInterface {
  login: string,
  password: string
};

export interface LogOunInterface {
  step: string,
}

export interface LoginFormStateInterface {
  loginFormStateIndex: number,
  header: string[],
}

export type LSendingInProgressProps =
  LoginFormStateInterface['loginFormStateIndex'] 
  & React.HTMLProps<HTMLButtonElement> 
  & React.MouseEvent<HTMLButtonElement>;