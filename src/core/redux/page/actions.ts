import { sendRequestToAPI } from '@src/core/libs';

import { Dispatch } from '@src/core/redux';

export const CHANGE_MENU_LOADED_KEY = 'CHANGE_MENU_LOADED_KEY';
export const CHANGE_ERROR_KEY = 'CHANGE_ERROR_KEY';

export type Actions = {
  CHANGE_MENU_LOADED_KEY: {
    type: typeof CHANGE_MENU_LOADED_KEY,
  },

  CHANGE_ERROR_KEY: {
    type: typeof CHANGE_ERROR_KEY,
  },
};

export const syncActionCreators = {
  changeMenuLoadedKey: (): Actions[typeof CHANGE_MENU_LOADED_KEY] => ({
    type: CHANGE_MENU_LOADED_KEY,
  }),

  changeErrorKey: (): Actions[typeof CHANGE_ERROR_KEY] => ({
    type: CHANGE_ERROR_KEY,
  }),
};

export const asyncActionCreators = {
  getAllMenusFromAPI: () => {
    return async (dispatch: Dispatch) => {
      try {
        const requests = [
          sendRequestToAPI.get('/menu_data.php'),
          sendRequestToAPI.get('/menu_devices.php'),
        ];

        const [menu, submenu] = await Promise.all(requests);
        // console.log('[PAGE].action data:', data);
        if (menu.data.menu !== null && submenu.data.devices_list !== null) {
          console.log('[PAGE].action menu:', menu);
          console.log('[PAGE].action submenu:', submenu);
        }
        
      } catch (error) {
        dispatch(syncActionCreators.changeErrorKey());
      }
    }
  }
};

// { "devices_list": [{ "value": "soloviev", "to": "d4ed7aa4-3cf2-4f2a-afc5-b650a3ba4996", "icon": "f17a" }] }
// { "user": [{ "login": "Ivan" }], "menu": [{ "value": "Обзор системы", "to": "overview", "icon": "f1e5" }, { "value": "Мои дашборды", "to": "dashboards", "icon": "f080" }, { "value": "Устройства", "to": "devices", "icon": "f233" }, { "value": "Сообщения", "to": "messages", "icon": "f003" }, { "value": "Пользователи", "to": "users", "icon": "f2c0" }, { "value": "Настройки", "to": "options", "icon": "f085" }, { "value": "Обновление агента", "to": "agent_update", "icon": "f021" }, { "value": "Резервные копии", "to": "backups", "icon": "f24d" }], "dashboards": [] }