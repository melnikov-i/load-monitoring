export interface LoginFormInterface {
  login: string,
  password: string
};

export type LoginInputValid = boolean;

interface LoginInputBorder {
  isValid: LoginInputValid
}

export type LInputBorderProps =
  LoginInputBorder & React.HTMLProps<HTMLInputElement>;