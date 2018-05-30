export interface RegistrationRequest {
  state: string,
  email: string,
  password: string,
  ['g-recaptcha-response']: string,
}