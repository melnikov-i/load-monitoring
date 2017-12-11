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

/* TEMP MENU (f0c9) */

// const menu: MainMenuLinksInterface[] = [
//     {
//       "value": "Обзор системы",
//       "to": "overview",
//       "icon": "f1e5",
//     },
//     {
//       "value": "Устройства",
//       "to": "devices",
//       "icon": "f233",
//     },
//     {
//       "value": "Сообщения",
//       "to": "messages",
//       "icon": "f003",
//     },
//     {
//       "value": "Пользователи",
//       "to": "users",
//       "icon": "f2c0",
//     },
//     {
//       "value": "Настройки",
//       "to": "options",
//       "icon": "f085",
//     },
//     {
//       "value": "Обновление агента",
//       "to": "agent_update",
//       "icon":"f021",
//     },
//     {
//       "value": "Резервные копии",
//       "to": "backups",
//       "icon": "f24d",
//     },
//   ];

// const devices: MainMenuLinksInterface[] =  [
//     {
//       "value": "ubuntutest",
//       "to": "00000000-0000-0000-0000-000c291aaea4",
//       "icon": "f17c"
//     },
//     {
//       "value": "SRVDC1",
//       "to": "5F03B658-0003-44BF-98FF-2D0A81E2863B",
//       "icon": "f17a"
//     },{
//       "value": "toolbox",
//       "to": "00000000-0000-0000-0000-e0b9a566e1c8",
//       "icon": "f17c"
//     },
//     {
//       "value": "solovievd",
//       "to": "f2e54ae3fa8646a78eaf8d93784301be",
//       "icon": "f17c"
//     },{
//       "value": "SRVDC8",
//       "to": "5F03B658-0053-44BF-98FF-2D0A81E2863B",
//       "icon": "f17a"
//     }
//   ];


export const PUT_MAIN_MENU_FROM_API_TO_MODEL =
'PUT_MAIN_MENU_FROM_API_TO_MODEL';
export const PUT_DEVICES_MENU_FROM_API_TO_MODEL =
'PUT_DEVICES_MENU_FROM_API_TO_MODEL';
export const DO_DEVICES_MENU_VIEW_SWITCH =
'DO_DEVICES_MENU_VIEW_SWITCH';

export type Actions = {
  PUT_MAIN_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_MAIN_MENU_FROM_API_TO_MODEL,
    payload: MainMenuLinksInterface[],
  },
  PUT_DEVICES_MENU_FROM_API_TO_MODEL: {
    type: typeof PUT_DEVICES_MENU_FROM_API_TO_MODEL,
    payload: MainMenuLinksInterface[],
  }
  DO_DEVICES_MENU_VIEW_SWITCH: {
    type: typeof DO_DEVICES_MENU_VIEW_SWITCH,
    payload: MainMenuLinksInterface['to'],
  }
};

// Sync Action Creators
export const syncActionCreators = {
  putMainMenuFromAPIToModel:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_MAIN_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_MAIN_MENU_FROM_API_TO_MODEL, payload
  }),
  putDevicesMenuFromAPIToModel:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_DEVICES_MENU_FROM_API_TO_MODEL] => ({
    type: PUT_DEVICES_MENU_FROM_API_TO_MODEL, payload,
  }),
  doDevicesMenuViewSwitch:
  ( payload: MainMenuLinksInterface['to'] ):
  Actions[typeof DO_DEVICES_MENU_VIEW_SWITCH] => ({
    type: DO_DEVICES_MENU_VIEW_SWITCH, payload
  }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeMainMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      getMainMenuFromAPI().then(
        ( response ) => {
          console.log('[RESPONSE_MAIN.data]:', response.data);
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
      getDevicesMenuFromAPI().then(
        ( response ) => {
          console.log('[RESPONSE_DEVICES.data]:', response.data);
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