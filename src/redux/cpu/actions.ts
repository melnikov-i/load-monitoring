import axios from 'axios';

import { DataFromServerModel } from '@src/models';
import { Dispatch } from '@src/redux';

const getDataFromServer = () => 
  axios.get('http://dev.monyze.ru/get_live_load.php?' 
    + 'machine_id=bcb4e11625385c1ae28e039256a52b78&limit=50');

export const CPU_COMMON_LOAD_COLLECTION = 
'CPU_COMMON_LOAD_COLLECTION';
export const CPU_COMMON_LOAD_NEXT_ITEM =
'CPU_COMMON_LOAD_NEXT_ITEM';
export const COMMON_COLLECTION_FROM_SERVER = 
'COMMON_COLLECTION_FROM_SERVER';


export type Actions = {
  CPU_COMMON_LOAD_COLLECTION: {
    type: typeof CPU_COMMON_LOAD_COLLECTION,
    payload: DataFromServerModel[],
  },
  CPU_COMMON_LOAD_NEXT_ITEM: {
    type: typeof CPU_COMMON_LOAD_NEXT_ITEM,
    payload: number
  },
  COMMON_COLLECTION_FROM_SERVER: {
    type: typeof COMMON_COLLECTION_FROM_SERVER,
    payload: DataFromServerModel[],
  }
};

// Action Creators
export const actionCreators = {
  getCPUCommonLoadCollection:
  ( payload: DataFromServerModel[] ):
  Actions[typeof CPU_COMMON_LOAD_COLLECTION] => ({
    type: CPU_COMMON_LOAD_COLLECTION, payload,
  }),
  getCPUCommonLoadNextItem:
  ( payload: number ): Actions[typeof CPU_COMMON_LOAD_NEXT_ITEM] => ({
    type: CPU_COMMON_LOAD_NEXT_ITEM, payload
  }),
  getCommonCollectionFromServer:
  ( payload: DataFromServerModel[] ):
  Actions[typeof COMMON_COLLECTION_FROM_SERVER] => ({
    type: COMMON_COLLECTION_FROM_SERVER, payload
  }),
};

export const asyncActionCreators = {
  makeRequestToServer: () => (
    ( dispatch: Dispatch ) => (
      getDataFromServer().then(
        (response) => {
          console.log('[Request To Server]:', response);
          // dispatch(actionCreators.getCommonCollectionFromServer(payload));
        }

     )
    )
  ),
};
