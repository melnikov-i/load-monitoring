// import { sendRequestToAPI } from '@src/core/libs';

import { Dispatch } from '@src/core/redux';
import { IMenuItem, IUser } from '@src/core/interfaces';

export const CHANGE_MENU_LOADED_KEY = 'CHANGE_MENU_LOADED_KEY';
export const CHANGE_ERROR_KEY = 'CHANGE_ERROR_KEY';
export const CREATE_USERINFO = 'CREATE_USERINFO';
export const CREATE_MAIN_MENU = 'CREATE_MAIN_MENU';
export const CHANGE_DROPPED_MENU_ITEM_ID = 'CHANGE_DROPPED_MENU_ITEM_ID';
export const SWITCH_PAGE_MENU_ITEM_ACTIVE = 'SWITCH_PAGE_MENU_ITEM_ACTIVE';
export const SWITCH_MENU_ITEM_ON_SMALL_SCREEN = 'SWITCH_MENU_ITEM_ON_SMALL_SCREEN';

export type Actions = {
  CHANGE_MENU_LOADED_KEY: {
    type: typeof CHANGE_MENU_LOADED_KEY,
    payload: boolean,
  },

  CHANGE_ERROR_KEY: {
    type: typeof CHANGE_ERROR_KEY,
    payload: boolean,
  },

  CREATE_USERINFO: {
    type: typeof CREATE_USERINFO,
    payload: IUser,
  },

  CREATE_MAIN_MENU: {
    type: typeof CREATE_MAIN_MENU,
    payload: IMenuItem[],
  },

  CHANGE_DROPPED_MENU_ITEM_ID: {
    type: typeof CHANGE_DROPPED_MENU_ITEM_ID,
    payload: string,
  },

  SWITCH_PAGE_MENU_ITEM_ACTIVE: {
    type: typeof SWITCH_PAGE_MENU_ITEM_ACTIVE,
    payload: string,
  },

  SWITCH_MENU_ITEM_ON_SMALL_SCREEN: {
    type: typeof SWITCH_MENU_ITEM_ON_SMALL_SCREEN,
  }
};

export const syncActionCreators = {
  /** управляет ключем, по которому определяется наличие загруженного меню */
  changeMenuLoadedKey: (payload: boolean): Actions[typeof CHANGE_MENU_LOADED_KEY] => ({
    type: CHANGE_MENU_LOADED_KEY, payload,
  }),

  /** управляет ключем, управляющим отображением в случае получения ошибки */
  changeErrorKey: (payload: boolean): Actions[typeof CHANGE_ERROR_KEY] => ({
    type: CHANGE_ERROR_KEY, payload,
  }),

  /** Помещает в хранилище данные блока с пользовательской информацией */
  createUserinfo: (payload: IUser): Actions[typeof CREATE_USERINFO] => ({
    type: CREATE_USERINFO, payload,
  }),

  /** Помещает в хранилище данные основного меню */
  createMainMenu: (payload: IMenuItem[]): Actions[typeof CREATE_MAIN_MENU] => ({
    type: CREATE_MAIN_MENU, payload,
  }),

  /** Изменяет в хранилище ИД выпадающего меню на выбранное */
  changeDroppedMenuItemID: (payload: string): 
  Actions[typeof CHANGE_DROPPED_MENU_ITEM_ID] => ({
    type: CHANGE_DROPPED_MENU_ITEM_ID, payload,
  }),

  /** Изменяет ИД активного простого пункта основного меню */
  switchPageMenuItemActive: (payload: string):
  Actions[typeof SWITCH_PAGE_MENU_ITEM_ACTIVE] => ({
    type: SWITCH_PAGE_MENU_ITEM_ACTIVE, payload,
  }),

  switchMenuItemOnSmallScreen: (): Actions[typeof SWITCH_MENU_ITEM_ON_SMALL_SCREEN] => ({
    type: SWITCH_MENU_ITEM_ON_SMALL_SCREEN
  })
};

export const asyncActionCreators = {
  getAllMenusFromAPI: () => {
    return async (dispatch: Dispatch) => {
      try {
        // const requests = [
        //   sendRequestToAPI.get('/menu_data.php'),
        //   sendRequestToAPI.get('/menu_devices.php'),
        // ];

        // const [menu, submenu] = await Promise.all(requests);

        const mainMenu = {
          data: {
            menu: {
              "user": [
                { "login": "Ivan" }
              ], 
              "menu": [{ 
                  "value": "Обзор системы",
                  "to": "overview",
                  "icon": "f1e5"
                }, {
                  "value": "Мои дашборды",
                  "to": "dashboards",
                  "icon": "f080"
                }, {
                  "value": "Устройства",
                  "to": "devices",
                  "icon": "f233"
                }, {
                  "value": "Сообщения",
                  "to": "messages",
                  "icon": "f003"
                }, {
                  "value": "Пользователи",
                  "to": "users",
                  "icon": "f2c0"
                }, {
                  "value": "Настройки",
                  "to": "options",
                  "icon": "f085"
                }, {
                  "value": "Обновление агента",
                  "to": "agent_update",
                  "icon": "f021"
                }, {
                  "value": "Резервные копии",
                  "to": "backups",
                  "icon": "f24d"
                }],
                "dashboards": [] }
          }
        };

        const devicesMenu = {
          data: {
            devices_list: {
              "devices_list": [{
                "value": "soloviev",
                "to": "d4ed7aa4-3cf2-4f2a-afc5-b650a3ba4996",
                "icon": "f17a"
              }
            ]}
          }
        }

        if (mainMenu.data.menu !== null && devicesMenu.data.devices_list !== null) {
          /** оба меню пришли */
          console.log('[PAGE].action menu:', mainMenu);
          console.log('[PAGE].action submenu:', devicesMenu);

          const menuData: IMenuItem[] = mainMenu.data.menu.menu.map((e) => {
            switch (e.to) {
              case "devices": return {
                  ...e,
                  sumbenu: [{
                    "value": "Все устройства",
                    "to": "devices",
                    "icon": "f233",
                  },
                    ...devicesMenu.data.devices_list.devices_list,
                  ],
                };
              default: return { ...e, submenu: [] };
            }
          });

          const userData: IUser = {
            login: mainMenu.data.menu.user[0].login,
            links: [{
                to: 'details',
                value: 'Мои данные',
              },{
                to: 'exit',
                value: 'Выход',
              }],
          };

          dispatch(syncActionCreators.createUserinfo(userData));
          dispatch(syncActionCreators.createMainMenu(menuData));
          dispatch(syncActionCreators.changeMenuLoadedKey(true));
        }
        
      } catch (error) {
        dispatch(syncActionCreators.changeErrorKey(true));
      }
    }
  }
};
