import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '@src/redux';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  LogOunInterface,
  IRegistrationForm
} from '@src/interfaces';

export const USER_IS_AUTHORIZED = 
  'USER_IS_AUTHORIZED';
export const USER_WAS_LOGOUT = 
    'USER_WAS_LOGOUT';
export const CHANGE_LOGIN_VALUE = 
  'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE =
  'CHANGE_PASSWORD_VALUE';
export const SENDING_USER_CREDENTIAL_IN_PROGRESS =
    'SENDING_USER_CREDENTIAL_IN_PROGRESS';
export const CHANGE_R_PASSWORD_VALUE =
  'CHANGE_R_PASSWORD_VALUE';
export const CHANGE_R_CONFIRM_PASSWORD_VALUE =
  'CHANGE_R_CONFIRM_PASSWORD_VALUE';
export const CHANGE_R_EMAIL_VALUE =
  'CHANGE_R_EMAIL_VALUE';
export const UPDATE_RECAPTCHA_VALUE =
  'UPDATE_RECAPTCHA_VALUE';
export const SWITCH_R_AGREEMENT_CHECKBOX_VALUE =
  'SWITCH_R_AGREEMENT_CHECKBOX_VALUE';

export type Actions = {
  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },
  USER_WAS_LOGOUT: {
    type: typeof USER_WAS_LOGOUT,
  },
  CHANGE_LOGIN_VALUE: {
    type: typeof CHANGE_LOGIN_VALUE,
    payload: LoginFormInterface['login'],
  },
  CHANGE_PASSWORD_VALUE: {
    type: typeof CHANGE_PASSWORD_VALUE,
    payload: LoginFormInterface['password'],
  },
  SENDING_USER_CREDENTIAL_IN_PROGRESS: {
    type: typeof SENDING_USER_CREDENTIAL_IN_PROGRESS,
    payload: LoginFormStateInterface['loginFormStateIndex'],
  },
  CHANGE_R_PASSWORD_VALUE: {
    type: typeof CHANGE_R_PASSWORD_VALUE,
    payload: IRegistrationForm['password'],
  },
  CHANGE_R_CONFIRM_PASSWORD_VALUE: {
    type: typeof CHANGE_R_CONFIRM_PASSWORD_VALUE,
    payload: IRegistrationForm['password'],
  },
  CHANGE_R_EMAIL_VALUE: {
    type: typeof CHANGE_R_EMAIL_VALUE,
    payload: IRegistrationForm['email'],
  },
  UPDATE_RECAPTCHA_VALUE: {
    type: typeof UPDATE_RECAPTCHA_VALUE,
    payload: string,
  }
  SWITCH_R_AGREEMENT_CHECKBOX_VALUE: {
    type: typeof SWITCH_R_AGREEMENT_CHECKBOX_VALUE,
  }
};

export const syncActionCreators = {
  /**
   * Меняет значение ключа isAuthorized на true.
   * Происходит при успешной авторизации пользователя.
  */
  userIsAuthorized: (): Actions[typeof USER_IS_AUTHORIZED] => ({
      type: USER_IS_AUTHORIZED,
    }),

  /**
   * Меняет значение ключа isAuthorized на false.
   * Происходит при выходе пользователя из системы.
  */
  userWasLogOut: (): Actions[typeof USER_WAS_LOGOUT] => ({
      type: USER_WAS_LOGOUT,
    }),

  /**
   * По мере ввода текста с клавиатуры в поле ввода логина, меняет
   * значение этого поля.
  */
  changeLoginValue: (payload: LoginFormInterface['login']): 
    Actions[typeof CHANGE_LOGIN_VALUE] => ({
      type: CHANGE_LOGIN_VALUE, payload
    }),

  /**
   * По мере ввода текста с клавиатуры в поле ввода пароля, меняет
   * значение этого поля.
  */
  changePasswordValue: (payload: LoginFormInterface['password']):
    Actions[typeof CHANGE_PASSWORD_VALUE] => ({
      type: CHANGE_PASSWORD_VALUE, payload
    }),

  /**
   *  Помещает в reducer индекс статуса авторизации 
  */
  sendingUserCredentialInProgress: 
  ( payload: LoginFormStateInterface['loginFormStateIndex'] ):
    Actions[typeof SENDING_USER_CREDENTIAL_IN_PROGRESS] => ({
      type: SENDING_USER_CREDENTIAL_IN_PROGRESS, payload,
    }),


  /**
   * По мере ввода текста с клавиатуры в поле ввода пароля, меняет
   * значение этого поля.
  */
  changeReristrationPasswordValue:
  (payload: IRegistrationForm['password']):
    Actions[typeof CHANGE_R_PASSWORD_VALUE] => ({
      type: CHANGE_R_PASSWORD_VALUE, payload
    }),

  /**
   * По мере ввода текста с клавиатуры в поле ввода подтверждения
   * пароля, меняет значение этого поля.
   */
  changeConfirmPasswordValue: (payload: IRegistrationForm['password']):
    Actions[typeof CHANGE_R_CONFIRM_PASSWORD_VALUE] => ({
      type: CHANGE_R_CONFIRM_PASSWORD_VALUE, payload,
    }),


  /**
   * По мере ввода текста с клавиатуры в поле ввода E-Mail, меняет
   * значение этого поля.
  */
  changeEmailValue: (payload: IRegistrationForm['email']):
    Actions[typeof CHANGE_R_EMAIL_VALUE] => ({
      type: CHANGE_R_EMAIL_VALUE, payload
    }),
  
  /**
   * Передает а редьюсер значение, полученное от сервиса reCAPTCHA
   */
  updateRecaptchaValue: (payload: string):
    Actions[typeof UPDATE_RECAPTCHA_VALUE] => ({
      type: UPDATE_RECAPTCHA_VALUE, payload
    }),

  /**
   * Меняет значение чекбокса лицензионного соглашения в форме
   * регистрации
   */
  switchAgreementCheckboxValue: ():
    Actions[typeof SWITCH_R_AGREEMENT_CHECKBOX_VALUE] => ({
      type: SWITCH_R_AGREEMENT_CHECKBOX_VALUE,
    }),
};



export const asyncActionCreators = {
  /**
   * Отправляет на сервер введенные логин и пароль.
  */
  sendUserCredentialToAPI: 
  ( payload: LoginFormInterface ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(syncActionCreators.sendingUserCredentialInProgress(1));
      sendRequestToAPI.post('/auth.php', payload).then(
        ( response ) => {
          if ( response.data === 'true' ) {
            dispatch(syncActionCreators.userIsAuthorized());
          } else {
            dispatch(
              syncActionCreators.sendingUserCredentialInProgress(2)
            );
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  },

  /**
   * Отправляет на сервер информацию о завершении сеанса.
  */
  sendLogOutToAPI: ( payload: LogOunInterface ) => {
    return ( dispatch: Dispatch ) => {
      sendRequestToAPI.post('/auth.php', payload).then(
        ( response ) => {
          console.log('response:', response);
          dispatch(syncActionCreators.userWasLogOut());
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  },
  
  handleInputEmailEvent: ( payload: IRegistrationForm['email'] ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.changeEmailValue(payload)
      );
    }
  }
}