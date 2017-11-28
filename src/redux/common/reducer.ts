import { combineReducers } from 'redux';

import {
  DataFromAPIModel,
  CommonModel,
} from '@src/models';

import {
  PUT_DATA_FROM_API_TO_DATA_0,
  PUT_DATA_FROM_API_TO_DATA_1,
  SET_DATA_ADD_IN_LAST_FIELD,
  CHANGE_CURRENT_DATA_COLLECTION,
  DO_INDEX_INCREMENT,
} from '@src/redux/common';

export type State = {
  readonly data0: DataFromAPIModel[],
  readonly data1: DataFromAPIModel[],
  readonly dataAddInLastField: CommonModel['dataAddInLastField'],
  readonly currentDataCollection: CommonModel['currentDataCollection'],
  readonly index: number,
};

export const reducer = combineReducers({
  data0: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_DATA_FROM_API_TO_DATA_0:
        return action.payload;
      default:
        return state;
    }
  },
  data1: ( state = [], action ) => {
    switch ( action.type ) {
      case PUT_DATA_FROM_API_TO_DATA_1:
        return action.payload;
      default:
        return state;
    }
  },
  dataAddInLastField: ( state = 0, action ) => {
    switch ( action.type ) {
      case SET_DATA_ADD_IN_LAST_FIELD:
        return action.payload;
      default:
        return state;
    }
  },
  currentDataCollection: ( state = "data0", action ) => {
    switch ( action.type ) {
      case CHANGE_CURRENT_DATA_COLLECTION:
        if ( state === "data0" )
          return "data1";
        return "data0";
      default:
        return state;
    }
  },
  index: ( state = 0, action ) => {
    switch ( action.type ) {
      case DO_INDEX_INCREMENT:
        return state + 1;      
      default:
        return state;
    }
  }
});
