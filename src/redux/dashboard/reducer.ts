import { combineReducers } from 'redux';

import {
  DashboardInterface
} from '@src/interfaces';

import {
  DASHBOARD_WAS_REQUESTED_FROM_API
} from '@src/redux/dashboard';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DashboardCollection: DashboardInterface,
  readonly DashboardWasRequestedFromAPI: boolean,
};

const DashboardCollectionInitialState: DashboardInterface = {
  dash_id: {
    id: '',
    dashboard_name: '',
  },
  dash_data: []
}

export const reducer = combineReducers({
  DashboardCollection: 
  ( state = DashboardCollectionInitialState, action ) => {
    switch ( action.type ) {
      case USER_WAS_LOGOUT:
        return DashboardCollectionInitialState;
      default:
        return state;
    }
  },
  DashboardWasRequestedFromAPI: ( state = false, action ) => {
    switch ( action.type ) {
      case DASHBOARD_WAS_REQUESTED_FROM_API:
        return true;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },
});