import axios from 'axios';

import {
  LoginFormInterface,
  LoginFormStateInterface,
  LogOunInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const CHANGE_LOGIN_VALUE = 'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SENDING_USER_CREDENTIAL_IN_PROGRESS =
  'SENDING_USER_CREDENTIAL_IN_PROGRESS';
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';
export const USER_WAS_LOGOUT = 'USER_WAS_LOGOUT';

export type Actions = {
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
  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },
  USER_WAS_LOGOUT: {
    type: typeof USER_WAS_LOGOUT,
  }
};

export const syncActionCreators = {
  changeLoginValue: (payload: LoginFormInterface['login']): 
  Actions[typeof CHANGE_LOGIN_VALUE] => ({
    type: CHANGE_LOGIN_VALUE, payload
  }),
  changePasswordValue: (payload: LoginFormInterface['password']): 
  Actions[typeof CHANGE_PASSWORD_VALUE] => ({
    type: CHANGE_PASSWORD_VALUE, payload
  }),
  sendingUserCredentialInProgress: 
  ( payload: LoginFormStateInterface['loginFormStateIndex'] ):
  Actions[typeof SENDING_USER_CREDENTIAL_IN_PROGRESS] => ({
    type: SENDING_USER_CREDENTIAL_IN_PROGRESS, payload
  }),
  userIsAuthorized: ():
  Actions[typeof USER_IS_AUTHORIZED] => ({
    type: USER_IS_AUTHORIZED,
  }),
  userWasLogOut: ():
  Actions[typeof USER_WAS_LOGOUT] => ({
    type: USER_WAS_LOGOUT,
  }),
};

const sendRequestToAPI = axios.create({
    baseURL: 'http://dev.monyze.ru', 
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  });

export const asyncActionCreators = {
  sendUserCredentialToAPI: 
  ( payload: LoginFormInterface ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(syncActionCreators.sendingUserCredentialInProgress(1));
      sendRequestToAPI.post('/auth.php', payload).then(
        ( response ) => {
          if ( response.data === 'true' ) {
            setTimeout(() => {
              dispatch(syncActionCreators.userIsAuthorized());
            }, 1000);
          } else {
            setTimeout(() => {
              dispatch(
                syncActionCreators.sendingUserCredentialInProgress(2)
              );
            }, 1000);
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
  sendLogOutToAPI: ( payload: LogOunInterface ) => {
    return ( dispatch: Dispatch ) => {
      sendRequestToAPI.post('/auth.php', payload).then(
        ( response ) => {
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
}