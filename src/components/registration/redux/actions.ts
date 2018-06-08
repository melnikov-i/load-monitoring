import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '@src/core';

// import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest, IReCaptchaDynamic } from '../interfaces';

import { syncActionCreators as formInputActionCreators } from '@src/components/formInput';

export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const SWITCH_FOCUSED_VALUE = 'SWITCH_FOCUSED_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';
export const CHANGE_REGISTRATION_VIEW = 'CHANGE_REGISTRATION_VIEW';
export const CHANGE_VALIDATION_VALUE_IN_COMPONENTS = 'CHANGE_VALIDATION_VALUE_IN_COMPONENTS';
export const CHANGE_RECAPTCHA_VALIDATION = 'CHANGE_RECAPTCHA_VALIDATION';

// export const CHANGE_VALIDATION_VALUE = 'CHANGE_VALIDATION_VALUE';    

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
  
  CLEAR_FORM_DATA: {
    type: typeof CLEAR_FORM_DATA,
  },

  CHANGE_VALIDATION_VALUE_IN_COMPONENTS: {
    type: typeof CHANGE_VALIDATION_VALUE_IN_COMPONENTS,
    payload: any,
  },

  CHANGE_RECAPTCHA_VALIDATION: {
    type: typeof CHANGE_RECAPTCHA_VALIDATION,
    payload: IReCaptchaDynamic,
  }

  // CHANGE_VALIDATION_VALUE: {
  //   type: typeof CHANGE_VALIDATION_VALUE,
  //   payload: IFormInputValues['values'],
  // },
};

export const syncActionCreators = {
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

  /** Содержит ключевое значение для отображения шаблона страницы */
  changeRegistrationView: (payload: string):
    Actions[typeof CHANGE_REGISTRATION_VIEW] => ({
      type: CHANGE_REGISTRATION_VIEW, payload,
    }),

  changeValidationValueInComponents: (payload: any):
  Actions[typeof CHANGE_VALIDATION_VALUE_IN_COMPONENTS] => ({
      type: CHANGE_VALIDATION_VALUE_IN_COMPONENTS, payload,
  }),

  changeReCaptchaValidation: (payload: IReCaptchaDynamic):
    Actions[typeof CHANGE_RECAPTCHA_VALIDATION] => ({
      type: CHANGE_RECAPTCHA_VALIDATION, payload,
    }),

  /**
   * Содержит значение для механизма валидации чекбокса 
   * подтверждения согласия с пользовательским соглашением.
   */
  // changeValidationValue: (payload: IFormInputValues['values']):
  //   Actions[typeof CHANGE_VALIDATION_VALUE] => ({
  //     type: CHANGE_VALIDATION_VALUE, payload,
  //   }),

  clearFormData: ():
    Actions[typeof CLEAR_FORM_DATA] => ({
      type: CLEAR_FORM_DATA,
    }),
};

export const asyncActionCreators = {
  sendRegistrationToAPI:
    (payload: RegistrationRequest) => {
      return async (dispatch: Dispatch) => {
        // dispatch(syncActionCreators.changeValidationValue([['valid','valid','valid','valid','valid']]));
        dispatch(syncActionCreators.changeRegistrationView('waiting'));
        dispatch(syncActionCreators.clearFormData());
        try {
          const { data } = await sendRequestToAPI.post('/reg.php', payload);
          console.log('data:', data);
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
    },
  changeValidationValueInComponents:
    (payload: any) => {
      return (dispatch: Dispatch) => {
        dispatch(formInputActionCreators.formInputsChangeValidation(payload.formInput));
        dispatch(syncActionCreators.changeReCaptchaValidation(payload.reCaptcha));
      }
    }

  };