import { combineReducers } from 'redux';

import {
  DashboardInterface,
  ElementsOfDashboardCollectionInterface
} from '@src/interfaces';

import {
  SWITCH_DASHBOARD_STATE_KEY_VALUE,
  PUT_DASHBOARD_MODEL_FROM_API_TO_STORE,
  PUT_SERIES_DATA_FROM_API_TO_STORE,
  PUT_SERIES_ITEM_FROM_API_TO_STORE,
  COPY_DASHBOARD_FROM_DASHBOARD_STATIC_MODEL,
  REORDER_DASHBOARD_DRAG_MODEL_DATA_COLLECTION,
  CHANGE_CURRENT_TARGET_ID,
  CHANGE_SELECTED_CHECKBOX,
  PUT_ELEMENTS_OF_DASHBOARD_COLLECTION_IN_STORE
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
  /* Ключ состояния компонента, используемый для выбора Вида */
  readonly DashboardStateKey: string,
  /* Модель дашборда для статического отображения */
  readonly DashboardStaticModel: DashboardInterface,
  /* Модель дашборда для отображение с drag&drop */
  readonly DashboardDragModel: DashboardInterface,
  /* Ключ актуальности модели DashboardDragModel */
  readonly isDashboardDragModelCopied: boolean,
  /* ID целевого элемента при перемещении виджета */
  readonly currentTargetId: number,
  /* Коллекция данных для графиков */
  readonly SeriesDataCollection: any,
  /* имя узла, к которому привязан action makeSeriesDataRequestFromAPI */
  readonly ElementsOfDashboardCollection: 
    ElementsOfDashboardCollectionInterface,
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

const ElementsOfDashboardCollectionInitialState:
ElementsOfDashboardCollectionInterface = {
  dashboard_id: '',
  element: '',
  collection: [],
}


export const reducer = combineReducers({
  /**
   * Ключ состояния компонента, используемый для выбора Вида
   */

  DashboardStateKey: ( state = '1', action ) => {
    switch ( action.type ) {
      case SWITCH_DASHBOARD_STATE_KEY_VALUE:
        return action.payload;
      case SWITCH_PAGE_MENU_ITEM_ACTIVE:
        return '1';
      default:
        return state;
    }
  },


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


  /**
   * Коллекция данных для графиков
   */

  SeriesDataCollection: ( state = {}, action ) => {
    switch ( action.type ) {
      /* Добавляет элементы для отображения графика */
      case PUT_SERIES_DATA_FROM_API_TO_STORE:
        return action.payload;
      /* Удаляет начальные элементы, и добавляет последние */
      case PUT_SERIES_ITEM_FROM_API_TO_STORE:
        let newState = {};
        /* В state объект массивов, разбираем этот объект */
        for ( let node in state ) {
          
          /**
           * Производит сборку массива данных.
           * Первый элемент массива имеет значение х = 59, и добавляется
           * в начало массива. Это так, потому что мы при получении
           * массива от бэкэнда его переворачиваем (arr.reverce()).
           * В свою очередь это надо для достижения нужного направления
           * отображения графика. Далее мы добавляем остальные элементы
           * массива, убирая последний, и попутно изменяя у каждого из них
           * поле х (по которому ориентируется библиотека rumble-charts при
           * построении графика), меняя ее значение на x -1.
           */

          newState = {
            ...newState,
            [node]: [
              action.payload[node],
              ...state[node].slice(0, 59).map(e => ({
                y: e.y,
                x: e.x - 1,
                color: e.color,
                timestamp: e.timestamp,
              })),
            ]
          };

        }
        return newState;
      /* Очищает редьюсер при logout'е */
      case USER_WAS_LOGOUT:
        return {};
      default:
        return state;
    }
  },


  /**
   * Имя первого узла в коллекции узлов, чьи данные отображаются
   * в графиках
   */

  ElementsOfDashboardCollection: 
  ( state = ElementsOfDashboardCollectionInitialState, action ) => {
    switch ( action.type ) {
      case PUT_ELEMENTS_OF_DASHBOARD_COLLECTION_IN_STORE:
        return action.payload;
      /* Очищает редьюсер при logout'е */
      case USER_WAS_LOGOUT:
        return ElementsOfDashboardCollectionInitialState;
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