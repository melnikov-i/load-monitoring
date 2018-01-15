import sendRequestToAPI from '@src/ajax';

import {
  DevicesTableInterface,
  DevicesLoadInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

export const PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION =
  'PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION';
export const DEVICES_ITEMS_WAS_REQUESTED_FROM_API =
  'DEVICES_ITEMS_WAS_REQUESTED_FROM_API';
export const ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION =
  'ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION';

export const CHANGE_TEST_VALUE = 'CHANGE_TEST_VALUE';

export type Actions = {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
    type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
    payload: DevicesTableInterface[],
  },
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  },
  ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION: {
    type: typeof ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION,
    payload: DevicesLoadInterface[],
  },

  CHANGE_TEST_VALUE: {
    type: typeof CHANGE_TEST_VALUE,
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
  addDevicesInDevicesLoadCollection: 
  ( payload: DevicesLoadInterface[] ):
  Actions[typeof ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION] => ({
    type: ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION, payload
  }),

  changeTestValue: ():
  Actions[typeof CHANGE_TEST_VALUE] => ({
    type: CHANGE_TEST_VALUE,
  })
};

// Async Action Creators
export const asyncActionCreators = {
  makeDevicesItemsRequestFromAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesItemsWasRequestedFromAPI()
      );
      sendRequestToAPI.post('/list_data.php').then(
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


  makeTest: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.changeTestValue()
      );
    }
  }
  // makeLoadingAndStatusRequestFromAPI: 
  // ( payload: DLoadAndStateInterfaces[] ) => {
  //   return ( dispatch: Dispatch ) => {
  //     payload.map((e, i) => {
  //       console.log('Load And Status', e);

  //     })
  //   }
  // }
};