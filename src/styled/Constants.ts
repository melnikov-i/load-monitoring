import { keyframes } from 'styled-components';


/**
 * Анимация страницы по умолчанию
 */

export const emergence = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* Ширина основного меню, оторбажаемого на большом экране */
export const MENU_LAYOUT_BIG_WIDTH: string = '220px';
/* Ширина основного меню, оторбажаемого на малом экране */
export const MENU_LAYOUT_MIDDLE_WIDTH: string = '60px';


/* Медиа-запросы */

/* Минимальная ширина большого экрана */
export const BIG_SCREEN_MIN: string = '1025px';
/* Максимальная ширина среднего экрана */
export const MIDDLE_SCREEN_MAX: string = '1024px';
/* Минимальная ширина среднего экрана */
export const MIDDLE_SCREEN_MIN: string = '769px';
/* Максимальная ширина малого экрана */
export const SMALL_SCREEN_MAX: string = '768px';


/* Логотип */

/* Высота основного логотипа страницы */
export const MENU_LOGO_HEIGHT: string = '156px';


/* Страница */

/* Высота шапки */
export const TOP_HEIGHT: string = '70px';
/* Высота подвала */
export const FOOTER_HEIGHT: string = '50px';

/* Размер большой иконки Font Awesome */
export const FA_BIG_FONT_SIZE: string = '28px';
/* Размер малой иконки Font Awesome */
export const FA_SMALL_FONT_SIZE: string = '14px';
/* Размер иконки Font Avesome для страницы Overview */
export const FA_OVERVIEW_ICON_SIZE: string = '72px';
/* Высота выпадающего пункта меню */
export const DROPPED_MENU_ITEM_HEIGHT: string = '22px';



/* Страница авторизации */

/* Ширина страницы на большом экране */
export const LOGIN_LAYOUT_BIG_WIDTH: string = '780px';
/* Высота страницы на большом экране */
export const LOGIN_LAYOUT_BIG_HEIGHT: string = '300px';
/* Высота поля ввода на большом экране */
export const LOGIN_FORM_INPUT_BIG_HEIGHT: string = '34px';


/**
 * Индексы кнопок с выпадающим меню
 *
 * UserMenu     - 0
 * 
 * PageMenu     - 3
 * PageSubMenu  - 4 (devices)
 * PageSubMenu  - 5 (dashboards)
 */

