import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  // IsOpenedInterface,
  UserMenuInterface,
  DroppedMenuButtonClickedType
} from '@src/interfaces';

import {
  MAIN_MENU_WAS_REQUESTED_FROM_API,
  PUT_MAIN_MENU_FROM_API_TO_COLLECTION,
  PUT_USER_MENU_FROM_API_TO_COLLECTION,
  DEVICES_MENU_WAS_REQUESTED_FROM_API,
  PUT_DEVICES_MENU_FROM_API_TO_COLLECTION,
  CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID,
  CHANGE_USER_AGENT,
  SWITCH_MENU_ON_SMALL_SCREENS,
  SWITCH_PAGE_MENU_ITEM_ACTIVE,
  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE
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
  readonly DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  readonly isFirefoxInUse: boolean,
  readonly isMenuOpenedOnSmallScreen: boolean,
  /* Идентификатор активного простого пункта основного меню */
  readonly PageMenuItemActive: string,
  /* Идентификатор активного простого пункта основного меню */
  readonly PageMenuItemMultiActive: string,
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
  DroppedMenuButtonClickedId: ( state = '', action ) => {
    switch ( action.type ) {
      case CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID:
        return action.payload;
      default:
        return state;
    }
  },
  
  isFirefoxInUse: ( state = false, action ) => {
    switch ( action.type ) {
      case CHANGE_USER_AGENT:
        return true;
      default:
        return state;
    }
  },

  isMenuOpenedOnSmallScreen: ( state = false, action ) => {
    switch ( action.type ) {
      case SWITCH_MENU_ON_SMALL_SCREENS:
        return !state;
      default:
        return state;
    }
  },
  
  /* Идентификатор активного простого пункта основного меню */
  PageMenuItemActive: ( state = '', action ) => {
    switch ( action.type ) {
      case SWITCH_PAGE_MENU_ITEM_ACTIVE:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },

  /* Идентификатор активного составного пункта основного меню */
  PageMenuItemMultiActive: ( state = '', action ) => {
    switch ( action.type ) {
      case SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
});