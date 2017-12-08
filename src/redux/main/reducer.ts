import { combineReducers } from 'redux';

import {
  
} from '@src/interfaces';

import {
  COMPOSITE_FIELD_CHANGE_STATE
} from '@src/redux/main';

export type State = {
  readonly MainMenuModel: any, // Поменять на интерфейс основного меню
  readonly CompositeFieldSwitch: boolean,
};

export const reducer = combineReducers({
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  CompositeFieldSwitch: ( state = false, action ) => {
    switch ( action.type ) {
      case COMPOSITE_FIELD_CHANGE_STATE:
        return action.payload;
      default:
        return state;
    }
  }
});

/*
  state: {
    CompositeFieldActiveKey: boolean
  }



*/
