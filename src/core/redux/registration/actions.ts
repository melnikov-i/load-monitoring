import { sendRequestToAPI } from '@src/core/libs';
import { Dispatch } from '../';

import { RegistrationRequest, IReCaptchaDynamic, ICheckboxDynamic } from '@src/core/interfaces';

import { syncActionCreators as formActionCreators } from '@src/core/redux/form';

export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const SWITCH_FOCUSED_VALUE = 'SWITCH_FOCUSED_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';
export const CHANGE_REGISTRATION_VIEW = 'CHANGE_REGISTRATION_VIEW';
export const CHANGE_CHECKBOX_VALIDATION =
  'CHANGE_CHECKBOX_VALIDATION';
export const CHANGE_RECAPTCHA_VALIDATION = 'CHANGE_RECAPTCHA_VALIDATION';

export type Actions = {
  SWITCH_AGREEMENT_VALUE: {
    type: typeof SWITCH_AGREEMENT_VALUE,
  },

  SWITCH_FOCUSED_VALUE: {
    type: typeof SWITCH_FOCUSED_VALUE,
  }
  
  UPDATE_RECAPTCHA_VALUE: {
    type: typeof UPDATE_RECAPTCHA_VALUE,
    payload: string,
  },

  CHANGE_REGISTRATION_VIEW: {
    type: typeof CHANGE_REGISTRATION_VIEW,
    payload: string,
  },

  CHANGE_CHECKBOX_VALIDATION: {
    type: typeof CHANGE_CHECKBOX_VALIDATION,
    payload: ICheckboxDynamic,
  },

  CHANGE_RECAPTCHA_VALIDATION: {
    type: typeof CHANGE_RECAPTCHA_VALIDATION,
    payload: IReCaptchaDynamic,
  },
};

export const syncActionCreators = {
  /** Содержит ключевое значение для отображения шаблона страницы */
  changeRegistrationView: (payload: string):
    Actions[typeof CHANGE_REGISTRATION_VIEW] => ({
      type: CHANGE_REGISTRATION_VIEW, payload,
    }),

  /** Меняет значение чекбокса лицензионного соглашения в форме регистрации */
  switchAgreementValue: ():
    Actions[typeof SWITCH_AGREEMENT_VALUE] => ({
      type: SWITCH_AGREEMENT_VALUE,
    }),  

  /** Меняет признак фокуса чекбокса, получаемый при фокусе оригинального чекбокса */  
  switchFocusedValue: ():
    Actions[typeof SWITCH_FOCUSED_VALUE] => ({
      type: SWITCH_FOCUSED_VALUE,
    }),  

  /** Передает а редьюсер значение, полученное от сервиса reCAPTCHA */  
  updateReCaptchaValue: (payload: string):
    Actions[typeof UPDATE_RECAPTCHA_VALUE] => ({
      type: UPDATE_RECAPTCHA_VALUE, payload
    }),  
  
  changeCheckboxValidation: (payload: ICheckboxDynamic):
  Actions[typeof CHANGE_CHECKBOX_VALIDATION] => ({
      type: CHANGE_CHECKBOX_VALIDATION, payload,
  }),

  changeReCaptchaValidation: (payload: IReCaptchaDynamic):
    Actions[typeof CHANGE_RECAPTCHA_VALIDATION] => ({
      type: CHANGE_RECAPTCHA_VALIDATION, payload,
    }),
};

export const asyncActionCreators = {
  sendRegistrationToAPI:
    (payload: RegistrationRequest) => {
      return async (dispatch: Dispatch) => {
        dispatch(syncActionCreators.changeRegistrationView('pending'));
        dispatch(formActionCreators.clearFormsModel());
        try {
          const response = await sendRequestToAPI.post('/reg.php', payload);
          console.log('data:', response);
          switch (response.data.status) {
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
    },
};