import { combineReducers } from 'redux';

import {
  LoginFormInterface,
  LoginInputValid,
} from '@src/interfaces';

import {
  CHANGE_LOGIN_VALUE,
  CHANGE_PASSWORD_VALUE,
  USER_IS_AUTHORIZED,
  LOGIN_FAILED,
} from '@src/redux/login';

export type State = {
  readonly LoginValue: LoginFormInterface['login'],
  readonly PasswordValue: LoginFormInterface['password'],
  readonly isAuthorized: boolean,
  readonly LoginFailed: LoginInputValid,
};

export const reducer = combineReducers({
  LoginValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_LOGIN_VALUE:
        return action.payload;
      default:
        return state;
    }
  },
  PasswordValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_PASSWORD_VALUE:
        return action.payload;
      default:
        return state;
    }
  },
  isAuthorized: ( state = false, action ) => {
    switch ( action.type ) {
      case USER_IS_AUTHORIZED:
        return true;
      default:
        return state;
    }
  },
  LoginFailed: ( state = false, action ) => {
    switch ( action.type ) {
      case LOGIN_FAILED:
        return true;
      default:
        return state;
    }
  }
});