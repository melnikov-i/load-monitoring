import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  MainMenuLinkSpanInterface
} from '@src/interfaces';

import {
  PUT_MAIN_MENU_FROM_API_TO_MODEL,
  PUT_DEVICES_MENU_FROM_API_TO_MODEL,
  DO_DEVICES_MENU_VIEW_SWITCH,
} from '@src/redux/main';

export type State = {
  readonly MainMenuModel: MainMenuLinksInterface[],
  readonly DevicesMenuModel: MainMenuLinksInterface[],
  readonly isOpened: 
  MainMenuLinkSpanInterface['isOpened'],
};

export const reducer = combineReducers({
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_MAIN_MENU_FROM_API_TO_MODEL:
        return [...action.payload];
      default:
        return state;
    }
  },
  DevicesMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_DEVICES_MENU_FROM_API_TO_MODEL:
        return [...action.payload];
      default:
        return state;
    }
  },
  isOpened: ( state = false, action ) => {
    switch ( action.type ) {
      case DO_DEVICES_MENU_VIEW_SWITCH:
        return ( state ) ? false : true;
      default:
        return state;
    }
  }
});