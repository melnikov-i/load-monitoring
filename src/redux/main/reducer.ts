import { combineReducers } from 'redux';

import {
  MainMenuLinkSpanInterface
} from '@src/interfaces';

import {
  DO_COMPOSITE_SWITCH
} from '@src/redux/main';

export type State = {
  readonly MainMenuModel: any, // Поменять на интерфейс основного меню
  readonly isCompositeActive: MainMenuLinkSpanInterface['isCompositeActive'],
};

export const reducer = combineReducers({
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
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

/*
  state: {
  mainMenu: [
    {
      to: string,
      icon: string,
      value: string,
      childrens: []
    }
  ],
  isCompositeActive: {
    boolean}




*/
