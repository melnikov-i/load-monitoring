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

// export const PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION =
//   'PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION';
// export const ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION =
//   'ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION';

export type Actions = {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API: {
    type: typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
    payload: DashboardInterface['dash_id']['id'],
  },
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION: {
    type: typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
    payload: DashboardInterface,
  }
  
  // PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION: {
  //   type: typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION,
  //   payload: DevicesTableInterface[],
  // },
  // ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION: {
  //   type: typeof ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION,
  //   payload: DevicesLoadInterface,
  // },
};

// Sync Action Creators
export const syncActionCreators = {
  dashboardWasRequestedFromAPI: 
  ( payload: DashboardInterface['dash_id']['id'] ):
  Actions[typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API] => ({
    type: THIS_DASHBOARD_WAS_REQUESTED_FROM_API, payload
  }),
  putDashboardItemsFromAPIToDashboardCollection:
  ( payload: DashboardInterface ):
  Actions[typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION] => ({
    type: PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION, payload,
  }),

  // putDevicesItemsFromAPIToTableCollection:
  // ( payload: DevicesTableInterface[] ):
  // Actions[typeof PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION] => ({
  //   type: PUT_DEVICES_ITEMS_FROM_API_TO_TABLE_COLLECTION, payload,
  // }),
  // addDeviceInDevicesLoadCollection: 
  // ( payload: DevicesLoadInterface ):
  // Actions[typeof ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION] => ({
  //   type: ADD_DEVICE_IN_DEVICES_LOAD_COLLECTION, payload
  // }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeDashboardRequestFromAPI: 
  ( payload: DashboardInterface['dash_id']['id'] ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.dashboardWasRequestedFromAPI(payload)
      );
      sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
        ( response ) => {
          console.log('response:', response.data);
          if ( response.data.dashboard !== null ) {
            const items: DashboardInterface = response.data.dashboard;
            setTimeout(() => {
              dispatch(
                syncActionCreators
                  .putDashboardItemsFromAPIToDashboardCollection(items)
              );
            }, 1000);
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
  makeTestRequestToChange:
  ( payload: DashboardInterface ) => {
    return ( dispatch: Dispatch ) => {
      sendRequestToAPI.post('dash_data2.php')
    }
  }

  
  // makeDevicesItemsRequestFromAPI: () => {
  //   return ( dispatch: Dispatch ) => {
  //     dispatch(
  //       syncActionCreators.devicesItemsWasRequestedFromAPI()
  //     );
  //     sendRequestToAPI.post('/list_data.php').then(
  //       ( response ) => {
  //         let items: DevicesTableInterface[] = [];
  //         if ( response.data.table !== null ) {
  //           items = response.data.table;
  //           setTimeout(() => {
  //             dispatch(
  //               syncActionCreators
  //                 .putDevicesItemsFromAPIToTableCollection(items)
  //             )
  //           }, 1000);
  //         } else {
  //           dispatch(
  //             loginActionCreators.userWasLogOut()
  //           );
  //         }
  //         return items;
  //       }
  //     )
  //     .then(
  //       ( items ) => {
  //         items.forEach((e) => {
  //           sendRequestToAPI.get(
  //             '/get_current_load_test.php?machine_id=' + e.to 
  //           ).then(
  //             ( response ) => {
  //               if ( response.data.state !== null ) {
  //                 const loadParams: DevicesLoadInterface = {
  //                   id: e.to,
  //                   params: {
  //                     state: response.data.state,
  //                     lastconn: response.data.lastconn,
  //                     loading: {
  //                       cpu: response.data.loading.cpu,
  //                       ram: response.data.loading.ram,
  //                     }
  //                   }
  //                 }
  //                 dispatch(
  //                   syncActionCreators
  //                     .addDeviceInDevicesLoadCollection(loadParams)
  //                 );
  //               } else {
  //                 dispatch(
  //                   loginActionCreators.userWasLogOut()
  //                 );
  //               }
  //             }
  //           )
  //           .catch(
  //             ( error ) => {
  //               console.log('[ERROR]:', error);
  //             }
  //           );
  //         });
  //       }
  //     )
  //     .catch(
  //       ( error ) => {
  //         console.log('[ERROR]:', error);
  //       }
  //     );
  //   }
  // },
  // makeDevicesLoadItemRequestFromAPI:
  // ( payload: DevicesTableInterface['to'] ) => {
  //   return ( dispatch: Dispatch ) => {
  //     setTimeout(() => {        
  //       sendRequestToAPI.get(
  //         '/get_current_load_test.php?machine_id=' + payload 
  //       ).then(
  //         ( response ) => {
  //           if ( response.data.state !== null ) {
  //             const loadParams: DevicesLoadInterface = {
  //               id: payload,
  //               params: {
  //                 state: response.data.state,
  //                 lastconn: response.data.lastconn,
  //                 loading: {
  //                   cpu: response.data.loading.cpu,
  //                   ram: response.data.loading.ram,
  //                 }
  //               }
  //             }
  //             dispatch(
  //               syncActionCreators
  //                 .addDeviceInDevicesLoadCollection(loadParams)
  //             );
  //           } else {
  //             dispatch(
  //               loginActionCreators.userWasLogOut()
  //             );
  //           }
  //         }
  //       )
  //       .catch(
  //         ( error ) => {
  //           console.log('[ERROR]:', error);
  //         }
  //       );
  //     }, 5000);
  //   }
  // },
};