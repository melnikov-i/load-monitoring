import sendRequestToAPI from '@src/ajax';

import {
  DashboardInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

import {
  // syncActionCreators as loginActionCreators
} from '@src/redux/login';

export const THIS_DASHBOARD_WAS_REQUESTED_FROM_API =
  'THIS_DASHBOARD_WAS_REQUESTED_FROM_API';
export const PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION =
  'PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION';
export const REORDER_DASHBOARD_COLLECTION =
  'REORDER_DASHBOARD_COLLECTION';
export const CHANGE_SELECTED_CHECKBOX = 
  'CHANGE_SELECTED_CHECKBOX';

export type Actions = {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API: {
    type: typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
    payload: DashboardInterface['dash_id']['dashboard_id'],
  },
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION: {
    type: typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
    payload: DashboardInterface,
  },
  REORDER_DASHBOARD_COLLECTION: {
    type: typeof REORDER_DASHBOARD_COLLECTION,
    payload: DashboardInterface['dash_data'],
  },
  CHANGE_SELECTED_CHECKBOX: {
    type: typeof CHANGE_SELECTED_CHECKBOX,
    payload: string, // поменять на другое
  }
};

// Sync Action Creators
export const syncActionCreators = {
  dashboardWasRequestedFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ):
  Actions[typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API] => ({
    type: THIS_DASHBOARD_WAS_REQUESTED_FROM_API, payload
  }),
  putDashboardItemsFromAPIToDashboardCollection:
  ( payload: DashboardInterface ):
  Actions[typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION] => ({
    type: PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION, payload,
  }),
  reorderDashboardCollection:
  ( payload: DashboardInterface['dash_data'] ):
  Actions[typeof REORDER_DASHBOARD_COLLECTION] => ({
    type: REORDER_DASHBOARD_COLLECTION, payload,
  }),
  changeSelectedCheckbox: (payload: string):
  Actions[typeof CHANGE_SELECTED_CHECKBOX] => ({
    type: CHANGE_SELECTED_CHECKBOX, payload,
  })
};

// Async Action Creators
export const asyncActionCreators = {
  makeDashboardRequestFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.dashboardWasRequestedFromAPI(payload)
      );
      sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
        ( response ) => {
          if ( response.data.dashboard !== null ) {
            const items: DashboardInterface = response.data.dashboard;
            dispatch(
              syncActionCreators
                .putDashboardItemsFromAPIToDashboardCollection(items)
            );            
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            )
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  },
};