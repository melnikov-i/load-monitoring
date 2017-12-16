import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  IsOpenedInterface
} from '@src/interfaces';

import {
  MAIN_MENU_WAS_REQUESTED_FROM_API,
  PUT_MAIN_MENU_FROM_API_TO_MODEL,
  DEVICES_MENU_WAS_REQUESTED_FROM_API,
  PUT_DEVICES_MENU_FROM_API_TO_MODEL,
  DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH,
  DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH,
  DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH,
} from '@src/redux/main';

export type State = {
  readonly MainMenuWasRequestedFromAPI: boolean,
  readonly MainMenuModel: MainMenuLinksInterface[],
  readonly DevicesMenuWasRequestedFromAPI: boolean,
  readonly DevicesMenuModel: MainMenuLinksInterface[],
  readonly isDevicesMenuOpened: IsOpenedInterface,
  readonly isMainMenuOpened: IsOpenedInterface,
};

const isMainMenuOpenedInitialState: IsOpenedInterface = {
  onSmallScreen: false,
  onBigScreen: false,
  onMiddleScreen: false,
};

const isDevicesMenuOpenedInitialState: IsOpenedInterface = {
  onSmallScreen: false,
  onBigScreen: false,
  onMiddleScreen: false,
}

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
  isMainMenuOpened: 
  ( state = isMainMenuOpenedInitialState, action ) => {
    switch ( action.type ) {
      case DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH:
        return {
          onBigScreen: false,
          onMiddleScreen: false,
          onSmallScreen: ( state.onSmallScreen ) ? false : true,
        };
      default:
        return state;
    }
  },
  isDevicesMenuOpened: 
  ( state = isDevicesMenuOpenedInitialState, action ) => {
    switch ( action.type ) {
      case DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH:
        return {
          onBigScreen: ( state.onBigScreen ) ? false : true,
          onMiddleScreen: false,
          onSmallScreen: false,
        };
      case DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH:
        return {
          onBigScreen: false,
          onMiddleScreen: ( state.onMiddleScreen ) ? false : true,
          onSmallScreen: false,
        };
      default:
        return state;
    }
  },
});