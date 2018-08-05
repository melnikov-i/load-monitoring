// import { sendRequestToAPI } from '@src/core/libs';

import { Dispatch } from '@src/core/redux';
import { IMenuItem, IUser, ISelectSubmenu } from '@src/core/interfaces';
import {syncActionCreators as loginActionCreators} from '@src/core/redux/login';

export const CHANGE_MENU_LOADED_KEY = 'CHANGE_MENU_LOADED_KEY';
export const CHANGE_ERROR_KEY = 'CHANGE_ERROR_KEY';
export const CREATE_USERINFO = 'CREATE_USERINFO';
export const CREATE_MAIN_MENU = 'CREATE_MAIN_MENU';
export const CHANGE_DROPPED_MENU_ITEM_ID = 'CHANGE_DROPPED_MENU_ITEM_ID';
export const SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE = 'SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE';
export const SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN =
  'SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN';
export const SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN = 
  'SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN';
export const TURN_ON_SUBMENU_ACTIVE = 'TURN_ON_SUBMENU_ACTIVE';
export const TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN = 
  'TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN';
export const TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN = 
  'TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN';


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

  SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE: {
    type: typeof SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE,
    payload: string,
  },

  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN: {
    type: typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN,
    payload: string,
  },

  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN: {
    type: typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN,
    payload: string,
  }
  
  TURN_ON_SUBMENU_ACTIVE: {
    type: typeof TURN_ON_SUBMENU_ACTIVE,
  },
  
  TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN: {
    type: typeof TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN,
  },

  TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN: {
    type: typeof TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN,
  },
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
  switchPageMenuSimpleItemActive: (payload: string):
  Actions[typeof SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE] => ({
    type: SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE, payload,
  }),
  
  /** Изменяет ИД активного пункта основного меню, у которого есть подменю */
  switchPageMenuMultiItemActiveOnBigScreen: (payload: string):
  Actions[typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN] => ({
    type: SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN, payload
  }),
  
  switchPageMenuMultiItemActiveOnSmallScreen: (payload: string):
  Actions[typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN] => ({
    type: SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN, payload
  }),

  turnOnSubmenuActive: (): Actions[typeof TURN_ON_SUBMENU_ACTIVE] => ({
    type: TURN_ON_SUBMENU_ACTIVE
  }),

  turnOffSubmenuActiveOnBigScreen: (): 
  Actions[typeof TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN] => ({
    type: TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN,
  }),

  turnOffSubmenuActiveOnSmallScreen: (): 
  Actions[typeof TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN] => ({
    type: TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN,
  })
};

export const asyncActionCreators = {
  /**
   * Получение данных для построения меню от сервера, обработка и подготовка
   * данных, а также отправка их в хранилище
   */
  getAllMenusFromAPI: () => {
    return async (dispatch: Dispatch) => {
      try {
        // const requests = [
        //   sendRequestToAPI.get('/menu_data.php'),
        //   sendRequestToAPI.get('/menu_devices.php'),
        // ];

        // const [mainMenu, devicesMenu] = await Promise.all(requests);

        const mainMenu: any = {
          data: {
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
        };

        const devicesMenu: any = {
          data: {
            "devices_list": [{
              "value": "soloviev",
              "to": "d4ed7aa4-3cf2-4f2a-afc5-b650a3ba4996",
              "icon": "f17a"
            }
          ]}
        };

        if (mainMenu.data.menu !== null && devicesMenu.data.devices_list !== null) {
          /** оба меню пришли */
          const menuData: IMenuItem[] = mainMenu.data.menu.map((e: IMenuItem) => {
            switch (e.to) {
              case "devices": return {
                  ...e,
                  submenu: [{
                    "value": "Все устройства",
                    "to": "devices",
                    "icon": "f233",
                  },
                    ...devicesMenu.data.devices_list,
                  ],
                };
              default: return { ...e, submenu: [] };
            }
          });

          const userData: IUser = {
            login: mainMenu.data.user[0].login,
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
        } else {
          dispatch(loginActionCreators.userIsNotAuthorized());
        }
      } catch (error) {
        console.error('[ERROR]:', error);
        dispatch(syncActionCreators.changeErrorKey(true));
      }
    }
  },

  selectSimpleItemMainMenu: (payload: string) => {
    return (dispatch: Dispatch) => {
      /** делает активным простой элемент меню и закрывает подменю на малых экранах */
      dispatch(syncActionCreators.switchPageMenuSimpleItemActive(payload));
      dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnSmallScreen(''));
      dispatch(syncActionCreators.turnOffSubmenuActiveOnSmallScreen());
    }
  },

  /**
   * Является точкой входа в активное состояние составного итема основного меню.
   * А также является точкой выхода по умолчанию из этого состояния.
   * По умолчанию, из этого состояния элемент меню должен выйти через 10 секунд
   * (на малых экранах; на больших -- нет).
   * Если происходит какое-то иное событие, влияющее на его состояние, выход из
   * состояния по умолчанию сбрасывается.
   */
  openSubmenu: (payload: string) => {
    return (dispatch: Dispatch) => {
      /** Вход в активное состояние составного элемента меню (оба экрана) */
      dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnBigScreen(payload));
      dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnSmallScreen(payload));
      dispatch(syncActionCreators.turnOnSubmenuActive());////////
      /** Выход из активного состояния по умолчанию (только на малых экранах) */
      setTimeout(() => {
        dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnSmallScreen(''));
        dispatch(syncActionCreators.turnOffSubmenuActiveOnSmallScreen());
      }, 10000);
    }
  },

  /**
   * Обрабатывает событие, которое влияет на состояние активности элемента
   * основного меню, в составе которого есть подменю (MultiItem). Если с событием
   * переданы идентификаторы в payload, тогда состояние элемента основгого меню
   * остается активным. Если payload пуст -- состояние сбрасывается.
   */
  closeSubmenu: (payload?: string) => {
    return (dispatch: Dispatch) => {
      console.log('close');
      let maxId = setTimeout(() => {});
      while (maxId--) {
        clearTimeout(maxId);
      }

      if (payload) {
        /** закрытие меню инициировано пунктом подменю */
        dispatch(syncActionCreators.switchPageMenuSimpleItemActive(payload));
        dispatch(syncActionCreators.turnOffSubmenuActiveOnSmallScreen());
      } else {
        /** закрытие меню инициировано тем же самым составным путктом меню 
         * (оба экрана)
         */
        dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnBigScreen(''));
        dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnSmallScreen(''));
        dispatch(syncActionCreators.turnOffSubmenuActiveOnSmallScreen());
        dispatch(syncActionCreators.turnOffSubmenuActiveOnBigScreen());
      }
    }
  },

  selectSubmenu: (payload: ISelectSubmenu) => {
    return (dispatch: Dispatch) => {
      dispatch(syncActionCreators.switchPageMenuMultiItemActiveOnBigScreen(payload.parent));
      dispatch(syncActionCreators.switchPageMenuSimpleItemActive(payload.child));
      dispatch(syncActionCreators.turnOffSubmenuActiveOnSmallScreen());
    }
  }
};
