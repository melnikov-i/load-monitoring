import { combineReducers } from 'redux';

import {
  CHANGE_OVERVIEW_LOADED_KEY,
  CHANGE_OVERVIEW_ERROR_KEY
} from './'

export type State = {
  isOverviewLoaded: boolean,
  isOverviewError: boolean,
};

export const reducer = combineReducers<State>({
  /**
   * [overviewInitialize]
   * становится true после успешного получения
   * данных о всех меню с сервера
   */
  isOverviewLoaded: (state = false, action) => {
    switch (action.type) {
      case CHANGE_OVERVIEW_LOADED_KEY: return action.payload;
      default: return state;
    }
  },

  /**
   * [pageInitialize]
   * становится true, если при запросе данных о всех меню
   * с сервера пришла ошибка.
   */
  isOverviewError: (state = false, action) => {
    switch (action.type) {
      case CHANGE_OVERVIEW_ERROR_KEY:
        return action.payload;
      default: return state;
    }
  },
});