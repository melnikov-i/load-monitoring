import { combineReducers } from 'redux';

import { IMenuItem, IUser } from '@src/core/interfaces';

import {
  CHANGE_MENU_LOADED_KEY,
  CHANGE_ERROR_KEY,
  CHANGE_DROPPED_MENU_ITEM_ID,
  CREATE_USERINFO,
  CREATE_MAIN_MENU,
  SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE,
  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN,
  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN,
  TURN_ON_SUBMENU_ACTIVE,
  TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN,
  TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN,
} from './'

export type State = {
  readonly isMenuLoaded: boolean,
  readonly isError: boolean,
  readonly droppedMenuItemId: string,
  readonly userinfo: IUser,
  readonly mainMenuCollection: IMenuItem[],
  readonly pageMenuSimpleItemActive: string,
  readonly pageMenuItemMultiActiveOnBigScreen: string,
  readonly pageMenuItemMultiActiveOnSmallScreen: string,
  readonly isSubmenuActiveOnSmallScreen: boolean,
  readonly isSubmenuActiveOnBigScreen: boolean,
};

const _userinfo: IUser = {
  login: '',
  links: [],
}

export const reducer = combineReducers<State>({
  /** 
   * [pageInitialize]
   * становится true после успешного получения
   * данных о всех меню с сервера
   */
  isMenuLoaded: (state = false, action) => {
    switch (action.type) {
      case CHANGE_MENU_LOADED_KEY:
        return action.payload;
      default: return state;
    }
  },

  /**
   * [pageInitialize]
   * становится true, если при запросе данных о всех меню
   * с сервера пришла ошибка.
   */
  isError: (state = false, action) => {
    switch (action.type) {
      case CHANGE_ERROR_KEY:
        return action.payload;
      default: return state;
    }
  },

  /**
   * [PageUserinfo]
   * Хранит ИД выбранного элемента выпадающего меню
   */
  droppedMenuItemId: (state = '', action) => {
    switch (action.type) {
      case CHANGE_DROPPED_MENU_ITEM_ID: return action.payload;
      default: return state;
    }
  },

  /**
   * [PageUserinfo]
   * Данные для компонента пользовательской информации 
   */
  userinfo: (state = _userinfo, action) => {
    switch (action.type) {
      case CREATE_USERINFO: return action.payload;
      default: return state;
    }
  },

  /**
   * [PageMenu] 
   * Данные для основного меню
   */
  mainMenuCollection: (state = [], action ) => {
    switch (action.type) {
      case CREATE_MAIN_MENU: return action.payload;
      default: return state;
    }
  },

  /**
   * [PageMenuSimpleItem / pageSubmenuItem]
   * Идентификатор активного простого пункта основного меню.
   * Участвует в переключении состояния только в простых пунктах
   * основного меню.
   */
  pageMenuSimpleItemActive: (state = '', action) => {
    switch (action.type) {
      /** Присваивает идентификатор */
      case SWITCH_PAGE_MENU_SIMPLE_ITEM_ACTIVE: return action.payload;
      default: return state;
    }
  },

  /**
   * [pageMenuMultiItem]
   *  Идентификатор активного составного пункта основного меню
   */
  pageMenuItemMultiActiveOnBigScreen: (state = '', action) => {
    switch (action.type) {
      /** Присваивает идентификатор */
      case SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_BIG_SCREEN: return action.payload;
      default: return state;
    }
  },

  /**
   * [pageMenuMultiItem]
   * Идентификатор активного составного пункта меню на малых экранах.
   * Необходим для придания разного поведения для меню на большом и малом дисплеях.
   */
  pageMenuItemMultiActiveOnSmallScreen: (state = '', action) => {
    switch (action.type) {
      case SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE_ON_SMALL_SCREEN: return action.payload;
      default: return state;
    }
  },

  /**
   * [PageLayout / PageMenuSimpleItem / pageMenuMultiItem]
   * Переключатель, раскрывающий или убирающий меню для составного элемента меню
   * на малых экранах
   */
  isSubmenuActiveOnSmallScreen: (state = false, action) => {
    switch (action.type) {
      case TURN_ON_SUBMENU_ACTIVE: return true;
      case TURN_OFF_SUBMENU_ACTIVE_ON_SMALL_SCREEN: return false;
      default: return state;
    }
  },

  isSubmenuActiveOnBigScreen: (state = false, action) => {
    switch (action.type) {
      case TURN_ON_SUBMENU_ACTIVE: return true;
      case TURN_OFF_SUBMENU_ACTIVE_ON_BIG_SCREEN: return false;
      default: return state;
    }
  }
});