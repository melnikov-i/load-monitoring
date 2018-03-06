import { combineReducers } from 'redux';

import {
  DashboardInterface,
  MoveWidgetsInterface
} from '@src/interfaces';

import {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
  CHANGE_SELECTED_CHECKBOX,
  REORDER_DASHBOARD_COLLECTION,
} from '@src/redux/dashboard';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DashboardCollection: DashboardInterface,
  readonly DashboardWasRequestedFromAPI: 
    DashboardInterface['dash_id']['dashboard_id'],
  readonly SelectedCheckbox: string,
};

const DashboardCollectionInitialState: DashboardInterface = {
  dash_id: {
    dashboard_id: '',
    dashboard_name: '',
    dash_columns: '',
  },
  dash_data: []
};

const reorder = ( dash_data: DashboardInterface['dash_data'],
items: MoveWidgetsInterface ) => {
  console.log('source:', dash_data[items.source]);
  console.log('target:', dash_data[items.target]);
  
  const result = dash_data.map((e, i) => {
    switch ( i ) {
      case items.source: return dash_data[items.target];
      case items.target: return dash_data[items.source];
      default: return dash_data[i];
    }
  });

  // const result = Array.from(dash_data);
  // const [removed] = result.splice(items.source, 1);
  // result.splice(items.target, 0, removed);

  return result;
};

export const reducer = combineReducers({
  DashboardCollection: 
  ( state = DashboardCollectionInitialState, action ) => {
    switch ( action.type ) {
      case PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION:
        return action.payload;
      case REORDER_DASHBOARD_COLLECTION:
        // console.log('items:', action.payload);
        // console.log('beforeState:', state);
        // console.log('afterState:', reorder(state.dash_data, action.payload));
        return {
          ...state,
          ['dash_data']: reorder(state.dash_data, action.payload),
        };
      case USER_WAS_LOGOUT:
        return DashboardCollectionInitialState;
      default:
        return state;
    }
  },
  DashboardWasRequestedFromAPI: ( state = '', action ) => {
    switch ( action.type ) {
      case THIS_DASHBOARD_WAS_REQUESTED_FROM_API:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
  SelectedCheckbox: ( state = '0', action ) => {
    switch ( action.type ) {
      case CHANGE_SELECTED_CHECKBOX:
        return action.payload;
      default:
        return state;
    }
  }
});