import { combineReducers } from 'redux';

import {
  MainMenuLinksInterface,
  MainMenuLinkSpanInterface
} from '@src/interfaces';

import {
  PUT_MENU_FROM_API_TO_MODEL,
  DO_COMPOSITE_SWITCH,
} from '@src/redux/main';

export type State = {
  readonly MainMenuModel: MainMenuLinksInterface[],
  readonly isCompositeActive: 
  MainMenuLinkSpanInterface['isCompositeActive'],
};

export const reducer = combineReducers({
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_MENU_FROM_API_TO_MODEL:
        return [...action.payload];
      default:
        return state;
    }
  },
  isCompositeActive: ( state = false, action ) => {
    switch ( action.type ) {
      case DO_COMPOSITE_SWITCH:
        console.log('[REDUCER]', action.payload);
        switch ( action.payload ) {
          case '/devices': return true;
          default: return false;
        }
      default:
        return state;
    }
  }
});