import { combineReducers } from 'redux';

import {
  USER_IS_AUTHORIZED,
} from '@src/redux/app';

export type State = {
  readonly isAuthorized: boolean,
};

export const reducer = combineReducers({
  isAuthorized: ( state = false, action ) => {
    switch ( action.type ) {
      case USER_IS_AUTHORIZED:
        return true;
      default:
        return state;
    }
  }
});