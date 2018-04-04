import sendRequestToAPI from '@src/ajax';

import {
  DashboardInterface,
  SeriesRequestInterface,
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
export const PUT_SERIES_DATA_FROM_API_TO_STORE = 
  'PUT_SERIES_DATA_FROM_API_TO_STORE';


export type Actions = {
  SWITCH_DASHBOARD_STATE_KEY_VALUE: {
    type: typeof SWITCH_DASHBOARD_STATE_KEY_VALUE,
    payload: string,
  },
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
  PUT_SERIES_DATA_FROM_API_TO_STORE: {
    type: typeof PUT_SERIES_DATA_FROM_API_TO_STORE,
    payload: any,
  }
};


// Sync Action Creators
export const syncActionCreators = {
  switchDashboardStateKeyValue: ( payload: string ):
  Actions[typeof SWITCH_DASHBOARD_STATE_KEY_VALUE] => ({
    type: SWITCH_DASHBOARD_STATE_KEY_VALUE, payload,
  }),
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
  putSeriesDataFromAPIToStore: ( payload: any ):
  Actions[typeof PUT_SERIES_DATA_FROM_API_TO_STORE] => ({
    type: PUT_SERIES_DATA_FROM_API_TO_STORE, payload,
  }),
};


  /**
   * Возвращает цвет столбца. 
   *
   * @param {number} y
   * @return {string}
   */

  const getColor = ( y: number ) => {
    if ( y >= 90 ) {
      return '#ec4758'; // red    
    } else {
      if ( y >= 50 ) {
        return '#f8ac59'; // orange
      } else {
        return '#1ab394'; // green
      }
    }
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
  
  sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
    ( response ) => {
      
      /**
       * Обработка ответа от сервера. Если сервер возвращает
       * {"dashboard": null}, значит сессия либо не существует,
       * либо ее срок действия истек.
       */
      
      if ( response.data.dashboard !== null ) {

        /**
         * Также необходимо выполнить проверку содержимого ответа на
         * корректность. Если dash_id = null, значит информации о
         * виджетах этого дашборда нет на бэкэнде. (Это проблема бэкэнда,
         * о которой необходимо сообщить пользователю).
         */

        if ( response.data.dashboard.dash_id !== null ) {
          const items: DashboardInterface = response.data.dashboard;
          
          /* Помещение данных от бэкэнда в store */
          dispatch(
            syncActionCreators.putDashboardModelFromAPIToStore(items)
          );
          
          /* Передаем запрос далее по цепочке */
          return items;          
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

      /* Запрос завершился неудачей, поэтому дальнейшие дествия прерываются */
      return {
        dash_id: {
          dashboard_id: '',
          dashboard_name: '',
          dash_columns: '',
        },
        dash_data: [],  
      };
    }
  )
  .then(
    ( dashboard ) => {
      
      /**
       * В случае, когда в этот метод передается true, обработка
       * предыдущего запроса считается завершенной удачно. 
       * В таком случае в этом методе выполняется запрос первичных
       * данных для отрисовки графиков в виджетах.
       */
      
      if ( dashboard.dash_id.dashboard_id !== '' ) {
        /* Массив с полями, данные которых нужно получить для графиков */
        const requestDashData: {widget_name: string}[] = 
          dashboard.dash_data.map((e) => (
           {widget_name: e.widget_name}
          ));
        
        /* Формирование объекта для запроса данных */
        const request: SeriesRequestInterface = {
          dashboard_id: dashboard.dash_id.dashboard_id,
          limit: '60',
          dash_data: requestDashData,
        }

        sendRequestToAPI.post('/get_charts_data.php', request).then(
          ( response ) => {
            /* Результирующий объект с данными графиков */
            let SeriesData: any = {};
            
            /* Обработка принятых данных и наполнение объекта SeriesData */
            dashboard.dash_data.forEach(( node ) => (
              SeriesData = {
                ...SeriesData,
                [node.widget_name]:
                  response.data.map((e) => (
                    {
                      y: (node.widget_name.substring(0, 3) !== 'net') ?
                        Number(e[node.widget_name]) : 0,
                      x: Number(e.data_add),
                      color: getColor(Number(e[node.widget_name])),
                    }
                  )).reverse()
              }
            ));

            /* Отправка полученных данных в Sore */
            dispatch(
              syncActionCreators.putSeriesDataFromAPIToStore(SeriesData)
            );
            /* Смена состояния Вида на 3 ( Запрос завершился успешно ) */
            dispatch(
              syncActionCreators.switchDashboardStateKeyValue('3')
            );
          }
        )
        .catch(
          ( error ) => {
            /* Смена состояния Вида на 0 ( Запрос завершился ошибкой ) */
            dispatch(
              syncActionCreators.switchDashboardStateKeyValue('0')
            );
            console.log('[ERROR]:', error);
          }
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

  
  /**
   * Отправляет пользовательские изменения в настройке отображения
   * дашборда.
   */

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


  /**
   * 
   */

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
  
  
  /**
   * Получение данных для отображение в диаграммах 
   */
  
  makeSeriesDataRequestFromAPI:
  ( payload: DashboardInterface ) => {
    return ( dispatch: Dispatch ) => {
      setTimeout(() => {
        /* Массив с полями, данные которых нужно получить для графиков */
        const requestDashData: {widget_name: string}[] = 
          payload.dash_data.map((e) => (
           {widget_name: e.widget_name}
          ));
        
        /* Формирование объекта для запроса данных */
        const request: SeriesRequestInterface = {
          dashboard_id: payload.dash_id.dashboard_id,
          limit: '1',
          dash_data: requestDashData,
        }

        sendRequestToAPI.post('/get_charts_data.php', request).then(
          ( response ) => {
            /* Результирующий объект с данными графиков */
            let SeriesData: any = {};
            
            /* Обработка принятых данных и наполнение объекта SeriesData */
            payload.dash_data.forEach(( node ) => (
              SeriesData = {
                ...SeriesData,
                [node.widget_name]: {
                  y: (node.widget_name.substring(0, 3) !== 'net') ?
                    Number(response.data[node.widget_name]) : 0,
                  x: Number(response.data.data_add),
                  color: getColor(Number(response.data[node.widget_name])),
                }
              }
            ));

            /* Отправка полученных данных в Sore */
            dispatch(
              syncActionCreators.putSeriesDataFromAPIToStore(SeriesData)
            );
            /* Смена состояния Вида на 3 ( Запрос завершился успешно ) */
            dispatch(
              syncActionCreators.switchDashboardStateKeyValue('3')
            );
          }
        )
        .catch(
          ( error ) => {
            /* Смена состояния Вида на 0 ( Запрос завершился ошибкой ) */
            dispatch(
              syncActionCreators.switchDashboardStateKeyValue('0')
            );
            console.log('[ERROR]:', error);
          }
        )
      }, 5000);
    }
  }
};