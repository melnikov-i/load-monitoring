export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';

export type Actions = {
  SWITCH_AGREEMENT_VALUE: {
    type: typeof SWITCH_AGREEMENT_VALUE,
  },
  
  UPDATE_RECAPTCHA_VALUE: {
    type: typeof UPDATE_RECAPTCHA_VALUE,
    payload: string,
  }
};

export const syncActionCreators = {
  /**
   * Меняет значение чекбокса лицензионного соглашения в форме
   * регистрации
   */
  switchAgreementValue: ():
    Actions[typeof SWITCH_AGREEMENT_VALUE] => ({
      type: SWITCH_AGREEMENT_VALUE,
    }),

  /**
   * Передает а редьюсер значение, полученное от сервиса reCAPTCHA
   */
  updateReCaptchaValue: (payload: string):
    Actions[typeof UPDATE_RECAPTCHA_VALUE] => ({
      type: UPDATE_RECAPTCHA_VALUE, payload
    }),
};