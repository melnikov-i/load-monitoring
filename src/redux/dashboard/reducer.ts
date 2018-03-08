import { combineReducers } from 'redux';

import {
  DashboardInterface,
  MoveWidgetsInterface,
} from '@src/interfaces';

import {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
  CHANGE_SELECTED_CHECKBOX,
  SET_SELECTED_CHECKBOX,
  CREATE_DRAGGABLE_DASHBOARD,
  REORDER_DRAGGABLE_WIDGETS_COLLECTION,
} from '@src/redux/dashboard';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

import {
  MAIN_HEADER_BUTTON_SWITCH
} from '@src/redux/mainHead';


export type State = {
  readonly DashboardCollection: DashboardInterface,
  readonly DraggableWidgetsCollection: DashboardInterface['dash_data'],
  readonly isDraggableWidgetsCollection: boolean,
  readonly DashboardWasRequestedFromAPI: 
    DashboardInterface['dash_id']['dashboard_id'],
  readonly SelectedCheckbox: string,
  readonly DraggableSelectedCheckbox: string,
};

const DashboardCollectionInitialState: DashboardInterface = {
  dash_id: {
    dashboard_id: '',
    dashboard_name: '',
    dash_columns: '',
  },
  dash_data: []
};

const reorder = ( dash_data: DashboardInterface['dash_data'],
items: MoveWidgetsInterface ) => {
  const result = dash_data.map((e, i) => {
    switch ( i ) {
      case items.source: return dash_data[items.target];
      case items.target: return dash_data[items.source];
      default: return dash_data[i];
    }
  });
  return result;
};

export const reducer = combineReducers({
  /* Коллекция виджетов для отображения */
  DashboardCollection: 
  ( state = DashboardCollectionInitialState, action ) => {
    switch ( action.type ) {
      case PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION:
        return action.payload;
      // case REORDER_DASHBOARD_COLLECTION:
      //   return {
      //     ...state,
      //     ['dash_data']: reorder(state.dash_data, action.payload),
      //   };
      case USER_WAS_LOGOUT:
        return DashboardCollectionInitialState;
      default:
        return state;
    }
  },
  /* Коллекция виджетов для настройки */
  DraggableWidgetsCollection: ( state = [], action ) => {
    switch ( action.type ) {
      case CREATE_DRAGGABLE_DASHBOARD:
        console.log('DraggableDashboard State:', action.payload);
        return action.payload;
      case REORDER_DRAGGABLE_WIDGETS_COLLECTION:
        return reorder(state, action.payload);
      case USER_WAS_LOGOUT:
        return [];
      default:
        return state;
    }
  },
  /* Ключ для помещения данных в коллекцию виджетов для отображения */
  DashboardWasRequestedFromAPI: ( state = '', action ) => {
    switch ( action.type ) {
      case THIS_DASHBOARD_WAS_REQUESTED_FROM_API:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
  /* Ключ для помещения данных в коллекцию виджетов для настройки */
  isDraggableWidgetsCollection: ( state = false, action ) => {
    switch ( action.type ) {
      case CREATE_DRAGGABLE_DASHBOARD:
        return true;
      case MAIN_HEADER_BUTTON_SWITCH:
        return false;
      default:
        return state;
    }
  },
  /* Количество колонок на странице отображения */
  SelectedCheckbox: ( state = '0', action ) => {
    switch ( action.type ) {
      case SET_SELECTED_CHECKBOX:
        return action.payload;
      default:
        return state;
    }
  },
  /* Количество колонок на странице редактирования */
  DraggableSelectedCheckbox: ( state = '0', action ) => {
    switch ( action.type ) {
      case SET_SELECTED_CHECKBOX:
        return action.payload;
      case CHANGE_SELECTED_CHECKBOX:
        return action.payload;
      default:
        return state;
    }
  }
});