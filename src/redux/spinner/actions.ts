// import axios from 'axios';

import {
  CircularSpinnerInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

export const DO_INCREMENT_OF_BEFORE_VALUE =
'DO_INCREMENT_OF_BEFORE_VALUE';

// export const PUT_DATA_FROM_API_TO_MODEL =
// 'PUT_DATA_FROM_API_TO_MODEL';
// export const DO_INDEX_INCREMENT =
// 'DO_INDEX_INCREMENT';




export type Actions = {
  DO_INCREMENT_OF_BEFORE_VALUE: {
    type: typeof DO_INCREMENT_OF_BEFORE_VALUE,
    payload: CircularSpinnerInterface['deg']['before'],
  },
};

// Sync Action Creators
export const syncActionCreators = {
  doIncrementOfBeforeValue:
  ( payload: CircularSpinnerInterface['deg']['before'] ):
  Actions[typeof DO_INCREMENT_OF_BEFORE_VALUE] => ({
    type: DO_INCREMENT_OF_BEFORE_VALUE, payload
  }),

  // putDataFromAPIToData0:
  // ( payload: DataFromAPIModel[] ):
  // Actions[typeof PUT_DATA_FROM_API_TO_DATA_0] => ({
  //   type: PUT_DATA_FROM_API_TO_DATA_0, payload,
  // }),
  // putDataFromAPIToData1:
  // ( payload: DataFromAPIModel[] ):
  // Actions[typeof PUT_DATA_FROM_API_TO_DATA_1] => ({
  //   type: PUT_DATA_FROM_API_TO_DATA_1, payload,
  // }),

  // setDataAddInLastField:
  // ( payload: makeRequestToAPIProps['dataAddInLastField'] ):
  // Actions[typeof SET_DATA_ADD_IN_LAST_FIELD] => ({
  //   type: SET_DATA_ADD_IN_LAST_FIELD, payload,
  // }),


  // changeCurrentDataCollection:
  // (): Actions[typeof CHANGE_CURRENT_DATA_COLLECTION] => ({
  //   type: CHANGE_CURRENT_DATA_COLLECTION,
  // }),
};

// Async Action Creators
export const asyncActionCreators = {
  doDeferredIncrementOfBeforeValue:
  ( payload: CircularSpinnerInterface['deg']['before'] ) => {
    const getTimeout: (payload: number) => number = (payload) => {
      // let timeout: number = 10;
      if ( payload === 0 ) return 500;
      else if ( payload > 0 && payload <= 180 ) return 20;
      else if ( payload > 180 && payload <= 270 ) return 15;
      else if ( payload > 270 && payload <= 540 ) return 5;
      else if ( payload > 540 && payload <= 630 ) return 10;
      else return 15;
    }
    const timeout = getTimeout(payload);
    
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        dispatch(syncActionCreators.doIncrementOfBeforeValue(payload));
      }, timeout);
    }
  },
  // makeFirstRequestToAPI:
  // ( payload: string ) => {
  //   return ( dispatch: Dispatch ) => {
  //     getDataFromAPI(payload).then(
  //       ( response ) => {
  //         dispatch(
  //           syncActionCreators
  //           .putDataFromAPIToModel(response.data.reverse())
  //         );          
  //       }
  //     )
  //     .catch(
  //       ( error ) => {
  //         console.log('[ERROR]:', error);
  //       }
  //     );
  //   };
  // },
  // makeNextRequestToAPI:
  // ( count: string, interval: number ) => {
  //   return ( dispatch: Dispatch ) => {
  //     setTimeout(() => {
  //       getDataFromAPI(count).then(
  //         ( response ) => {
  //           dispatch(
  //             syncActionCreators
  //             .putDataFromAPIToModel(response.data.reverse())
  //           );          
  //         }
  //       )
  //       .catch(
  //         ( error ) => {
  //           console.log('[ERROR]:', error);
  //         }
  //       );
  //     }, interval);
  //   }
  // },
  // doDeferredIndexIncrement: 
  // ( payload: number ) => {
  //   return ( dispatch: Dispatch ) => {
  //     setTimeout(() => {
  //       dispatch(syncActionCreators.doIndexIncrement());
  //     }, payload);
  //   }
  // }
};