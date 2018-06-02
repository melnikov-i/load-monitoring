import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '@src/core';

import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest } from '../interfaces';

export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';
export const CHANGE_REGISTRATION_VIEW = 'CHANGE_REGISTRATION_VIEW';
export const CHANGE_VALIDATION_VALUE = 'CHANGE_VALIDATION_VALUE';

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
  },

  CHANGE_VALIDATION_VALUE: {
    type: typeof CHANGE_VALIDATION_VALUE,
    payload: IFormInputValues['values'],
  }
};

export const syncActionCreators = {
  /** Меняет значение чекбокса лицензионного соглашения в форме регистрации */
  switchAgreementValue: ():
    Actions[typeof SWITCH_AGREEMENT_VALUE] => ({
      type: SWITCH_AGREEMENT_VALUE,
    }),

  /** Передает а редьюсер значение, полученное от сервиса reCAPTCHA */
  updateReCaptchaValue: (payload: string):
    Actions[typeof UPDATE_RECAPTCHA_VALUE] => ({
      type: UPDATE_RECAPTCHA_VALUE, payload
    }),

  /** Содержит ключевое значение для отображения шаблона страницы */
  changeRegistrationView: (payload: string):
    Actions[typeof CHANGE_REGISTRATION_VIEW] => ({
      type: CHANGE_REGISTRATION_VIEW, payload,
    }),

  /**
   * Содержит значение для механизма валидации чекбокса 
   * подтверждения согласия с пользовательским соглашением.
   */
  changeValidationValue: (payload: IFormInputValues['values']):
    Actions[typeof CHANGE_VALIDATION_VALUE] => ({
      type: CHANGE_VALIDATION_VALUE, payload,
    })
};

export const asyncActionCreators = {
  sendRegistrationToAPI:
    (payload: RegistrationRequest) => {
      return async (dispatch: Dispatch) => {
        dispatch(syncActionCreators.changeValidationValue([['valid','valid','valid','valid','valid']]));
        try {
          const { data } = await sendRequestToAPI.post('/reg.php', payload);
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
  };