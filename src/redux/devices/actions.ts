import sendRequestToAPI from '@src/ajax';

import {
  DevicesTableInterface,
  // LoadParamsInterface,
  DevicesLoadInterface
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
// export const ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION =
//   'ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION';

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
    payload: DevicesLoadInterface,
  },
  // ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION: {
  //   type: typeof ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION,
  //   payload: DevicesLoadInterface,
  // },
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
  ( payload: DevicesLoadInterface ):
  Actions[typeof ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION] => ({
    type: ADD_DEVICES_IN_DEVICES_LOAD_COLLECTION, payload
  }),
  // addCurrentDeviceInDevicesCollection:
  // ( payload: DevicesLoadInterface ):
  // Actions[typeof ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION] => ({
  //   type: ADD_CURRENT_DEVICE_IN_DEVICES_COLLECTION, payload
  // }),
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
          let items: DevicesTableInterface[] = [];
          if ( response.data.table !== null ) {
            items = response.data.table;
            setTimeout(() => {
              dispatch(
                syncActionCreators
                  .putDevicesItemsFromAPIToTableCollection(items)
              )
            }, 1000);
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            );
          }
          return items;
        }
      )
      .then(
        ( items ) => {
          items.forEach((e) => {
            sendRequestToAPI.get(
              '/get_current_load_test.php?machine_id=' + e.to 
            ).then(
              ( response ) => {
                if ( response.data.state !== null ) {
                  const loadParams: DevicesLoadInterface = {
                    id: e.to,
                    params: {
                      state: response.data.state,
                      lastconn: response.data.lastconn,
                      loading: {
                        cpu: response.data.loading.cpu,
                        ram: response.data.loading.ram,
                      }
                    }
                  }
                  // console.log('LoadParams:', loadParams);
                  dispatch(
                    syncActionCreators
                      .addDevicesInDevicesLoadCollection(loadParams)
                  );
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
          });
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  },
  makeDevicesLoadItemsRequestFromAPI:
  ( payload: DevicesTableInterface[] ) => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {

        

      }, 5000);
    }
  },
};