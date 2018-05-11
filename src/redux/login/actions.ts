import { sendRequestToAPI } from '@src/libs';
import { Dispatch } from '@src/redux';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  LogOunInterface,
  IRegistrationForm
} from '@src/interfaces';

export const CHANGE_LOGIN_VALUE = 
  'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE = 
  'CHANGE_PASSWORD_VALUE';
export const SENDING_USER_CREDENTIAL_IN_PROGRESS =
  'SENDING_USER_CREDENTIAL_IN_PROGRESS';
export const USER_IS_AUTHORIZED = 
  'USER_IS_AUTHORIZED';
export const USER_WAS_LOGOUT = 
  'USER_WAS_LOGOUT';
export const SWITCH_REGISTRATION_FORM_STATE_TYPE =
  'SWITCH_REGISTRATION_FORM_STATE_TYPE';
export const CHANGE_EMAIL_VALUE =
  'CHANGE_EMAIL_VALUE';

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
    payload: LoginFormInterface['login'],
  },
  SENDING_USER_CREDENTIAL_IN_PROGRESS: {
    type: typeof SENDING_USER_CREDENTIAL_IN_PROGRESS,
    payload: LoginFormStateInterface['loginFormStateIndex'],
  },
  SWITCH_REGISTRATION_FORM_STATE_TYPE: {
    type: typeof SWITCH_REGISTRATION_FORM_STATE_TYPE,
    payload: string,
  },
  CHANGE_EMAIL_VALUE: {
    type: typeof CHANGE_EMAIL_VALUE,
    payload: IRegistrationForm['email'],
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
   * При вводе E-Mail в форму авторизации, ее визуальное оформление
   * меняется в зависимости от действий пользователя. Визуальное
   * оформление переключает этот ключ.
   */
  switchRegistrationFormStateType: ( payload: string ):
  Actions[typeof SWITCH_REGISTRATION_FORM_STATE_TYPE] => ({
      type: SWITCH_REGISTRATION_FORM_STATE_TYPE, payload,
  }),

  /**
   * По мере ввода текста с клавиатуры в поле ввода E-Mail, меняет
   * значение этого поля.
  */
  changeEMailValue: (payload: IRegistrationForm['email']):
    Actions[typeof CHANGE_EMAIL_VALUE] => ({
      type: CHANGE_EMAIL_VALUE, payload
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
        syncActionCreators.changeEMailValue(payload)
      );
      if ( payload !== '' ) {
        dispatch(
          syncActionCreators.switchRegistrationFormStateType('inProgress')
        );
      } else {
        dispatch(
          syncActionCreators.switchRegistrationFormStateType('default')
        );
      }
    }
  }
}