import axios from 'axios';

import {
  
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

const getMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

export const PUT_MENU_FROM_API_TO_MODEL =
'PUT_MENU_FROM_API_TO_MODEL';
export const COMPOSITE_FIELD_CHANGE_STATE =
'COMPOSITE_FIELD_CHANGE_STATE';

export type Actions = {
  PUT_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_MENU_FROM_API_TO_MODEL,
    payload: any, // Потом заменить на интерфейс меню
  },
  COMPOSITE_FIELD_CHANGE_STATE: {
    type: typeof COMPOSITE_FIELD_CHANGE_STATE,
    payload: boolean,
  }
};

// Sync Action Creators
export const syncActionCreators = {
  putMenuFromAPIToModel:
  ( payload: any ):
  Actions[typeof PUT_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_MENU_FROM_API_TO_MODEL, payload
  }),
  compositeFieldChangeState:
  ( payload: boolean ):
  Actions[typeof COMPOSITE_FIELD_CHANGE_STATE] => ({
    type: COMPOSITE_FIELD_CHANGE_STATE, payload
  }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      getMenuFromAPI().then(
        ( response ) => {
          console.log('[RESPONSE.data]:', response.data);
        // dispatch(
        //   syncActionCreators
        // );
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  },
};