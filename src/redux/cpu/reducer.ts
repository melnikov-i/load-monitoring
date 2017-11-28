import { combineReducers } from 'redux';

import { DataFromAPIModel } from '@src/models';

import {
  CPU_COMMON_LOAD_COLLECTION,
  CPU_COMMON_LOAD_NEXT_ITEM
} from '@src/redux/cpu';


export type State = {
  readonly CPUCommonLoadCollection: DataFromAPIModel[],
  readonly CPUCommonLoadCurrentItem: number,
};

export const reducer = combineReducers<State>({
  CPUCommonLoadCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case CPU_COMMON_LOAD_COLLECTION:
        return [
          ...action.payload
          ];
      default:
        return state;
    }
  },
  CPUCommonLoadCurrentItem: ( state = 0, action ) => {
    switch ( action.type ) {
      case CPU_COMMON_LOAD_NEXT_ITEM:
        return action.payload;
      default:
        return state;
    }
  }
});