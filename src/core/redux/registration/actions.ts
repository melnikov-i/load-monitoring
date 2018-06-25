import { sendRequestToAPI } from '@src/core/libs';
import { Dispatch } from '../';

// import { IFormInputValues } from '@src/core/interfaces';
import { RegistrationRequest, IReCaptchaDynamic, ICheckboxDynamic } from '@src/core/interfaces';

// import { 
//   syncActionCreators as inputActionCreators
// } from '../input';

export const SWITCH_AGREEMENT_VALUE = 'SWITCH_AGREEMENT_VALUE';
export const SWITCH_FOCUSED_VALUE = 'SWITCH_FOCUSED_VALUE';
export const UPDATE_RECAPTCHA_VALUE = 'UPDATE_RECAPTCHA_VALUE';
// export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';
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
  
  // CLEAR_FORM_DATA: {
  //   type: typeof CLEAR_FORM_DATA,
  // },

  CHANGE_CHECKBOX_VALIDATION: {
    type: typeof CHANGE_CHECKBOX_VALIDATION,
    payload: ICheckboxDynamic,
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

  /**
   * Содержит значение для механизма валидации чекбокса 
   * подтверждения согласия с пользовательским соглашением.
   */
  // changeValidationValue: (payload: IFormInputValues['values']):
  //   Actions[typeof CHANGE_VALIDATION_VALUE] => ({
  //     type: CHANGE_VALIDATION_VALUE, payload,
  //   }),

  // clearFormData: ():
  //   Actions[typeof CLEAR_FORM_DATA] => ({
  //     type: CLEAR_FORM_DATA,
  //   }),
};

export const asyncActionCreators = {
  sendRegistrationToAPI:
    (payload: RegistrationRequest) => {
      return async (dispatch: Dispatch) => {
        dispatch(syncActionCreators.changeRegistrationView('pending'));
        // dispatch(syncActionCreators.clearFormData());
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
        // dispatch(inputActionCreators.validateDAtributes(payload.formInput));
        dispatch(syncActionCreators.changeReCaptchaValidation(payload.reCaptcha));
        dispatch(syncActionCreators.changeCheckboxValidation(payload.checkbox));
      }
    }

  };