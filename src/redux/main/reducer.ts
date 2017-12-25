import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  IsOpenedUserMenuInterface,
} from '@src/interfaces';

import {
  MAIN_MENU_WAS_REQUESTED_FROM_API,
  PUT_MAIN_MENU_FROM_API_TO_COLLECTION,
  PUT_USER_MENU_FROM_API_TO_COLLECTION,
  DEVICES_MENU_WAS_REQUESTED_FROM_API,
  PUT_DEVICES_MENU_FROM_API_TO_COLLECTION,
  DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH,
  DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH,
  DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH,
  DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH,
  DO_BOTH_MENU_ON_SMALL_SCREEN_OFF,
  DO_USER_MENU_ON_BIG_SCREEN_SWITCH
} from '@src/redux/main';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly MainMenuWasRequestedFromAPI: boolean,
  readonly MainMenuItemsCollection: MainMenuLinksInterface[],
  readonly UserMenuItemsCollection: UserMenuInterface,
  readonly DevicesMenuWasRequestedFromAPI: boolean,
  readonly DevicesMenuItemsCollection: MainMenuLinksInterface[],
  readonly isDevicesMenuOpened: IsOpenedInterface,
  readonly isMainMenuOpened: IsOpenedInterface,
  readonly isUserMenuOpened: IsOpenedUserMenuInterface,
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
};

const isUserMenuOpenedInitialState: IsOpenedUserMenuInterface = {
  onBigScreen: false,
};

const UserMenuInitialState: UserMenuInterface = {
  user: [
    {
      login: '',
    }
  ],
  links: [
    {
      to: 'details',
      value: 'Мои данные',
    },
    {
      to: 'exit',
      value: 'Выход',
    },
  ]
}

export const reducer = combineReducers({
  MainMenuWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case MAIN_MENU_WAS_REQUESTED_FROM_API:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
  MainMenuItemsCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_MAIN_MENU_FROM_API_TO_COLLECTION:
        return [...action.payload];
      case USER_WAS_LOGOUT:
        return [];
      default:
        return state;
    }
  },
  UserMenuItemsCollection: ( state = UserMenuInitialState, action ) => {
    switch ( action.type ) {
      case PUT_USER_MENU_FROM_API_TO_COLLECTION:
        return {
          ...state,
          user: [
            {
              login: action.payload
            }
          ]
        };
      case USER_WAS_LOGOUT:
        return UserMenuInitialState;
      default:
        return state;
    }
  },
  DevicesMenuWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case DEVICES_MENU_WAS_REQUESTED_FROM_API:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
  DevicesMenuItemsCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_DEVICES_MENU_FROM_API_TO_COLLECTION:
        return [...action.payload];
      case USER_WAS_LOGOUT:
        return [];        
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
      case DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH:
        return {
          ...state,
          onSmallScreen: false,
        };
      case DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH:
        return {
          ...state,
          onSmallScreen: false,
        };
      case DO_BOTH_MENU_ON_SMALL_SCREEN_OFF:
        return {
          ...state,
          onSmallScreen: false,
        };
      case USER_WAS_LOGOUT:
        return isMainMenuOpenedInitialState;
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
      case DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH:
        return {
          onBigScreen: false,
          onMiddleScreen: false,
          onSmallScreen: ( state.onSmallScreen ) ? false : true,
        };
      case DO_BOTH_MENU_ON_SMALL_SCREEN_OFF:
        return {
          onBigScreen: false,
          onMiddleScreen: false,
          onSmallScreen: ( state.onSmallScreen ) ? false : true,
        };
      case USER_WAS_LOGOUT:
        return isDevicesMenuOpenedInitialState;
      default:
        return state;
    }
  },
  isUserMenuOpened:
  ( state = isUserMenuOpenedInitialState, action ) => {
    switch ( action.type ) {
      case DO_USER_MENU_ON_BIG_SCREEN_SWITCH:
        return {
          onBigScreen: ( state.onBigScreen ) ? false : true,
        };
      case USER_WAS_LOGOUT:
        return isUserMenuOpenedInitialState;
      default:
        return state;
    }
  }
});