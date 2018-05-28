import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '@src/core';

export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';
export const CHANGE_REGISTRATION_VIEW = 'CHANGE_REGISTRATION_VIEW';

export type Actions = {
  SWITCH_AGREEMENT_VALUE: {
    type: typeof SWITCH_AGREEMENT_VALUE,
  },
  
  UPDATE_RECAPTCHA_VALUE: {
    type: typeof UPDATE_RECAPTCHA_VALUE,
    payload: string,
  },

  CHANGE_REGISTRATION_VIEW: {
    type: typeof CHANGE_REGISTRATION_VIEW,
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

  /**
   * Содержит ключевое значение для отображения шаблона страницы
   */
  changeRegistrationView: (payload: string):
    Actions[typeof CHANGE_REGISTRATION_VIEW] => ({
      type: CHANGE_REGISTRATION_VIEW, payload,
    })
};

export const asyncActionCreators = {
  sendRegistrationToAPI:
  (payload: any) => {
    return async (dispatch: Dispatch) => {
      try {
        const { request: { data }} = await sendRequestToAPI.post('/reg.php', payload);
        switch (data.status) {
          case "ok": dispatch(
            syncActionCreators.changeRegistrationView('success')); return;
          case "already_registered": dispatch(
            syncActionCreators.changeRegistrationView('already')); return;
          default: dispatch(
            syncActionCreators.changeRegistrationView('failed')); return;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}