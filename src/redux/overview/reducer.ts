import { combineReducers } from 'redux';

import {
  OverviewInterface,
} from '@src/interfaces';

import {
  OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API,
  PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION
} from '@src/redux/overview';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly OverviewItemsWasRequestedFromAPI: boolean,
  readonly OverviewItemsCollection: OverviewInterface,
};

const OverviewItemsInitialState: OverviewInterface = {
  counts: {
    normal: '',
    warning: '',
    offline: '',
  },
  events_table: []
}

export const reducer = combineReducers<State>({
  OverviewItemsWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case OVERVIEW_ITEMS_WAS_REQUESTED_FROM_API:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
  OverviewItemsCollection: ( state = OverviewItemsInitialState, action ) => {
    switch ( action.type ) {
      case PUT_OVERVIEW_ITEMS_FROM_API_TO_COLLECTION:
        return action.payload;
      case USER_WAS_LOGOUT:
        return OverviewItemsInitialState;
      default:
        return state;
    }
  }
});