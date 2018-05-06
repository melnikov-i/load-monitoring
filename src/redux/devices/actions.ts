import sendRequestToAPI from '@src/ajax';

import {
  DevicesTableInterface,
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
export const ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION =
  'ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION';

export type Actions = {
  PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
    type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
    payload: DevicesTableInterface[],
  },
  DEVICES_ITEMS_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_ITEMS_WAS_REQUESTED_FROM_API,
  },
  ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION: {
    type: typeof ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION,
    payload: DevicesLoadInterface,
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
  addDeviceInDevicesLoadCollection: 
  ( payload: DevicesLoadInterface ):
  Actions[typeof ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION] => ({
    type: ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION, payload
  }),
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
            dispatch(
              syncActionCreators
                .putDevicesItemsFromAPIToTableCollection(items)
            )
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
              '/get_current_load.php?machine_id=' + e.to 
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
                  };
                  dispatch(
                    syncActionCreators
                      .addDeviceInDevicesLoadCollection(loadParams)
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
  makeDevicesLoadItemRequestFromAPI:
  ( payload: DevicesTableInterface['to'] ) => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {        
        sendRequestToAPI.get(
          '/get_current_load.php?machine_id=' + payload 
        ).then(
          ( response ) => {
            if ( response.data.state !== null ) {
              const loadParams: DevicesLoadInterface = {
                id: payload,
                params: {
                  state: response.data.state,
                  lastconn: response.data.lastconn,
                  loading: {
                    cpu: response.data.loading.cpu,
                    ram: response.data.loading.ram,
                  }
                }
              };
              // console.log('LoadParams: ', loadParams);
              dispatch(
                syncActionCreators
                  .addDeviceInDevicesLoadCollection(loadParams)
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
      }, 5000);
    }
  },
};