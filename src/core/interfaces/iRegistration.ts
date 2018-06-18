export interface RegistrationRequest {
  state: string,
  email: string,
  password: string,
  ['g-recaptcha-response']: string,
}

export interface ICheckboxDynamic {
  value: boolean,
  isFocused: boolean,
  validation: string,
}

export interface IReCaptchaDynamic {
  value: string,
  validation: string,
}