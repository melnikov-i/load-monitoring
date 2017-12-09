import axios from 'axios';

import {
  MainMenuLinksInterface
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

const getMenuFromAPI = () => (
  axios.get('http://dev.monyze.ru/menu_data.php')
);

/* TEMP MENU (f0c9) */

const menu: MainMenuLinksInterface[] = [
    {
      "value": "Обзор системы",
      "to": "overview",
      "icon": "f1e5",
      childrens: undefined,
    },
    {
      "value": "Устройства",
      "to": "devices",
      "icon": "f233",
      "childrens": [
        {
          "value": "ubuntutest",
          "to": "00000000-0000-0000-0000-000c291aaea4",
          "icon": "f17c"
        },
        {
          "value": "SRVDC1",
          "to": "5F03B658-0003-44BF-98FF-2D0A81E2863B",
          "icon": "f17a"
        },{
          "value": "toolbox",
          "to": "00000000-0000-0000-0000-e0b9a566e1c8",
          "icon": "f17c"
        },
        {
          "value": "solovievd",
          "to": "f2e54ae3fa8646a78eaf8d93784301be",
          "icon": "f17c"
        },{
          "value": "SRVDC8",
          "to": "5F03B658-0053-44BF-98FF-2D0A81E2863B",
          "icon": "f17a"
        }
      ]
    },
    {
      "value": "Сообщения",
      "to": "messages",
      "icon": "f003",
      childrens: undefined,
    },
    {
      "value": "Пользователи",
      "to": "users",
      "icon": "f2c0",
      childrens: undefined,
    },
    {
      "value": "Настройки",
      "to": "options",
      "icon": "f085",
      childrens: undefined,
    },
    {
      "value": "Обновление агента",
      "to": "agent_update",
      "icon":"f021",
      childrens: undefined,
    },
    {
      "value": "Резервные копии",
      "to": "backups",
      "icon": "f24d",
      childrens: undefined,
    },
  ];


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
  ( payload: MainMenuLinksInterface[] ):
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
        dispatch(
          syncActionCreators.putMenuFromAPIToModel(menu)
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
};