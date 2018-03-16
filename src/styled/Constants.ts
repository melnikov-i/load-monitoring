import { keyframes } from 'styled-components';

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

export const MENU_LAYOUT_BIG_WIDTH: string = '220px';
export const MENU_LAYOUT_MIDDLE_WIDTH: string = '60px';

export const MIDDLE_SCREEN_MAX: string = '1024px';
export const MIDDLE_SCREEN_MIN: string = '769px';
export const SMALL_SCREEN_MAX: string = '768px';

export const MENU_LOGO_HEIGHT: string = '156px';
export const TOP_HEIGHT: string = '70px';
export const FOOTER_HEIGHT: string = '50px';

export const BIG_MAIN_LINK_HEIGHT: string = '46px';
export const BIG_USER_FAKE_LINK_HEIGHT: string = '22px';

export const FA_BIG_FONT_SIZE: string = '28px';
export const FA_SMALL_FONT_SIZE: string = '14px';
export const FA_OVERVIEW_ICON_SIZE: string = '72px';

export const LOGIN_LAYOUT_BIG_WIDTH: string = '780px';
export const LOGIN_LAYOUT_BIG_HEIGHT: string = '300px';
export const LOGIN_FORM_INPUT_BIG_HEIGHT: string = '34px';