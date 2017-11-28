import axios from 'axios';

import {
  DataFromAPIModel,
  makeRequestToAPIProps,
} from '@src/models';
import { Dispatch } from '@src/redux';

const getDataFromAPI = () => (
  axios.get('http://dev.monyze.ru/get_live_load.php?' 
    + 'machine_id=bcb4e11625385c1ae28e039256a52b78&limit=50')
);

export const PUT_DATA_FROM_API_TO_DATA_0 =
'PUT_DATA_FROM_API_TO_DATA_0';
export const PUT_DATA_FROM_API_TO_DATA_1 =
'PUT_DATA_FROM_API_TO_DATA_1';
export const SET_DATA_ADD_IN_LAST_FIELD =
'SET_DATA_ADD_IN_LAST_FIELD';
export const CHANGE_CURRENT_DATA_COLLECTION =
'CHANGE_CURRENT_DATA_COLLECTION';
export const DO_INDEX_INCREMENT =
'DO_INDEX_INCREMENT';

export type Actions = {
  PUT_DATA_FROM_API_TO_DATA_0: {
    type: typeof PUT_DATA_FROM_API_TO_DATA_0,
    payload: DataFromAPIModel[],
  },
  PUT_DATA_FROM_API_TO_DATA_1: {
    type: typeof PUT_DATA_FROM_API_TO_DATA_1,
    payload: DataFromAPIModel[],
  },
  SET_DATA_ADD_IN_LAST_FIELD: {
    type: typeof SET_DATA_ADD_IN_LAST_FIELD,
    payload: makeRequestToAPIProps['dataAddInLastField'],
  },
  CHANGE_CURRENT_DATA_COLLECTION: {
    type: typeof CHANGE_CURRENT_DATA_COLLECTION,
  },
  DO_INDEX_INCREMENT: {
    type: typeof DO_INDEX_INCREMENT,
  }
};

// Sync Action Creators
export const syncActionCreators = {
  putDataFromAPIToData0:
  ( payload: DataFromAPIModel[] ):
  Actions[typeof PUT_DATA_FROM_API_TO_DATA_0] => ({
    type: PUT_DATA_FROM_API_TO_DATA_0, payload,
  }),
  putDataFromAPIToData1:
  ( payload: DataFromAPIModel[] ):
  Actions[typeof PUT_DATA_FROM_API_TO_DATA_1] => ({
    type: PUT_DATA_FROM_API_TO_DATA_1, payload,
  }),
  setDataAddInLastField:
  ( payload: makeRequestToAPIProps['dataAddInLastField'] ):
  Actions[typeof SET_DATA_ADD_IN_LAST_FIELD] => ({
    type: SET_DATA_ADD_IN_LAST_FIELD, payload,
  }),
  changeCurrentDataCollection:
  (): Actions[typeof CHANGE_CURRENT_DATA_COLLECTION] => ({
    type: CHANGE_CURRENT_DATA_COLLECTION,
  }),
  doIndexIncrement:
  (): Actions[typeof DO_INDEX_INCREMENT] => ({
    type: DO_INDEX_INCREMENT,
  }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeRequestToAPI: ( payload: makeRequestToAPIProps ) => {
    return ( dispatch: Dispatch ) => {
      getDataFromAPI().then(
        ( response ) => {
          /* Получили данные от API сервера */
          const preData = response.data.reverse();

          /* Проверка на первичный запуск */
          if ( payload.dataAddInLastField === 0 ) {
            /* Отправляем данные в store */
            dispatch(
              syncActionCreators
              .putDataFromAPIToData0(preData)
            );

            /* Отправляем в store величину времени последнего поля */
            dispatch(
              syncActionCreators
              .setDataAddInLastField(
                Number(preData[preData.length - 1].data_add)
              )
            );
          } else {
            /* Запуск повторный, отсеиваем повторяющиеся поля */
            let data: DataFromAPIModel[] = [];
            for ( let i in preData ) {
              const dataAdd: number = Number(preData[i].data_add);
              if ( dataAdd > payload.dataAddInLastField ) {
                data = [...data, preData[i]];
              }
            }
            
            /* Полученный массив отдаем в store */
            if ( payload.currentDataCollection === "data0" ) {
              dispatch(
                syncActionCreators
                .putDataFromAPIToData1(data)
              );
            } else {
              dispatch(
                syncActionCreators
                .putDataFromAPIToData0(data)
              );
            }

            /* Отправляем в store величину времени последнего поля */
            dispatch(
              syncActionCreators
              .setDataAddInLastField(
                Number(data[data.length - 1].data_add)
              )
            );
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    };
  },
  doDeferredIndexIncrement: () => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        dispatch(syncActionCreators.doIndexIncrement());
      }, 5100);
    }
  }
};