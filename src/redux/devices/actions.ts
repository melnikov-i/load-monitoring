// import sendRequestToAPI from '@src/ajax';
import axios from 'axios';

import {
  DevicesTableInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION =
  'PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION';
export const DEVICES_ITEMS_WAS_REQUESTED_FROM_API =
  'DEVICES_ITEMS_WAS_REQUESTED_FROM_API';
export const DEVICES_ACTION_BUTTON_SWITCH = 
  'DEVICES_ACTION_BUTTON_SWITCH';

export type Actions = {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
    type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
    payload: DevicesTableInterface[],
  },
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  },
  DEVICES_ACTION_BUTTON_SWITCH: {
    type: typeof DEVICES_ACTION_BUTTON_SWITCH,
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
  devicesActionButtonSwitch: ():
  Actions[typeof DEVICES_ACTION_BUTTON_SWITCH] => ({
    type: DEVICES_ACTION_BUTTON_SWITCH,
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
      // sendRequestToAPI.get('/list_data.php').then(
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