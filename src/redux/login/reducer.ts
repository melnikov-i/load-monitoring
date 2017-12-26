import { combineReducers } from 'redux';

import {
  LoginFormInterface,
  LoginFormStateInterface,
} from '@src/interfaces';

import {
  CHANGE_LOGIN_VALUE,
  CHANGE_PASSWORD_VALUE,
  SENDING_USER_CREDENTIAL_IN_PROGRESS,
  USER_IS_AUTHORIZED,
  USER_WAS_LOGOUT,
} from '@src/redux/login';

export type State = {
  readonly LoginValue: LoginFormInterface['login'],
  readonly PasswordValue: LoginFormInterface['password'],
  readonly isAuthorized: boolean,
  readonly LoginFormState: LoginFormStateInterface,
};

const loginFormStateInitialState: LoginFormStateInterface = {
  loginFormStateIndex: 0,
  header: [
    'Введите учетные данные',
    'Проверка учетных данных',
    'Учетные данные некорректны'
  ],
}

export const reducer = combineReducers({
  LoginValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_LOGIN_VALUE:
        return action.payload;
      case USER_IS_AUTHORIZED:
        return '';
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
  PasswordValue: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_PASSWORD_VALUE:
        return action.payload;
      case USER_IS_AUTHORIZED:
        return '';
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
  isAuthorized: ( state = true, action ) => {
    switch ( action.type ) {
      case USER_IS_AUTHORIZED:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
  LoginFormState: ( state = loginFormStateInitialState, action ) => {
    switch ( action.type ) {
      case SENDING_USER_CREDENTIAL_IN_PROGRESS:
        if ( action.payload < state.header.length ) {
          return {
            ...state,
            loginFormStateIndex: action.payload
          }          
        } else {
          return state;
        }
      case USER_IS_AUTHORIZED:
        return loginFormStateInitialState;
      case USER_WAS_LOGOUT:
        return loginFormStateInitialState;
      default:
        return state;
    }
  }
});