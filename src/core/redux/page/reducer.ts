import { combineReducers } from 'redux';

import { IMenuItem, IUser } from '@src/core/interfaces';

import {
  CHANGE_MENU_LOADED_KEY,
  CHANGE_ERROR_KEY,
  CHANGE_DROPPED_MENU_ITEM_ID,
  CREATE_USERINFO,
  CREATE_MAIN_MENU,
  SWITCH_PAGE_MENU_ITEM_ACTIVE,
  SWITCH_MENU_ITEM_ON_SMALL_SCREEN,
} from './'

import { USER_IS_NOT_AUTHORIZED } from '../login';

export type State = {
  readonly isMenuLoaded: boolean,
  readonly isError: boolean,
  readonly droppedMenuItemId: string,
  readonly userinfo: IUser,
  readonly mainMenuCollection: IMenuItem[],
  readonly pageMenuItemActive: string,
  readonly isMenuItemActiveOnSmallScreen: string
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
   * [PageMenu]
   * Идентификатор активного простого пункта основного меню 
   */
  pageMenuItemActive: (state = '', action) => {
    switch (action.type) {
      case SWITCH_PAGE_MENU_ITEM_ACTIVE:
        return action.payload;
      case USER_IS_NOT_AUTHORIZED:
        return '';
      default:
        return state;
    }
  },

  /**
   * [PageLayout / PageMenuItem]
   * Переключатель, раскрывающий или убирающий меню для составного элемента меню
   * на малых экранах
   */
  isMenuItemActiveOnSmallScreen: (state = '0', action) => {
    switch (action.type) {
      case SWITCH_MENU_ITEM_ON_SMALL_SCREEN: return (state === '0') ? '1' : '0';
      default: return state;
    }
  },   
});