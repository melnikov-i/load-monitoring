import { combineReducers } from 'redux';

import {
  DevicesTableInterface,
  DevicesLoadInterface,
} from '@src/interfaces';

import {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION,

  CHANGE_TEST_VALUE
} from '@src/redux/devices';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DevicesTableItemsCollection: DevicesTableInterface[],
  readonly DevicesItemsWasRequestedFromAPI: boolean,
  readonly DevicesLoadCollection: DevicesLoadInterface[],

  readonly TestValue: number,
};

export const reducer = combineReducers({
  DevicesTableItemsCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION:
        return action.payload;
      case USER_WAS_LOGOUT:
        return [];
      default:
        return state;
    }
  },
  DevicesItemsWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case DEVICES_ITEMS_WAS_REQUESTED_FROM_API:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
  DevicesLoadCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION:
        return [...action.payload];
      default:
        return state;
    }
  },

  TestValue: ( state = 0, action ) => {
    switch ( action.type ) {
      case CHANGE_TEST_VALUE:
        const newState = state++;
        return newState;
      default:
        return state;
    }
  }
});