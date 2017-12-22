export interface LoginFormInterface {
  login: string,
  password: string
};

// export type LoginInputValid = boolean;

// export interface LoginInputBorder {
//   isValid: boolean
// }

export interface LoginFormStateIndexType {
  loginFormStateIndex: number,
}

export interface LoginFormStateInterface {
  loginFormStateIndex: LoginFormStateIndexType['loginFormStateIndex'];
  header: string[],
}

// export type LInputBorderProps =
//   LoginInputBorder & React.HTMLProps<HTMLInputElement>;

export type LSendingInProgressProps =
  LoginFormStateInterface['loginFormStateIndex'] 
  & React.HTMLProps<HTMLButtonElement> 
  & React.MouseEvent<HTMLButtonElement>;