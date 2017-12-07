import { combineReducers } from 'redux';

import {
  
} from '@src/interfaces';

import {
  // DO_INDEX_INCREMENT,
} from '@src/redux/spinner';

export type State = {
  readonly MainMenuModel: any, // Поменять на интерфейс основного меню
  // readonly CircularSpinnerModel: CircularSpinnerInterface['deg'],
};

export const reducer = combineReducers({
  MainMenuModel: ( state = [], action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  }
  // CircularSpinnerModel: ( state = CircularSpinnerInitialState, action ) => {
  //   switch ( action.type ) {
  //     case DO_INCREMENT_OF_BEFORE_VALUE:
  //       return {
  //         ...state,
  //         before: ( action.payload >= 720 ) ? 0 : action.payload + 10
  //       }
  //     default:
  //       return state;
  //   }
  // }
});
