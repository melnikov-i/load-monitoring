import { combineReducers } from 'redux';

import {} from '@src/interfaces';

import {
  MAIN_HEADER_BUTTON_SWITCH
} from '@src/redux/mainHead';

export type State = {
  MainHeaderButtonWasClicked: boolean,
};

export const reducer = combineReducers({
  MainHeaderButtonWasClicked: ( state = false, action ) => {
    switch ( action.type ) {
      case MAIN_HEADER_BUTTON_SWITCH:
        return !state;
      default:
        return state;
    }
  },
});