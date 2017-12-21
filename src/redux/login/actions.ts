import axios from 'axios';

import {
  LoginFormInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const CHANGE_LOGIN_VALUE = 'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export type Actions = {
  CHANGE_LOGIN_VALUE: {
    type: typeof CHANGE_LOGIN_VALUE,
    payload: LoginFormInterface['login'],
  },
  CHANGE_PASSWORD_VALUE: {
    type: typeof CHANGE_PASSWORD_VALUE,
    payload: LoginFormInterface['login'],
  },
  USER_IS_AUTHORIZED: {
    type: typeof USER_IS_AUTHORIZED,
  },
  LOGIN_FAILED: {
    type: typeof LOGIN_FAILED,
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
  userIsAuthorized: ():
  Actions[typeof USER_IS_AUTHORIZED] => ({
    type: USER_IS_AUTHORIZED,
  }),
  loginFailed: ():
  Actions[typeof LOGIN_FAILED] => ({
    type: LOGIN_FAILED,
  }),
};

const sendUserCredential = axios.create({
    baseURL: 'http://dev.monyze.ru', 
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  });

export const asyncActionCreators = {
  sendUserCredentialToAPI: 
  ( payload: LoginFormInterface ) => {
    return ( dispatch: Dispatch ) => {
      sendUserCredential.post('/auth.php', payload).then(
        ( response ) => {
          if ( response.data === 'true' ) {
            dispatch(syncActionCreators.userIsAuthorized());
          } else {
            dispatch(syncActionCreators.loginFailed());
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  }
}