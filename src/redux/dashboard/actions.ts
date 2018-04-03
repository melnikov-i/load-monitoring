import sendRequestToAPI from '@src/ajax';

import {
  DashboardInterface,
  SeriesInterface
} from '@src/interfaces';


import { Dispatch } from '@src/redux';


import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';


import {
  syncActionCreators as mainHeadActionCreators
} from '@src/redux/mainHead';

export const SWITCH_DASHBOARD_STATE_KEY_VALUE =
  'SWITCH_DASHBOARD_STATE_KEY_VALUE';
// export const THIS_DASHBOARD_WAS_REQUESTED_FROM_API =
//   'THIS_DASHBOARD_WAS_REQUESTED_FROM_API';
export const PUT_DASHBOARD_MODEL_FROM_API_TO_STORE =
  'PUT_DASHBOARD_MODEL_FROM_API_TO_STORE';
export const COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL =
  'COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL';
export const REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION =
  'REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION';
export const CHANGE_CURRENT_TARGET_ID =
  'CHANGE_CURRENT_TARGET_ID';
export const CHANGE_SELECTED_CHECKBOX = 
  'CHANGE_SELECTED_CHECKBOX';


export type Actions = {
  SWITCH_DASHBOARD_STATE_KEY_VALUE: {
    type: typeof SWITCH_DASHBOARD_STATE_KEY_VALUE,
    payload: string,
  },
  // THIS_DASHBOARD_WAS_REQUESTED_FROM_API: {
  //   type: typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
  //   payload: DashboardInterface['dash_id']['dashboard_id'],
  // },
  PUT_DASHBOARD_MODEL_FROM_API_TO_STORE: {
    type: typeof PUT_DASHBOARD_MODEL_FROM_API_TO_STORE,
    payload: DashboardInterface,
  },
  COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL: {
    type: typeof COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL,
    payload: DashboardInterface,
  },
  REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION: {
    type: typeof REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION,
    payload: DashboardInterface['dash_data'],
  },
  CHANGE_CURRENT_TARGET_ID: {
    type: typeof CHANGE_CURRENT_TARGET_ID,
    payload: number,
  }
  CHANGE_SELECTED_CHECKBOX: {
    type: typeof CHANGE_SELECTED_CHECKBOX,
    payload: string,
  },
};


// Sync Action Creators
export const syncActionCreators = {
  switchDashboardStateKeyValue: ( payload: string ):
  Actions[typeof SWITCH_DASHBOARD_STATE_KEY_VALUE] => ({
    type: SWITCH_DASHBOARD_STATE_KEY_VALUE, payload,
  }),
  // dashboardWasRequestedFromAPI: 
  // ( payload: DashboardInterface['dash_id']['dashboard_id'] ):
  // Actions[typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API] => ({
  //   type: THIS_DASHBOARD_WAS_REQUESTED_FROM_API, payload
  // }),
  putDashboardModelFromAPIToStore:
  ( payload: DashboardInterface ):
  Actions[typeof PUT_DASHBOARD_MODEL_FROM_API_TO_STORE] => ({
    type: PUT_DASHBOARD_MODEL_FROM_API_TO_STORE, payload,
  }),
  copyDashboardFromDashboardStaticModel:
  ( payload: DashboardInterface ):
  Actions[typeof COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL] => ({
    type: COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL, payload,
  }),
  reorderDashboardDragModelDataCollection:
  ( payload: DashboardInterface['dash_data'] ):
  Actions[typeof REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION] => ({
    type: REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION, payload,
  }),
  changeCurrentTargetId: ( payload: number ):
  Actions[typeof CHANGE_CURRENT_TARGET_ID] => ({
    type: CHANGE_CURRENT_TARGET_ID, payload,
  }),
  changeSelectedCheckbox: (payload: string):
  Actions[typeof CHANGE_SELECTED_CHECKBOX] => ({
    type: CHANGE_SELECTED_CHECKBOX, payload,
  }),
};


/**
 * Метод получения модели дашборда от бэкэнда вынесен в
 * отдельную функцию потому, что подобное действие необходимо
 * совершить более одного раза. Первый в методе 
 * makeDashboardRequestFromAPI(), где происходит первичный запрос
 * данных, второй -- в методе sendChangedDashboardToAPI(), где
 * необходимо произвести точно такой же запрос после успешной 
 * отправки данных в бэкэнд.
 *
 * @param {DashboardInterface['dash_id']['dashboard_id']} payload
 * @param {Dispatch} dispatch
 * @return {void}
 */

const getDashboardFromAPI = (
payload: DashboardInterface['dash_id']['dashboard_id'],
dispatch: Dispatch) => {
  /* Запрос данных у бэкэнда в процессе. Смена состояния Вида на 2. */
  dispatch(
    syncActionCreators.switchDashboardStateKeyValue('2')
  );
  // dispatch(
  //   syncActionCreators.dashboardWasRequestedFromAPI(payload)
  // );
  // console.log('request:', payload);
  sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
    ( response ) => {      
      if ( response.data.dashboard !== null ) {
        /* Сессия на бэкэнде еще существует */
        if ( response.data.dashboard.dash_id !== null ) {
          /* В ответе от сервера пришли корректные данныеы */
          const items: DashboardInterface = response.data.dashboard;
          /* Помещение данных от бэкэнда в store */
          dispatch(
            syncActionCreators.putDashboardModelFromAPIToStore(items)
          );
          /* Данные корректно получены. Смена состояния Вида на 3 */
          dispatch(
            syncActionCreators.switchDashboardStateKeyValue('11')
          );
        } else {
          
          /*
           * Информации о дашборде не существует на сервере.
           * Смена состояния вида на 31 (ошибочные данные).
           */

          const DashboardWrongModel: DashboardInterface = {
            dash_id: {
              dashboard_id: payload,
              dashboard_name: '',
              dash_columns: '',
            },
            dash_data: [],  
          };
          
          dispatch(
            syncActionCreators
              .putDashboardModelFromAPIToStore(DashboardWrongModel)
          );         
          
          /* Смена состояния Вида на 31 */
          dispatch(
            syncActionCreators.switchDashboardStateKeyValue('31')
          );
        }
      } else {
        /* Сессия на бэкэнде либо истекла, либо не существует */
        dispatch(
          loginActionCreators.userWasLogOut()
        )
      }
    }
  )
  .catch( error => console.log('[ERROR]:', error) );
}


// Async Action Creators
export const asyncActionCreators = {
  /**
   * Выполнение запроса данных у бэкэнда.
   */

  makeDashboardRequestFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ) => {
    return ( dispatch: Dispatch ) => {
      getDashboardFromAPI(payload, dispatch);
    }
  },
  sendChangedDashboardToAPI:
  ( payload: DashboardInterface ) => {
    return ( dispatch: Dispatch ) => {
      sendRequestToAPI.post('/dash_data2.php', payload).then(
        ( response ) => {
          getDashboardFromAPI(payload.dash_id.dashboard_id, dispatch);
          dispatch(
            mainHeadActionCreators.mainHeaderButtonSwitch()
          );
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  },
  reorderDashboardDragModelDataCollectionOnlyOneTime:
  ( payload: {model: DashboardInterface['dash_data'], id: number} ) => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.changeCurrentTargetId(payload.id)
      );
      dispatch(
        syncActionCreators.
          reorderDashboardDragModelDataCollection(payload.model)
      );
    }
  },
  
  /* Получение данных для отображение в диаграммах */
  makeSeriesDataRequestFromAPI:
  ( payload: DashboardInterface ) => {
    return ( dispatch: Dispatch ) => {
      /* Запрос данных у бэкэнда в процессе. Смена состояния Вида на 2. */
      dispatch(
        syncActionCreators.switchDashboardStateKeyValue('2')
      );
      setTimeout(() => {
        const request: SeriesInterface = {
          dashboard_id: payload.dash_id.dashboard_id,
          limit: '60',
          dash_data: payload.dash_data,
        };
        sendRequestToAPI.post('/get_charts_data.php', request).then(
          ( response ) => {
            console.log('response', response.data);
          }
        )
        .catch(
          ( error ) => {
            console.log('[ERROR]:', error);
          }
        )
        console.log('request:', request);
      }, 5000);
    }
  }
};