import axios from 'axios';

import {
  DevicesTableInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

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
};

// Async Action Creators

const getDevicesFromAPI = () => (
  axios.get('http://dev.monyze.ru/list_data.php')
);

export const asyncActionCreators = {
  makeDevicesItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesItemsWasRequestedFromAPI()
      );
      getDevicesFromAPI().then(
        ( response ) => {
          const items: DevicesTableInterface[] = response.data.table;
          setTimeout(() => {
            dispatch(
              syncActionCreators.putDevicesItemsFromAPIToTableCollection(items)
            )
          }, 1000);
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