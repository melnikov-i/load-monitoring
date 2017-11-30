import axios from 'axios';

import {
  CommonDataInterface,
} from '@src/interfaces';
import { Dispatch } from '@src/redux';

const getDataFromAPI = (count: string) => (
  axios.get('http://dev.monyze.ru/get_live_load.php?' 
    + 'machine_id=bcb4e11625385c1ae28e039256a52b78&limit=' + count)
);

export const PUT_DATA_FROM_API_TO_MODEL =
'PUT_DATA_FROM_API_TO_MODEL';
export const DO_INDEX_INCREMENT =
'DO_INDEX_INCREMENT';



// export const PUT_DATA_FROM_API_TO_DATA_0 =
// 'PUT_DATA_FROM_API_TO_DATA_0';
// export const PUT_DATA_FROM_API_TO_DATA_1 =
// 'PUT_DATA_FROM_API_TO_DATA_1';

// export const SET_DATA_ADD_IN_LAST_FIELD =
// 'SET_DATA_ADD_IN_LAST_FIELD';


// export const CHANGE_CURRENT_DATA_COLLECTION =
// 'CHANGE_CURRENT_DATA_COLLECTION';





export type Actions = {
  PUT_DATA_FROM_API_TO_MODEL: {
    type: typeof PUT_DATA_FROM_API_TO_MODEL,
    payload: CommonDataInterface['data'],
  },
  DO_INDEX_INCREMENT: {
    type: typeof DO_INDEX_INCREMENT,
  }



  // PUT_DATA_FROM_API_TO_DATA_0: {
  //   type: typeof PUT_DATA_FROM_API_TO_DATA_0,
  //   payload: DataFromAPIModel[],
  // },
  // PUT_DATA_FROM_API_TO_DATA_1: {
  //   type: typeof PUT_DATA_FROM_API_TO_DATA_1,
  //   payload: DataFromAPIModel[],
  // },

  // SET_DATA_ADD_IN_LAST_FIELD: {
  //   type: typeof SET_DATA_ADD_IN_LAST_FIELD,
  //   payload: makeRequestToAPIProps['dataAddInLastField'],
  // },
  // CHANGE_CURRENT_DATA_COLLECTION: {
  //   type: typeof CHANGE_CURRENT_DATA_COLLECTION,
  // },
};

// Sync Action Creators
export const syncActionCreators = {
  putDataFromAPIToModel:
  ( payload: CommonDataInterface['data'] ):
  Actions[typeof PUT_DATA_FROM_API_TO_MODEL] => ({
    type: PUT_DATA_FROM_API_TO_MODEL, payload,
  }),
  doIndexIncrement:
  (): Actions[typeof DO_INDEX_INCREMENT] => ({
    type: DO_INDEX_INCREMENT,
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
  makeFirstRequestToAPI:
  ( payload: string ) => {
    return ( dispatch: Dispatch ) => {
      getDataFromAPI(payload).then(
        ( response ) => {
          dispatch(
            syncActionCreators
            .putDataFromAPIToModel(response.data.reverse())
          );          
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    };
  },
  makeNextRequestToAPI:
  ( count: string, interval: number ) => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        getDataFromAPI(count).then(
          ( response ) => {
            dispatch(
              syncActionCreators
              .putDataFromAPIToModel(response.data.reverse())
            );          
          }
        )
        .catch(
          ( error ) => {
            console.log('[ERROR]:', error);
          }
        );
      }, interval);
    }
  },
  doDeferredIndexIncrement: 
  ( payload: number ) => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        dispatch(syncActionCreators.doIndexIncrement());
      }, payload);
    }
  }
};