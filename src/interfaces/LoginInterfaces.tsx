export interface LoginFormInterface {
  login: string,
  password: string
};

export interface LogOunInterface {
  step: string,
}

export interface LoginFormStateIndexType {
  loginFormStateIndex: number,
}

export interface LoginFormStateInterface {
  loginFormStateIndex: LoginFormStateIndexType['loginFormStateIndex'];
  header: string[],
}

export type LSendingInProgressProps =
  LoginFormStateInterface['loginFormStateIndex'] 
  & React.HTMLProps<HTMLButtonElement> 
  & React.MouseEvent<HTMLButtonElement>;