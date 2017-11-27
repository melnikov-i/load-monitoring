import { DataFromServerModel } from '@src/models';

export const CPU_COMMON_LOAD_COLLECTION = 
'CPU_COMMON_LOAD_COLLECTION';
export const CPU_COMMON_LOAD_NEXT_ITEM =
'CPU_COMMON_LOAD_NEXT_ITEM';


export type Actions = {
  CPU_COMMON_LOAD_COLLECTION: {
    type: typeof CPU_COMMON_LOAD_COLLECTION,
    payload: DataFromServerModel[],
  },
  CPU_COMMON_LOAD_NEXT_ITEM: {
    type: typeof CPU_COMMON_LOAD_NEXT_ITEM,
    payload: number
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
  })
};