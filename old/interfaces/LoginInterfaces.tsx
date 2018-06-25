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

export interface IRegistrationFormItemsCollection {
  email: string,
  password: string,
  confirm: string,
  agreement: boolean,
}

export interface IRegistrationFormValidation {
  email: string,
  password: string,
  confirm: string,
  agreement: string,
  recapture: string,
}
