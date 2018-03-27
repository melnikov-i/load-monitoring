import { combineReducers } from 'redux';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
  PUT_DASHBOARD_MODEL_FROM_API_TO_STORE,
  COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL,
  REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION,
  CHANGE_CURRENT_TARGET_ID,
  CHANGE_SELECTED_CHECKBOX,
} from '@src/redux/dashboard';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

import {
  SWITCH_PAGE_MENU_ITEM_ACTIVE
} from '@src/redux/main';

import {
  MAIN_HEADER_BUTTON_SWITCH
} from '@src/redux/mainHead';


export type State = {
  /* Модель дашборда для статического отображения */
  readonly DashboardStaticModel: DashboardInterface,
  /* Модель дашборда для отображение с drag&drop */
  readonly DashboardDragModel: DashboardInterface,
  /* Ключ, используемый в запросе модели с бэкэнда */
  readonly DashboardWasRequestedFromAPI: 
    DashboardInterface['dash_id']['dashboard_id'],
  /* Ключ актуальности модели DashboardDragModel */
  readonly isDashboardDragModelCopied: boolean,
  /* ID целевого элемента при перемещении виджета */
  readonly currentTargetId: number,
};


/* Состояние модели дашборда по умолчанию */
const DashboardModelInitialState: DashboardInterface = {
  dash_id: {
    dashboard_id: '',
    dashboard_name: '',
    dash_columns: '',
  },
  dash_data: [],  
};


export const reducer = combineReducers({
  /**
   * Модель дашборда для статического отображения 
   */

  DashboardStaticModel:
  ( state = DashboardModelInitialState, action ) => {
    switch ( action.type ) {
      /* Помещает в редьюсер данные модели, полученные от бэкэнда */
      case PUT_DASHBOARD_MODEL_FROM_API_TO_STORE:
        return action.payload;
      /* Очищает редьюсер при logout'е */
      case USER_WAS_LOGOUT:
        return DashboardModelInitialState;
      default:
        return state;
    }
  },


  /**
   * Модель дашборда для отображение с drag&drop 
   */

  DashboardDragModel:
  ( state = DashboardModelInitialState, action ) => {
    switch ( action.type ) {
      /* Помещает сюда копию редактируемого дашборда */
      case COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL:
        return action.payload;
      case REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION:
        return {
          ...state,
          ['dash_data']: action.payload,
        };
      /* Изменяет поле с количеством колонок */
      case CHANGE_SELECTED_CHECKBOX:
        return {
          ...state,
          ['dash_id']: {
            ...state.dash_id,
            ['dash_columns']: action.payload,
          }
        }
      /* Очищает редьюсер при logout'е */
      case USER_WAS_LOGOUT:
        return DashboardModelInitialState;
      default:
        return state;
    }
  },


  /*
   * Ключ, используемый в запросе модели с бэкэнда.
   * В качестве ключа используется идентификатор 
   * запрашиваемого у бэкэнда дашборда. Этот идентификатор
   * сравнивается в компоненте с тем, который передан в компонент.
   * Так сделано для того, чтобы сравнивая идентификаторы, можно
   * было бы определить переход с одного дашборда на другой.
   */

  DashboardWasRequestedFromAPI: ( state = '', action ) => {
    switch ( action.type ) {
      /* Помещает в редьюсер идентификатор запрошенного дашборда */
      case THIS_DASHBOARD_WAS_REQUESTED_FROM_API:
        return action.payload;
      /* Очищает редьюсер при logout'е */
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },


  /**
   * Ключ, по значению которого определяется актуальность
   * модели DashboardDragModel
   */

  isDashboardDragModelCopied: ( state = false, action ) => {
    switch ( action.type ) {
      /* Дашборд скопирован при загрузке страницы редактирования */
      case COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL:
        return true;
      /* Сбрасывает ключ при нажатии на кнопки "Назад" или "Отмена" */
      case MAIN_HEADER_BUTTON_SWITCH:
        return false;
      /* Сброс значения ключа при выборе другого устройства в основном меню */
      case SWITCH_PAGE_MENU_ITEM_ACTIVE:
        return false;
      case USER_WAS_LOGOUT:
        return false;
      default:
        return state;
    }
  },


  /**
   * ID целевого элемента при перемещении виджета.
   * Это поле необходимо для исключения повторных срабатываний перемещений
   * виджетов.
   */

  currentTargetId: ( state = -1, action ) => {
    switch ( action.type ) {
      case CHANGE_CURRENT_TARGET_ID:
        return action.payload;
      case USER_WAS_LOGOUT:
        return -1;
      case USER_WAS_LOGOUT:
        return -1;
      default:
        return state;
    }
  }
});