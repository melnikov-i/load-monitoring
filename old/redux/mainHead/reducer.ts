import { combineReducers } from 'redux';

import {} from '@src/interfaces';

import {
  MAIN_HEADER_BUTTON_SWITCH
} from '@src/redux/mainHead';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

import {
  SWITCH_PAGE_MENU_ITEM_ACTIVE
} from '@src/redux/main';

export type State = {
  MainHeaderButtonWasClicked: boolean,
};

export const reducer = combineReducers<State>({
  MainHeaderButtonWasClicked: ( state = false, action ) => {
    switch ( action.type ) {
      case MAIN_HEADER_BUTTON_SWITCH:
        return !state;
      /* Сброс значения ключа при выборе другого устройства в основном меню */
      case SWITCH_PAGE_MENU_ITEM_ACTIVE:
        return false;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
});