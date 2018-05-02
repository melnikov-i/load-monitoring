import { combineReducers } from 'redux';

import {
  CircularSpinnerInterface
} from '@src/interfaces';

import {
  DO_INCREMENT_OF_BEFORE_VALUE,
  // DO_INDEX_INCREMENT,
} from '@src/redux/spinner';

const CircularSpinnerInitialState: CircularSpinnerInterface['deg'] = {
  before: 0,
  after: 0,
}

export type State = {
  readonly CircularSpinnerModel: CircularSpinnerInterface['deg'],
};

export const reducer = combineReducers({
  CircularSpinnerModel: ( state = CircularSpinnerInitialState, action ) => {
    switch ( action.type ) {
      case DO_INCREMENT_OF_BEFORE_VALUE:
        if ( action.payload >= 180 && action.payload <= 720 ) {
          if ( action.payload === 720 ) {
            if ( state.before != state.after ){
              return {
                ...state,
                after: state.after + 5,
              }
            } else {
              return {
                before: 0,
                after: 0,
              }
            }
          }
          return {
            before: action.payload + 5,
            after: state.after + 5
          }
        } else if ( action.payload < 180 ) {
          return {
            before: action.payload + 5,
            after: 0,
          }
        }
        return {
          before: 0,
          after: 0,
        }
      default:
        return state;
    }
  }
});
