import { combineReducers } from 'redux';

import {
  CHANGE_VALUE,
} from '../model';

export type State = {
  readonly value: string,
};

export const reducer = combineReducers<State>({
  value: (state = '', action) => {
    switch (action.type) {
      case CHANGE_VALUE:
        return action.payload;
      default:
        return state;
    }
  }
});