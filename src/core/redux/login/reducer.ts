import { combineReducers } from 'redux';

import {
  CHANGE_LOGIN_VIEW,
  USER_IS_AUTHORIZED,
  USER_WAS_LOGOUT,
} from './';

import {} from '@src/core/interfaces';

export type State = {
  readonly loginView: string,
  readonly isAuthorized: boolean,
};

export const reducer = combineReducers<State>({
  loginView: (state = 'form', action) => {
    switch (action.type) {
      case CHANGE_LOGIN_VIEW: return action.payload;
      default: return state;
    }
  },

  /**
   * Содержит ключ состояния авторизации. На него ориентируются:
   *   - App: в зависимости от значения подключает либо Login либо Main
   */
  isAuthorized: (state = true, action) => {
    switch (action.type) {
      case USER_IS_AUTHORIZED:
        return true;
      case USER_WAS_LOGOUT:
        console.log('USER_WAS_LOGOUT');
        return false;
      default:
        return state;
    }
  },
});
