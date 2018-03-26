import sendRequestToAPI from '@src/ajax';

import {
  DashboardInterface,
  // MoveWidgetsInterface,
  // DraggableDashboardChangerIterface,
} from '@src/interfaces';


import { Dispatch } from '@src/redux';


import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';


import {
  syncActionCreators as mainHeadActionCreators
} from '@src/redux/mainHead';


export const THIS_DASHBOARD_WAS_REQUESTED_FROM_API =
  'THIS_DASHBOARD_WAS_REQUESTED_FROM_API';
export const PUT_DASHBOARD_MODEL_FROM_API_TO_STORE =
  'PUT_DASHBOARD_MODEL_FROM_API_TO_STORE';
export const COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL =
  'COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL';
export const REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION =
  'REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION';
export const CHANGE_CURRENT_TARGET_ID =
  'CHANGE_CURRENT_TARGET_ID';

// export const PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION =
//   'PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION';

// export const CHANGE_SELECTED_CHECKBOX = 
//   'CHANGE_SELECTED_CHECKBOX';
// export const SET_SELECTED_CHECKBOX = 
//   'SET_SELECTED_CHECKBOX';
// export const REORDER_DRAGGABLE_WIDGETS_COLLECTION =
//   'REORDER_DRAGGABLE_WIDGETS_COLLECTION';
// export const CREATE_DRAGGABLE_DASHBOARD =
//   'CREATE_DRAGGABLE_DASHBOARD';

export type Actions = {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API: {
    type: typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
    payload: DashboardInterface['dash_id']['dashboard_id'],
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
  // PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION: {
  //   type: typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
  //   payload: DashboardInterface,
  // },
  // SET_SELECTED_CHECKBOX: {
  //   type: typeof SET_SELECTED_CHECKBOX,
  //   payload: string,
  // },
  // CHANGE_SELECTED_CHECKBOX: {
  //   type: typeof CHANGE_SELECTED_CHECKBOX,
  //   payload: string,
  // },
  // REORDER_DRAGGABLE_WIDGETS_COLLECTION: {
  //   type: typeof REORDER_DRAGGABLE_WIDGETS_COLLECTION,
  //   payload: MoveWidgetsInterface,
  // },
  // CREATE_DRAGGABLE_DASHBOARD: {
  //   type: typeof CREATE_DRAGGABLE_DASHBOARD,
  //   payload: DraggableDashboardChangerIterface,
  // },
};

// Sync Action Creators
export const syncActionCreators = {
  dashboardWasRequestedFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ):
  Actions[typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API] => ({
    type: THIS_DASHBOARD_WAS_REQUESTED_FROM_API, payload
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
  // putDashboardItemsFromAPIToDashboardCollection:
  // ( payload: DashboardInterface ):
  // Actions[typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION] => ({
  //   type: PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION, payload,
  // }),
  // setSelectedCheckbox: (payload: string):
  // Actions[typeof SET_SELECTED_CHECKBOX] => ({
  //   type: SET_SELECTED_CHECKBOX, payload,
  // }),
  // changeSelectedCheckbox: (payload: string):
  // Actions[typeof CHANGE_SELECTED_CHECKBOX] => ({
  //   type: CHANGE_SELECTED_CHECKBOX, payload,
  // }),
  // reorderDraggableWidgetsCollection:
  // ( payload: MoveWidgetsInterface ):
  // Actions[typeof REORDER_DRAGGABLE_WIDGETS_COLLECTION] => ({
  //   type: REORDER_DRAGGABLE_WIDGETS_COLLECTION, payload,
  // }),
  // createDraggableDashboard:
  // ( payload: DraggableDashboardChangerIterface ):
  // Actions[typeof CREATE_DRAGGABLE_DASHBOARD] => ({
  //   type: CREATE_DRAGGABLE_DASHBOARD, payload,
  // }),
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
 */

const getDashboardFromAPI = (
payload: DashboardInterface['dash_id']['dashboard_id'],
dispatch: Dispatch) => {
  dispatch(
    syncActionCreators.dashboardWasRequestedFromAPI(payload)
  );
  sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
    ( response ) => {
      if ( response.data.dashboard !== null ) {
        if ( response.data.dashboard.dash_id !== null ) {
          const items: DashboardInterface = response.data.dashboard;
          dispatch(
            syncActionCreators.putDashboardModelFromAPIToStore(items)
          );              
        }
      } else {
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
  }
};