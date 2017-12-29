import sendRequestToAPI from '@src/ajax';
// import axios from 'axios';

import {
  DevicesTableInterface,
  DevicesButtonClickedIdType,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

export const PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION =
  'PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION';
export const DEVICES_ITEMS_WAS_REQUESTED_FROM_API =
  'DEVICES_ITEMS_WAS_REQUESTED_FROM_API';
export const CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID =
  'CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID';
export const DEVICES_ACTION_BUTTON_RESET = 
  'DEVICES_ACTION_BUTTON_RESET';

export type Actions = {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
    type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
    payload: DevicesTableInterface[],
  },
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  },
  CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID: {
    type: typeof CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID,
    payload: DevicesButtonClickedIdType,
  },
  DEVICES_ACTION_BUTTON_RESET: {
    type: typeof DEVICES_ACTION_BUTTON_RESET,
  }
}

// Sync Action Creators
export const syncActionCreators = {
  putDevicesItemsFromAPIToTableCollection:
  ( payload: DevicesTableInterface[] ):
  Actions[typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION] => ({
    type: PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION, payload,
  }),
  devicesItemsWasRequestedFromAPI: ():
  Actions[typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API] => ({
    type: DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  }),
  changeDevicesActionButtonClickedId: 
  ( payload: DevicesButtonClickedIdType ):
  Actions[typeof CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID] => ({
    type: CHANGE_DEVICES_ACTION_BUTTON_CLICKED_ID, payload,
  }),
  devicesActionButtonReset: ():
  Actions[typeof DEVICES_ACTION_BUTTON_RESET] => ({
    type: DEVICES_ACTION_BUTTON_RESET,
  }),
};

// Async Action Creators

// const getDevicesFromAPI = () => (
//   axios.get('http://dev.monyze.ru/list_data.php')
// );

export const asyncActionCreators = {
  makeDevicesItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesItemsWasRequestedFromAPI()
      );
      // getDevicesFromAPI().then(
      sendRequestToAPI.get('/list_data.php').then(
        ( response ) => {
          if ( response.data === 'true' ) {
            const items: DevicesTableInterface[] = response.data.table;
            setTimeout(() => {
              dispatch(
                syncActionCreators.putDevicesItemsFromAPIToTableCollection(items)
              )
            }, 1000);            
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            );
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