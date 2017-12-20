import { combineReducers } from 'redux';

import {
  LoginFormInterface,
} from '@src/interfaces';

import {
  CHANGE_LOGIN_VALUE,
  CHANGE_PASSWORD_VALUE,
} from '@src/redux/login';

export type State = {
  readonly LoginValue: LoginFormInterface['login'],
  readonly PasswordValue: LoginFormInterface['password'],
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
  }
});