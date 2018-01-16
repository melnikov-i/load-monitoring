import { combineReducers } from 'redux';

import {
  DevicesTableInterface,
  LoadParamsInterface,
} from '@src/interfaces';

import {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION,
  // ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION,
} from '@src/redux/devices';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DevicesTableItemsCollection: DevicesTableInterface[],
  readonly DevicesItemsWasRequestedFromAPI: boolean,
  readonly DevicesLoadCollection: LoadParamsInterface,
  // readonly DevicesLoadItemsWasRequestedFromAPI: boolean,
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
  // DevicesLoadItemsWasRequestedFromAPI: ( state = false, action ) => {
  //   switch ( action.type ) {
  //     default:
  //       return state;
  //   }
  // },
  DevicesLoadCollection: ( state = {}, action ) => {
    switch ( action.type ) {
      case ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION:
        return {
          ...state, 
          [action.payload.id]: action.payload.params
        };
      // case ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION:
        // return state[action.payload];
      default:
        return state;
    }
  },
});