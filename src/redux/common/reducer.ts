import { combineReducers } from 'redux';

import {
  CommonDataInterface,
              // DataFromAPIModel,
              // CommonModel,
} from '@src/interfaces';

import {
  PUT_DATA_FROM_API_TO_MODEL
  // PUT_DATA_FROM_API_TO_DATA_0,
  // PUT_DATA_FROM_API_TO_DATA_1,
  // SET_DATA_ADD_IN_LAST_FIELD,
  // CHANGE_CURRENT_DATA_COLLECTION,
  // DO_INDEX_INCREMENT,
} from '@src/redux/common';


const CommonDataInitialState: CommonDataInterface = {
  data: [
    {
      cpu: "default",
      cpu1: "default",
      cpu2: "default",
      cpu3: "default",
      cpu4: "default",
      cpu5: "default",
      cpu6: "default",
      cpu7: "default",
      cpu8: "default",
      cpu9: "default",
      cpu10: "default",
      cpu11: "default",
      cpu12: "default",
      cpu13: "default",
      cpu14: "default",
      cpu15: "default",
      cpu16: "default",
      dwMemoryLoad: "default",
      hdd1: "default",
      hdd2: "default",
      hdd3: "default",
      hdd4: "default",
      hdd5: "default",
      hdd6: "default",
      hdd7: "default",
      hdd8: "default",
      net1: "default",
      net2: "default",
      net3: "default",
      net4: "default",
      net5: "default",
      net6: "default",
      data_add: "default",
      id: "default",
    }
  ],
  dataAddInLastField: 0,
  index: 0,
  interval: 5100,
};

export type State = {
  readonly CommonDataModel: CommonDataInterface,

  // readonly data0: DataFromAPIModel[],
  // readonly data1: DataFromAPIModel[],
  // readonly dataAddInLastField: CommonModel['dataAddInLastField'],
  // readonly currentDataCollection: CommonModel['currentDataCollection'],
  // readonly index: number,
};

export const reducer = combineReducers({
  CommonDataModel: ( state = CommonDataInitialState, action ) => {
    switch ( action.type ) {
      case PUT_DATA_FROM_API_TO_MODEL:
        let newState = {...state};
        if ( state.data[0].data_add === "default" ) {
          /* Получение первичных данных от API */
          // const newDataAddInLastField:
          // CommonDataInterface['dataAddInLastField'] = 
          //   Number(action.payload[action.payload.length -1].data_add);
          console.log(
            '[REDUCER_newDataAddInLastField]'
          );
          newState = {
            ...newState,
            data: action.payload,
            dataAddInLastField: 
              Number(action
              .payload[newState.index].data_add),
          };
        } else {
          /* Последующие изменения State */
          let newData: CommonDataInterface['data'] = [];
          for ( let i in action.payload ) {
            const dataAddInPayload:
            CommonDataInterface['dataAddInLastField'] =
              Number(action.payload[i].data_add);
            if ( dataAddInPayload > state.dataAddInLastField ) {
              newData = [
                ...newData,
                action.payload[i]
              ];
            }
          }
          newState = {
            ...newState,
            data: newData,
          };
          
        }


        console.log(
          '[REDUCER_dataAddInLastField]',
          newState.dataAddInLastField
        );

        console.log('[REDUCER_newState]:', newState);
        return newState;
      default:
        return state;
    }
  },

  // data0: ( state = [], action ) => {
  //   switch ( action.type ) {
  //     case PUT_DATA_FROM_API_TO_DATA_0:
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // },
  // data1: ( state = [], action ) => {
  //   switch ( action.type ) {
  //     case PUT_DATA_FROM_API_TO_DATA_1:
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // },
  // dataAddInLastField: ( state = 0, action ) => {
  //   switch ( action.type ) {
  //     case SET_DATA_ADD_IN_LAST_FIELD:
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // },
  // currentDataCollection: ( state = "data0", action ) => {
  //   switch ( action.type ) {
  //     case CHANGE_CURRENT_DATA_COLLECTION:
  //       if ( state === "data0" )
  //         return "data1";
  //       return "data0";
  //     default:
  //       return state;
  //   }
  // },
  // index: ( state = 0, action ) => {
  //   switch ( action.type ) {
  //     case DO_INDEX_INCREMENT:
  //       return state + 1;      
  //     default:
  //       return state;
  //   }
  // }
});
