import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  DevicesMenuLayoutInterface
} from '@src/interfaces';

import {
  MAIN_MENU_WAS_REQUESTED_FROM_API,
  PUT_MAIN_MENU_FROM_API_TO_MODEL,
  DEVICES_MENU_WAS_REQUESTED_FROM_API,
  PUT_DEVICES_MENU_FROM_API_TO_MODEL,
  DO_DEVICES_MENU_VIEW_SWITCH,
  DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH,
} from '@src/redux/main';

export type State = {
  readonly MainMenuWasRequestedFromAPI: boolean,
  readonly MainMenuModel: MainMenuLinksInterface[],
  readonly DevicesMenuWasRequestedFromAPI: boolean,
  readonly DevicesMenuModel: MainMenuLinksInterface[],
  readonly isOpened: DevicesMenuLayoutInterface['isOpened'],
  readonly isMainMenuOpened: DevicesMenuLayoutInterface['isOpened'],
};

export const reducer = combineReducers({
  MainMenuWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case MAIN_MENU_WAS_REQUESTED_FROM_API:
        return true;
      default:
        return state;
    }
  },
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_MAIN_MENU_FROM_API_TO_MODEL:
        return [...action.payload];
      default:
        return state;
    }
  },
    DevicesMenuWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case DEVICES_MENU_WAS_REQUESTED_FROM_API:
        return true;
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
  },
  isMainMenuOpened: ( state = false, action ) => {
    switch ( action.type ) {
      case DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH:
        return ( state ) ? false : true;
      default:
        return state;
    }
  }
});