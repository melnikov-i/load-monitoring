import axios from 'axios';

import {
  MainMenuLinksInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

const getMainMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

const getDevicesMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_devices.php')
);

export const MAIN_MENU_WAS_REQUESTED_FROM_API =
  'MAIN_MENU_WAS_REQUESTED_FROM_API';
export const PUT_MAIN_MENU_FROM_API_TO_MODEL =
  'PUT_MAIN_MENU_FROM_API_TO_MODEL';
export const DEVICES_MENU_WAS_REQUESTED_FROM_API =
  'DEVICES_MENU_WAS_REQUESTED_FROM_API';
export const PUT_DEVICES_MENU_FROM_API_TO_MODEL =
  'PUT_DEVICES_MENU_FROM_API_TO_MODEL';
export const DO_DEVICES_MENU_VIEW_SWITCH =
  'DO_DEVICES_MENU_VIEW_SWITCH';
export const DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH =
  'DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH';

export type Actions = {
  MAIN_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof MAIN_MENU_WAS_REQUESTED_FROM_API,
  },
  PUT_MAIN_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_MAIN_MENU_FROM_API_TO_MODEL,
    payload: MainMenuLinksInterface[],
  },
  DEVICES_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_MENU_WAS_REQUESTED_FROM_API,
  },
  PUT_DEVICES_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_DEVICES_MENU_FROM_API_TO_MODEL,
    payload: MainMenuLinksInterface[],
  }
  DO_DEVICES_MENU_VIEW_SWITCH: {
    type: typeof DO_DEVICES_MENU_VIEW_SWITCH,
  }
  DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH: {
    type: typeof DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH,
  }
};

// Sync Action Creators
export const syncActionCreators = {
  mainMenuWasRequestedFromAPI: ():
  Actions[typeof MAIN_MENU_WAS_REQUESTED_FROM_API] => ({
    type: MAIN_MENU_WAS_REQUESTED_FROM_API,
  }),
  putMainMenuFromAPIToModel:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_MAIN_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_MAIN_MENU_FROM_API_TO_MODEL, payload
  }),
  devicesMenuWasRequestedFromAPI: ():
  Actions[typeof DEVICES_MENU_WAS_REQUESTED_FROM_API] => ({
    type: DEVICES_MENU_WAS_REQUESTED_FROM_API,
  }),
  putDevicesMenuFromAPIToModel:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_DEVICES_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_DEVICES_MENU_FROM_API_TO_MODEL, payload,
  }),
  doDevicesMenuViewSwitch:():
  Actions[typeof DO_DEVICES_MENU_VIEW_SWITCH] => ({
    type: DO_DEVICES_MENU_VIEW_SWITCH,
  }),
  doOpenMainMenuWhenSmallScreenSwitch: ():
  Actions[typeof DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH] => ({
    type: DO_OPEN_MAIN_MENU_WHEN_SMALL_SCREEN_SWITCH,
  }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeMainMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.mainMenuWasRequestedFromAPI()
      );
      getMainMenuFromAPI().then(
        ( response ) => {
          const menu: MainMenuLinksInterface[] = response.data.menu;
          dispatch(
            syncActionCreators.putMainMenuFromAPIToModel(menu)
          );
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  },
  makeDevicesMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesMenuWasRequestedFromAPI()
      );
      getDevicesMenuFromAPI().then(
        ( response ) => {
          const devices: MainMenuLinksInterface[] = 
            response.data.devices_list;
          dispatch(
            syncActionCreators.putDevicesMenuFromAPIToModel(devices)
          );          
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  }
};