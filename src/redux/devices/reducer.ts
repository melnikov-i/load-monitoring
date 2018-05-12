import { combineReducers } from 'redux';

import {
  DevicesTableInterface,
  DevicesLoadInterface,
} from '@src/interfaces';

import {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION,
} from '@src/redux/devices';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DevicesTableItemsCollection: DevicesTableInterface[],
  readonly DevicesItemsWasRequestedFromAPI: boolean,
  readonly DevicesLoadCollection: DevicesLoadInterface['params'],
};

const devicesLoadInitState: DevicesLoadInterface['params'] = {
  state: '',
  lastconn: 0,
  loading: {
    cpu: '',
    ram: '',
  }
}

export const reducer = combineReducers<State>({
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
  DevicesLoadCollection: ( state = devicesLoadInitState, action ) => {
    switch ( action.type ) {
      case ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION:
        return {
          ...state, 
          [action.payload.id]: action.payload.params
        };
      case USER_WAS_LOGOUT:
        return devicesLoadInitState;
      default:
        return state;
    }
  },
});