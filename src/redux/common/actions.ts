import axios from 'axios';

import {
  CommonDataInterface,
                    // DataFromAPIModel,
                    // makeRequestToAPIProps,
} from '@src/interfaces';
import { Dispatch } from '@src/redux';

const getDataFromAPI = () => (
  axios.get('http://dev.monyze.ru/get_live_load.php?' 
    + 'machine_id=bcb4e11625385c1ae28e039256a52b78&limit=50')
);

// interface putDataFromApiToModelPayload {
//   data: CommonDataInterface['data'],
//   dataAddInLastField: CommonDataInterface['dataAddInLastField'],
// }

export const PUT_DATA_FROM_API_TO_MODEL =
'PUT_DATA_FROM_API_TO_MODEL';



// export const PUT_DATA_FROM_API_TO_DATA_0 =
// 'PUT_DATA_FROM_API_TO_DATA_0';
// export const PUT_DATA_FROM_API_TO_DATA_1 =
// 'PUT_DATA_FROM_API_TO_DATA_1';

// export const SET_DATA_ADD_IN_LAST_FIELD =
// 'SET_DATA_ADD_IN_LAST_FIELD';


// export const CHANGE_CURRENT_DATA_COLLECTION =
// 'CHANGE_CURRENT_DATA_COLLECTION';
// export const DO_INDEX_INCREMENT =
// 'DO_INDEX_INCREMENT';





export type Actions = {
  PUT_DATA_FROM_API_TO_MODEL: {
    type: typeof PUT_DATA_FROM_API_TO_MODEL,
    payload: CommonDataInterface['data'],
  },



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
  // DO_INDEX_INCREMENT: {
  //   type: typeof DO_INDEX_INCREMENT,
  // }
};

// Sync Action Creators
export const syncActionCreators = {
  putDataFromAPIToModel:
  ( payload: CommonDataInterface['data'] ):
  Actions[typeof PUT_DATA_FROM_API_TO_MODEL] => ({
    type: PUT_DATA_FROM_API_TO_MODEL, payload,
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
  // doIndexIncrement:
  // (): Actions[typeof DO_INDEX_INCREMENT] => ({
  //   type: DO_INDEX_INCREMENT,
  // }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      getDataFromAPI().then(
        ( response ) => {
          /* Получили данные от API сервера */
          // const dataFromAPI: CommonDataInterface['data'] = 
          //   response.data.reverse();
          /* Отправляем данные в store */
          // const toStore:putDataFromApiToModelPayload = {
          //   data: preData,
          //   dataAddInLastField: Number(
          //     preData[preData.length - 1].data_add
          //   ),
          // };
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
  // doDeferredIndexIncrement: () => {
  //   return ( dispatch: Dispatch ) => {
  //     setTimeout(() => {
  //       dispatch(syncActionCreators.doIndexIncrement());
  //     }, 5100);
  //   }
  // }
};