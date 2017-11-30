import { combineReducers } from 'redux';

import {
  CommonDataInterface,
} from '@src/interfaces';

import {
  PUT_DATA_FROM_API_TO_MODEL,
  DO_INDEX_INCREMENT,
} from '@src/redux/common';


const CommonDataInitialState: CommonDataInterface = {
  data: [
    {
      cpu: "",
      cpu1: "",
      cpu2: "",
      cpu3: "",
      cpu4: "",
      cpu5: "",
      cpu6: "",
      cpu7: "",
      cpu8: "",
      cpu9: "",
      cpu10: "",
      cpu11: "",
      cpu12: "",
      cpu13: "",
      cpu14: "",
      cpu15: "",
      cpu16: "",
      dwMemoryLoad: "",
      hdd1: "",
      hdd2: "",
      hdd3: "",
      hdd4: "",
      hdd5: "",
      hdd6: "",
      hdd7: "",
      hdd8: "",
      net1: "",
      net2: "",
      net3: "",
      net4: "",
      net5: "",
      net6: "",
      data_add: "",
      id: "",
    }
  ],
  dataAddInLastField: 0,
  index: 0,
  interval: 5100,
};

export type State = {
  readonly CommonDataModel: CommonDataInterface,
};

export const reducer = combineReducers({
  CommonDataModel: ( state = CommonDataInitialState, action ) => {
    switch ( action.type ) {
      case PUT_DATA_FROM_API_TO_MODEL:
        let putDataFromAPIState = {...state};
        if ( state.data[0].data_add === "" ) {
          /* Получение первичных данных от API */
          putDataFromAPIState = {
            ...putDataFromAPIState,
            /* Внесение данных из JSON-файла модель */
            data: action.payload,
            /* Изменение величины времени последнего поля модели */
            dataAddInLastField: 
              Number(action
              .payload[action.payload.length - 1].data_add),
          };
        } else {
          /* Последующие изменения State */
          let newData: CommonDataInterface['data'] = [];          
          /* Отсеивание уже отображенных данных */
          for ( let i in state.data ) {
            if ( i > putDataFromAPIState.index ) {
              newData = [...newData, state.data[i]];
            }
          }
          /* Переопределяем State после отсеивания */
          putDataFromAPIState.data = [...newData];          
          /* Отсеивание только недостающих данных, полученных от API */
          for ( let i in action.payload ) {
            const dataAddInPayload:
            CommonDataInterface['dataAddInLastField'] =
              Number(action.payload[i].data_add);
            if ( dataAddInPayload > state.dataAddInLastField ) {
              putDataFromAPIState.data = [
                ...putDataFromAPIState.data,
                action.payload[i]
              ];
            }
          }
          putDataFromAPIState = {
            ...putDataFromAPIState,
            /* Сброс индекса */
            index: 0,
            /* Обновление величины времени последнего поля модели */
            dataAddInLastField:
              Number(putDataFromAPIState
                .data[putDataFromAPIState.data.length - 1].data_add),
          }
        }
        console.log(
          '[REDUCER] - putDataFromAPIState',
          putDataFromAPIState
        );
        
        return putDataFromAPIState;
      case DO_INDEX_INCREMENT:
        const doIncrementState = {
          ...state,
          index: state.index + 1,
        };
        console.log(
          '[REDUCER] - doIncrementState',
          doIncrementState
        );
        return doIncrementState;
      default:
        return state;
    }
  },
});
