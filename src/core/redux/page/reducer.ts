import { combineReducers } from 'redux';

import {
  CHANGE_MENU_LOADED_KEY,
  CHANGE_ERROR_KEY,
} from './'

export type State = {
  readonly isMenuLoaded: boolean,
  readonly isError: boolean,
};

export const reducer = combineReducers<State>({
  /** 
   * [pageInitialize]
   * становится true после успешного получения
   * данных о всех меню с сервера
   */
  isMenuLoaded: (state = false, action) => {
    switch (action.type) {
      case CHANGE_MENU_LOADED_KEY:
        return !state;
      default: return state;
    }
  },

  /**
   * [pageInitialize]
   * становится true, если при запросе данных о всех меню
   * с сервера пришла ошибка.
   */
  isError: (state = false, action) => {
    switch (action.type) {
      case CHANGE_ERROR_KEY:
        return !state;
      default: return state;
    }
  },
});