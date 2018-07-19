import { combineReducers } from 'redux';

import {
  CHANGE_RECOVERY_VIEW
} from './';

export type State = {
  readonly recoveryView: string,
};

export const reducer = combineReducers<State>({
  recoveryView: (state = 'form', action) => {
    switch (action.type) {
      case CHANGE_RECOVERY_VIEW: return action.payload;
      default: return state;
    }
  }
})