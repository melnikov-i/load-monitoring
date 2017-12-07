import axios from 'axios';

import {
  
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

const getMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

export const PUT_MENU_FROM_API_TO_MODEL =
'PUT_MENU_FROM_API_TO_MODEL';

// export const PUT_DATA_FROM_API_TO_MODEL =
// 'PUT_DATA_FROM_API_TO_MODEL';
// export const DO_INDEX_INCREMENT =
// 'DO_INDEX_INCREMENT';




export type Actions = {
  PUT_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_MENU_FROM_API_TO_MODEL,
    payload: any, // Потом заменить на интерфейс меню
  }

  // DO_INCREMENT_OF_BEFORE_VALUE: {
  //   type: typeof DO_INCREMENT_OF_BEFORE_VALUE,
  //   payload: CircularSpinnerInterface['deg']['before'],
  // },
};

// Sync Action Creators
export const syncActionCreators = {
  putMenuFromAPIToModel:
  ( payload: any ):
  Actions[typeof PUT_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_MENU_FROM_API_TO_MODEL, payload
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
  makeMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      getMenuFromAPI().then(
        ( response ) => {
          console.log('[RESPONSE]:', response);
          console.log('[DATA]:', response.data);
          console.log('[DATA.user]:', response.data.user);
        }
        // dispatch(
        //   syncActionCreators
        // );
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  }

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