import axios from 'axios';

import {
  LoginFormInterface,
  LoginFormStateInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const CHANGE_LOGIN_VALUE = 'CHANGE_LOGIN_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SENDING_USER_CREDENTIAL_IN_PROGRESS =
  'SENDING_USER_CREDENTIAL_IN_PROGRESS';
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';

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
      dispatch(syncActionCreators.sendingUserCredentialInProgress(1));
      sendUserCredential.post('/auth.php', payload).then(
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
  }
}