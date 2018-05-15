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

export interface IRegistrationForm {
  email: string,
  password: string,
  acreement: boolean,
}

export interface IRegistrationFormValidation {
  email: number,
  password: number,
  agreement: number,
  recapture: number,
}
