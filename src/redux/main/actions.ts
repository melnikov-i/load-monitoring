import axios from 'axios';

import {
  MainMenuLinksInterface,
  UserInterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

export const MAIN_MENU_WAS_REQUESTED_FROM_API =
  'MAIN_MENU_WAS_REQUESTED_FROM_API';
export const PUT_MAIN_MENU_FROM_API_TO_COLLECTION =
  'PUT_MAIN_MENU_FROM_API_TO_COLLECTION';
export const PUT_USER_MENU_FROM_API_TO_COLLECTION =
  'PUT_USER_MENU_FROM_API_TO_COLLECTION';
export const DEVICES_MENU_WAS_REQUESTED_FROM_API =
  'DEVICES_MENU_WAS_REQUESTED_FROM_API';
export const PUT_DEVICES_MENU_FROM_API_TO_COLLECTION =
  'PUT_DEVICES_MENU_FROM_API_TO_COLLECTION';

export const DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH = 
  'DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH';

export const DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH = 
  'DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH';
export const DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH =
  'DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH';
export const DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH =
  'DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH';
export const DO_BOTH_MENU_ON_SMALL_SCREEN_OFF =
  'DO_BOTH_MENU_ON_SMALL_SCREEN_OFF';
export const DO_USER_MENU_ON_BIG_SCREEN_SWITCH =
  'DO_USER_MENU_ON_BIG_SCREEN_SWITCH';


export type Actions = {
  MAIN_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof MAIN_MENU_WAS_REQUESTED_FROM_API,
  },
  PUT_MAIN_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_MAIN_MENU_FROM_API_TO_COLLECTION,
    payload: MainMenuLinksInterface[],
  },
  PUT_USER_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_USER_MENU_FROM_API_TO_COLLECTION,
    payload: UserInterface,
  },
  DEVICES_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_MENU_WAS_REQUESTED_FROM_API,
  },
  PUT_DEVICES_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_DEVICES_MENU_FROM_API_TO_COLLECTION,
    payload: MainMenuLinksInterface[],
  },

  DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH: {
    type: typeof DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH,
  },

  DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH: {
    type: typeof DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH,
  },
  DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH: {
    type: typeof DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH,
  },
  DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH: {
    type: typeof DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH,
  },
  DO_BOTH_MENU_ON_SMALL_SCREEN_OFF: {
    type: typeof DO_BOTH_MENU_ON_SMALL_SCREEN_OFF,
  },
  DO_USER_MENU_ON_BIG_SCREEN_SWITCH: {
    type: typeof DO_USER_MENU_ON_BIG_SCREEN_SWITCH,
  }
};

// Sync Action Creators
export const syncActionCreators = {
  mainMenuWasRequestedFromAPI: ():
  Actions[typeof MAIN_MENU_WAS_REQUESTED_FROM_API] => ({
    type: MAIN_MENU_WAS_REQUESTED_FROM_API,
  }),
  putMainMenuFromAPIToCollection:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_MAIN_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_MAIN_MENU_FROM_API_TO_COLLECTION, payload
  }),
  putUserMenuFromAPIToCollection:
  ( payload: UserInterface ):
  Actions[typeof PUT_USER_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_USER_MENU_FROM_API_TO_COLLECTION, payload,
  }),
  devicesMenuWasRequestedFromAPI: ():
  Actions[typeof DEVICES_MENU_WAS_REQUESTED_FROM_API] => ({
    type: DEVICES_MENU_WAS_REQUESTED_FROM_API,
  }),
  putDevicesMenuFromAPIToCollection:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_DEVICES_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_DEVICES_MENU_FROM_API_TO_COLLECTION, payload,
  }),

  doMainMenuOnSmallScreenSwitch:():
  Actions[typeof DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH] => ({
    type: DO_MAIN_MENU_ON_SMALL_SCREEN_SWITCH
  }),
  doDevicesMenuOnBigScreenSwitch:():
  Actions[typeof DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH] => ({
    type: DO_DEVICES_MENU_ON_BIG_SCREEN_SWITCH
  }),
  doDevicesMenuOnMiddleScreenSwitch:():
  Actions[typeof DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH] => ({
    type: DO_DEVICES_MENU_ON_MIDDLE_SCREEN_SWITCH
  }),
  doDevicesMenuOnSmallScreenSwitch:():
  Actions[typeof DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH] => ({
    type: DO_DEVICES_MENU_ON_SMALL_SCREEN_SWITCH
  }),
  doBothMenuOnSmallScreenOff:():
  Actions[typeof DO_BOTH_MENU_ON_SMALL_SCREEN_OFF] => ({
    type: DO_BOTH_MENU_ON_SMALL_SCREEN_OFF,
  }),
  doUserMenuOnBigScreenSwitch:():
  Actions[typeof DO_USER_MENU_ON_BIG_SCREEN_SWITCH] => ({
    type: DO_USER_MENU_ON_BIG_SCREEN_SWITCH,
  })
};

// Async Action Creators

const getMainMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

const getDevicesMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_devices.php')
);

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
            syncActionCreators.putMainMenuFromAPIToCollection(menu)
          );
          const user: UserInterface = response.data.user[0].login;
          return user;
        }
      )
      .then(
        ( user ) => {
          dispatch(
            syncActionCreators.putUserMenuFromAPIToCollection(user)
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
          if ( response.data.devices_list !== null ) {
            const devices: MainMenuLinksInterface[] = 
              response.data.devices_list;
            setTimeout(() => {
              dispatch(
                syncActionCreators.putDevicesMenuFromAPIToCollection(devices)
              );
            }, 1000);            
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            );
            console.log('[DEVICE_MENU_NULL]');
          }
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