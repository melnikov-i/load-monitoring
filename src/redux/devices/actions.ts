import sendRequestToAPI from '@src/ajax';

import {
  DevicesTableInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

export const PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION =
  'PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION';
export const DEVICES_ITEMS_WAS_REQUESTED_FROM_API =
  'DEVICES_ITEMS_WAS_REQUESTED_FROM_API';

export type Actions = {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
    type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
    payload: DevicesTableInterface[],
  },
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  },
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
};

// Async Action Creators
export const asyncActionCreators = {
  makeDevicesItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesItemsWasRequestedFromAPI()
      );
      sendRequestToAPI.get('/list_data.php').then(
        ( response ) => {
          if ( response.data.table !== null ) {
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