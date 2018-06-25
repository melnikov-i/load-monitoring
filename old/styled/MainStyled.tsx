import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  SMALL_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  BIG_SCREEN_MIN,
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  FOOTER_HEIGHT,
  MENU_LOGO_HEIGHT,
  FA_BIG_FONT_SIZE,
  FA_SMALL_FONT_SIZE,
  DROPPED_MENU_ITEM_HEIGHT,
  TOP_HEIGHT,
  emergence,
} from '@src/styled';

/**
 * Основной блок каркаса страницы
 * @return {React.Component}
 */
export const PageLayout = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
`;

/**
 * Колонка с основным меню
 * В зависимости от ширины экрана может быть разной ширины
 * В зависимости от значения входного параметра показывается или
 * скрывается на дисплеях малого размера путем задания отрицательного
 * отступа.
 * @param {boolean} isMenuOpenedOnSmallScreen
 * @return {React.Component}
 */
export const PageMenu = styled.div`
  width: ${ MENU_LAYOUT_BIG_WIDTH};
  display: inline-block;
  vertical-align: top;
  min-height: 100vh;
  margin-bottom: -${ FOOTER_HEIGHT};
  &::before {
    content: "";
    display: block;
    width: ${ MENU_LAYOUT_BIG_WIDTH};
    min-height: 100%;
    height: auto;
    background-color: #2f4050;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  @media screen
    and ( min-width: ${ MIDDLE_SCREEN_MIN} )
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
      &::before {
        width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
      }
    };
  @media screen
    and ( max-width: ${ SMALL_SCREEN_MAX} ) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
      margin-left: ${( props: { isMenuOpenedOnSmallScreen: boolean } ) => (
        props.isMenuOpenedOnSmallScreen
          ? '0' : `-${MENU_LAYOUT_MIDDLE_WIDTH}`
      )};
      &::before {
        width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
        margin-left: ${( props: { isMenuOpenedOnSmallScreen: boolean } ) => (
          props.isMenuOpenedOnSmallScreen
            ? '0' : `-${MENU_LAYOUT_MIDDLE_WIDTH}`
        )};
      }
    };
`;

/**
 * Колонка основного контента
 * В зависимости от ширины экрана может быть разной ширины
 * @param {boolean} isMenuOpenedOnSmallScreen
 * @return {React.Component}
 */
export const PageWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc( 100% - ${ MENU_LAYOUT_BIG_WIDTH} );
  min-height: 100vh;
  margin-bottom: -${ FOOTER_HEIGHT};
  @media screen 
    and ( min-width: ${ MIDDLE_SCREEN_MIN} ) 
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      width: calc( 100% - ${ MENU_LAYOUT_MIDDLE_WIDTH} );
    }
  @media screen
    and ( max-width: ${ SMALL_SCREEN_MAX} ) {
      width: ${( props: { isMenuOpenedOnSmallScreen: boolean } ) => (
        props.isMenuOpenedOnSmallScreen
          ? `calc( 100% - ${MENU_LAYOUT_MIDDLE_WIDTH} )`
          : '100%'
      )};
    }
`;

/**
 * Шапка страницы
 * @return {React.Component}
 */
export const PageHeader = styled.div`
  width: 100%;
  height: ${ TOP_HEIGHT};
  background-color: #f3f3f4;
  border-bottom: 1px solid #e7eaec;
  box-sizing: border-box;
  position: relative;
`;

/**
 * Обертка для кнопки выхода в шапке страницы
 * @return {React.Component}
 */
export const PageHeaderExitWrapper = styled.div`
  width: ${ TOP_HEIGHT};
  height: ${ TOP_HEIGHT};
  line-height: ${ TOP_HEIGHT};
  display: block;
  position: absolute;
  top: 0;
  right: 20px;
`;

/**
 * Кнопка выхода в шапке страницы
 * @return {React.Component}
 */
export const PageHeaderExitLink = styled(NavLink) `
  color: #999c9e;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: #23527c;
  }
  &::before {
    content: "\f08b";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 8px;
  }
`;

/**
 * Блок с основным контентом страницы
 * @return {React.Component}
 */
export const PageContent = styled.div`
  overflow-x: hidden;
  width: 100%;
  background-color: #f3f3f4;
  min-height: calc( 100vh - ${ TOP_HEIGHT} - ${FOOTER_HEIGHT} );
  padding-bottom: ${ FOOTER_HEIGHT};
`;

/**
 * Подвал страницы
 * @return {React.Component}
 */
export const PageFooter = styled.div`
  width: 100%;
  height: ${ FOOTER_HEIGHT};
  box-sizing: border-box;
  border-top: 1px solid #e7eaec;
  position: relative;
  background-color: #fff;
`;

/**
 * Копирайт страницы
 * @return {React.Component}
 */
export const PageFooterCopyright = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: calc( ${ FA_SMALL_FONT_SIZE} - 2px );
  font-weight: 600;
  color: #676a6c;
  &::before {
    content: "\f1f9";
    font-family: 'FontAwesome';
    font-size: calc( ${ FA_SMALL_FONT_SIZE} - 2px );
    color: #676a6c;
    margin-right: 3px;
  }
  &::after {
    content: "${ new Date().getFullYear()}";
    font-size: calc( ${ FA_SMALL_FONT_SIZE} - 2px );
    color: #676a6c;
    margin-left: 3px;
  }
`;

/**
 * Кнопка открытия меню на малых экранах
 * На больших экранах скрыта.
 * @param {boolean} isMenuOpenedOnSmallScreen
 * @return {React.Component}
 */
export const PageSmallMenuAnchor = styled.a`
  display: none;
  @media screen
    and ( max-width: ${ SMALL_SCREEN_MAX} ) {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 15px;
      left: ${( props: { isMenuOpenedOnSmallScreen: boolean } ) => (
        props.isMenuOpenedOnSmallScreen
          ? `calc( ${MENU_LAYOUT_MIDDLE_WIDTH} + 15px )`
          : '15px'
      )};
      z-index: 1;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: #19aa8d;
      border-radius: 4px;
      &::before {
        content: "\f0c9";
        font-family: 'FontAwesome';
        font-weight: normal;
        font-size: ${ FA_BIG_FONT_SIZE};
        color: #fff;
        padding: 0 8px;
      }
    }
`;

/**
 * Обертка для логотипа
 * @return {React.Component}
 */
export const PageLogoWrapper = styled.div`
  width: 100%;
  height: ${ MENU_LOGO_HEIGHT};
  background-image: url( ${ HeaderProfile} );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  @media screen 
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      background-image: none;
      height: 30px;
      padding: 0;
    }
`;

/**
 * Логотип
 * @return {React.Component}
 */
export const PageLogo = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  background-image: url( ${ Logo} );
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 60%;
  @media screen 
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      background-image: none;
      &::before {
        content: "Monyze";
        display: block;
        font-size: 14px;
        font-weight: 600;
        height: 70px;
        line-height: 70px;
        color: #fff;
        text-align: center;
      }
    }
`;

/**
 * Кнопка вызова пользовательского меню под логотипом
 * @param {boolean} isClicked
 * @return {React.Component}
 */
export const UserMenuAnchor = styled.a`
  width: 100%;
  height: ${ DROPPED_MENU_ITEM_HEIGHT};
  line-height: ${ DROPPED_MENU_ITEM_HEIGHT};
  position: relative;
  top: 65px;
  background-color: transparent;
  text-align: left;  
  font-size: 13px;
  font-weight: 600;
  color: #dfe4fe;
  cursor: pointer;
  &::selection {
    background-color: transparent;
  }
  &::after {
    width: ${ DROPPED_MENU_ITEM_HEIGHT};
    height: ${ DROPPED_MENU_ITEM_HEIGHT};
    line-height: ${ DROPPED_MENU_ITEM_HEIGHT};
    text-align: center;
    content: "${( props: { isClicked: boolean } ) => (
      props.isClicked ? "\f078" : "\f053"
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: calc( ${ FA_SMALL_FONT_SIZE} - 4px );
    color: #dfe4fe;
    margin-left: 10px;
  }
  &:focus {
    outline: 0 solid transparent;
  }  
  @media screen 
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      display: none;
    }
`;

/**
 * Список пунктов пользовательского меню под логотипом
 * @param {boolean} isClicked
 * @return {React.Component}
 */
export const UserMenuLayout = styled.ul`
  display: ${( props: { isClicked: boolean } ) => (
    props.isClicked ? 'block' : 'none'
  )};
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 3px 0;
  position: relative;
  top: 70px;
  left: 0;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX}) {
      display: none;
    }
  animation-name: ${ emergence};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

/**
 * Элемент списка пользовательского меню под логотипом
 * @return {React.Component}
 */
export const UserMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

/**
 * Содержимое элемента списка пользовательского меню
 * под логотипом
 * @return {React.Component}
 */
export const UserMenuLink = styled(NavLink) `
  display: block;
  text-decoration: none;
  display: block;
  height: ${ DROPPED_MENU_ITEM_HEIGHT};
  line-height: ${ DROPPED_MENU_ITEM_HEIGHT};
  font-size: 13px;
  font-weight: normal;
  color: #333;
  white-space: nowrap;
  padding: 3px 10px;
  &::selection {
    background-color: transparent;
  }
  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  }
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      display: none;
    }
`;

/**
 * Каркас основного меню страницы
 * @return {React.Component}
 */
export const PageMenuLayout = styled.ul`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 50px;
  position: relative;
  z-index: 1;
  @media screen 
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      margin-top: 40px;
      padding-top: 5px;
    }
`;

/**
 * Элемент основного меню страницы
 * @param {boolean} isActive
 * @return {React.Component}
 */
export const PageMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  display: block;
  position: relative;
  transition: ${( props: { isActive: boolean } ) => (
    props.isActive
      ? 'border-left 0.4s' : 'all 0s'
  )};
  border-left: ${( props: { isActive: boolean } ) => (
    props.isActive
      ? '4px solid #19aa8d' : 'none'
  )};
  background-color: ${( props: { isActive: boolean } ) => (
    props.isActive
      ? '#293846' : 'transparent'
  )};
  color: ${( props: { isActive: boolean } ) => (
    props.isActive
      ? '#fff' : '#a7b1c2'
  )};
  &:hover {
    background-color: #293846;
    color: #fff;
  }
  &::selection {
    background-color: transparent;
  }
`;

/**
 * Вложенная ссылка простого элемента основного меню страницы
 * @param {string | null} icon
 * @return {React.Component}
 */
export const PageMenuItemLink = styled(NavLink) `
  display: block;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: inherit;
  padding: 14px 20px 14px 25px;
  background-color: transparent;
  &::selection {
    background-color: transparent;
  }
  &::before {
    content: "\\${( props: { icon: string | null } ) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 6px;
  }
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      font-size: 0;
      padding: 10px 14px 10px 14px;
      &::before {
        font-size: ${ FA_BIG_FONT_SIZE};
        margin-right: 0;
      }
    }
`;

/**
 * Вложенная ссылка составного элемента основного меню страницы
 * (с вложенным подменю)
 * @param {boolean} isActive
 * @param {string | null} icon
 * @return {React.Component}
 */
interface PageMenuItemAnchorProps {
  icon: string | null;
  isActive: boolean;
}
export const PageMenuItemAnchor = styled.a`
  display: block;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 14px 20px 14px 25px;
  color: inherit;
  &::before {
    content: "\\${( props: PageMenuItemAnchorProps) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 6px;
  }
  @media screen
    and ( min-width: ${ BIG_SCREEN_MIN} ) {
      &::after {
        content: "\\${( props: PageMenuItemAnchorProps) => (
          props.isActive ? 'f107' : 'f104'
        )}";
        position: absolute;
        top: 16px;
        right: 20px;
        font-family: 'FontAwesome';
        font-weight: normal;
        font-size: ${ FA_SMALL_FONT_SIZE};
        margin-right: 6px;
      }      
    }
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      font-size: 0;
      padding: 10px 14px 10px 14px;
      &::before {
        font-size: ${ FA_BIG_FONT_SIZE};
        margin-right: 0;
      }
    }
`;

/**
 * Каркас вложенного меню страницы
 * @return {React.Component}
 */
interface PageSubMenuLayoutProps {
  isActive: boolean,
  subMenuHeight: string
}
export const PageSubMenuLayout = styled.ul`
  display: block;
  transition: height .35s;
  height: ${( props: PageSubMenuLayoutProps) => (
    props.isActive ? props.subMenuHeight + 'px' : '0'
  )};
  overflow: hidden;
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      display: block;
      width: calc( 100% - ${ MENU_LAYOUT_MIDDLE_WIDTH} - 30px );
      position: fixed;
      top: calc( ${ MENU_LAYOUT_MIDDLE_WIDTH} / 4 );
      left: calc( ${ MENU_LAYOUT_MIDDLE_WIDTH} + 15px );
      transform: ${( props: PageSubMenuLayoutProps) => (
        props.isActive ? 'translateX(0)' : 'translateX(20px)'
      )};
      z-index: 10;
      transition: height 0s;
      transition: transform 1s;
      overflow: ${( props: PageSubMenuLayoutProps) => (
        props.isActive ? 'visible' : 'hidden'
      )};
      &::before {
        content: "";
        display: ${( props: PageSubMenuLayoutProps) => (
          props.isActive ? 'block' : 'none'
        )};
        position: fixed;
        width: 100%;
        height: calc( 100vh - 30px );
        background-color: #293846;
        opacity: 0.9;
      }
    }
`;

/**
 * Кнопка закрытия выпадающего меню, оторбажаемая на малых экранах
 * @param {boolean} isActive
 * @return {React.Component}
 */
export const PageSubMenuCloseAnchor = styled.a`
  display: none;
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      display: ${( props: { isActive: boolean } ) => (
        props.isActive ? 'block' : 'none'
      )};
      color: #a7b1c2;
      position: fixed;
      right: 0;
      width: 46px;
      height: 46px;
      cursor: pointer;
      z-index: 200;
      &:hover {
        color: #fff;
        background-color: #293846;
      }      
      &::before {
        content: "\002b";
        display: block;
        font-weight: normal;
        font-size: 54px;
        margin-top: -16px;
        text-align: center;
        transform: rotateZ(45deg)
      }
    }
`;

/**
 * Элемент подменю
 * @param {boolean} isActive
 * @return {React.Component}
 */
export const PageSubMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  display: block;
  color: ${( props: { isActive: boolean } ) => (
    props.isActive ? '#fff' : '#a7b1c2'
  )};
  &:hover {
    color: #fff;
  }
  &::selection {
    background-color: transparent;
  }
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      width: 33.33%;
      display: inline-block;
      vertical-align: top;
      position: relative;
      z-index: 100;
    }
`;

/**
 * Вложенная ссылка элемента подменю
 * @param {string | null} icon
 * @return {React.Component}
 */
export const PageSubMenuAnchor = styled(NavLink) `
  display: block;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 7px 10px 7px 52px;
  background-color: #293846;
  color: inherit;
  height: 32px;
  box-sizing: border-box;
  &:hover {
    color: #fff;
  }
  &::selection {
    background-color: transparent;
  }
  &::before {
    content: "\\${( props: { icon: string | null } ) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 6px;
  }
  @media screen
    and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
      padding: 10px 14px 10px 14px;
      height: auto;
      background-color: transparent;
      &:hover {
        background-color: #293846;
      }
      &::before {
        content: "\\${( props: { icon: string | null } ) => (
          props.icon !== null ? props.icon : 'f05e'
        )}";
        display: inline-block;
        vertical-align: sub;
        font-family: 'FontAwesome';
        font-weight: normal;
        font-size: ${ FA_BIG_FONT_SIZE};
        margin-right: 6px;
      }
    }
`;
