import axios from 'axios';

import {
  MainMenuLinksInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

const getMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

export const PUT_MENU_FROM_API_TO_MODEL =
'PUT_MENU_FROM_API_TO_MODEL';
export const DO_COMPOSITE_SWITCH =
'DO_COMPOSITE_SWITCH';

export type Actions = {
  PUT_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_MENU_FROM_API_TO_MODEL,
    payload: MainMenuLinksInterface[],
  },
  DO_COMPOSITE_SWITCH: {
    type: typeof DO_COMPOSITE_SWITCH,
    payload: MainMenuLinksInterface['to'],
  }
};

// Sync Action Creators
export const syncActionCreators = {
  putMenuFromAPIToModel:
  ( payload: any ):
  Actions[typeof PUT_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_MENU_FROM_API_TO_MODEL, payload
  }),
  doCompositeSwitch:
  ( payload: MainMenuLinksInterface['to'] ):
  Actions[typeof DO_COMPOSITE_SWITCH] => ({
    type: DO_COMPOSITE_SWITCH, payload
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