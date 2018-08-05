import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  // SMALL_SCREEN_MAX,
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
  colors,
} from '@src/core/styled';

/** ### PageLayout ### */

/**
 * Основной блок каркаса страницы
 * @return {React.Component}
 */
export const Layout = styled.div`
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
 * active показывает, является ли меню раскрытым, отображаясь на малых
 * экранах.
 * В данном контейнере происходит увеличение ширины от ширины малого
 * экрана до ширины большого экрана. 
 * При раскрытии меню эта часть раскрытия  меню выполняется во вторую очередь.
 * При закрытии -- тоже во вторую.
 * @param {boolean} isMenuOpenedOnSmallScreen
 * @return {React.Component}
 */
export const PageLayoutMenuCollumn = styled.div`
  width: ${ MENU_LAYOUT_BIG_WIDTH };
  display: inline-block;
  vertical-align: top;
  background-color: #2f4050;
  transition: width 0.4s ease 0.4s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: ${ MIDDLE_SCREEN_MAX }) {
    width: ${(props: { isSubmenuActiveOnSmallScreen: boolean }) => (
      props.isSubmenuActiveOnSmallScreen
        ? `${MENU_LAYOUT_BIG_WIDTH}` : `${MENU_LAYOUT_MIDDLE_WIDTH}`
    )};
  }
`;

/**
 * Колонка основного контента
 * В зависимости от ширины экрана может быть разной ширины.
 * @param {boolean} isMenuOpenedOnSmallScreen
 * @return {React.Component}
 */
export const PageLayoutContentCollumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  min-height: 100vh;
  margin-bottom: -${ FOOTER_HEIGHT};
  padding-left: ${ MENU_LAYOUT_BIG_WIDTH};
  box-sizing: border-box;
  transition: padding-left 0.4s;
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
    padding-left: ${MENU_LAYOUT_MIDDLE_WIDTH};
  }
`;

/**
 * Шапка страницы
 * @return {React.Component}
 */
export const PageLayoutHeader = styled.div`
  width: 100%;
  height: ${ TOP_HEIGHT};
  background-color: ${colors.blueGrey};
  border-bottom: 1px solid ${colors.lightGrey2};
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
export const PageHeaderExitLink = styled(NavLink)`
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
 * Подвал страницы
 * @return {React.Component}
 */
export const PageLayoutFooter = styled.div`
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
export const PageLayoutFooterCopyright = styled.div`
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

/** ### PageUserinfo ### */

/**
 * Обертка для блока с информацией пользователя
 * @return {React.Component}
 */
export const PageUserinfoWrapper = styled.div`
  width: 100%;
  height: ${ MENU_LOGO_HEIGHT};
  background-image: url( ${ HeaderProfile} );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  box-sizing: border-box;
  position: relative;
  @media screen 
  and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    background-image: none;
    height: 30px;
    padding: 0;
  }
  `;

/**
 * Логотип в блоке с информацией пользователя
 * @return {React.Component}
 */
export const PageUserinfoLogo = styled.div`
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
export const PageUserinfoMenuAnchor = styled.a`
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
    content: "${(props: { isClicked: boolean }) => (
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
export const PageUserinfoMenuLayout = styled.ul`
  display: ${(props: { isClicked: boolean }) => (
    props.isClicked ? 'block' : 'none'
  )};
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 3px 0;
  position: relative;
  top: 70px;
  left: 0;
  z-index: 2;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX}) {
      display: none;
    }
  animation-name: ${ emergence };
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

/**
 * Элемент списка пользовательского меню под логотипом
 * @return {React.Component}
 */
export const PageUserinfoMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

/**
 * Содержимое элемента списка пользовательского меню
 * под логотипом
 * @return {React.Component}
 */
export const PageUserinfoMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  display: block;
  height: ${ DROPPED_MENU_ITEM_HEIGHT };
  line-height: ${ DROPPED_MENU_ITEM_HEIGHT };
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
    and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
      display: none;
    }
`;

/** [PageMenu] */

/**
 * Контейнер с основным меню
 * @return {React.Component}
 */
export const PageMenuContainer = styled.ul`
  width: 100%;
  display: block;
  margin-top: 10px;
  padding-bottom: 50px;
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
    margin-top: 40px;
    padding-top: 5px;
  }
`;

/** [PageMenuItem / PageMenuMultiItem] */

/**
 * Элемент основного меню страницы
 * @param {boolean} isActive
 * @return {React.Component}
 */
type TPageMenuItemContainer = {
  isActiveOnBigScreen: boolean,
  isActiveOnSmallScreen: boolean,
};

export const PageMenuItemContainer = styled.li`
  list-style-position: inside;
  list-style-type: none;
  display: block;
  position: relative;
  transition: border-left 0.4s, background-color 0.4s, color 0.4s;
  border-left: ${(props: TPageMenuItemContainer) => (
    props.isActiveOnBigScreen ? '4px solid #19aa8d' : '0 solid #19aa8d'
  )};
  background-color: ${(props: TPageMenuItemContainer) => (
    props.isActiveOnBigScreen ? '#293846' : 'transparent'
  )};
  color: ${(props: TPageMenuItemContainer) => (
    props.isActiveOnBigScreen ? '#fff' : '#a7b1c2'
  )};
  &:hover {
    background-color: #293846;
    color: #fff;
  }
  &::selection {
    background-color: transparent;
  }
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    border-left: ${(props: TPageMenuItemContainer) => (
      props.isActiveOnSmallScreen ? '4px solid #19aa8d' : '0 solid #19aa8d'
    )};
  background-color: ${(props: TPageMenuItemContainer) => (
      props.isActiveOnSmallScreen ? '#293846' : 'transparent'
    )};
  color: ${(props: TPageMenuItemContainer) => (
      props.isActiveOnSmallScreen ? '#fff' : '#a7b1c2'
    )};
  }
`;

/**
 * Составной элемент основного меню страницы
 * при показе на больших экранах, выполняется при открытии в первую очередь.
 * При закрытии выполняется во вторую -- после закрытия выпоадающего дополнительного
 * меню.
 * При показе на малых экранах, выполняется при открытии также в первую
 * очередь. При закрытии в посленюю очередь, после закрытия выпадающего меню
 * и изменении ширины.
 * @param {boolean} isActive
 * @return {React.Component}
 */
type TPageMenuMultiItemContainer = {
  isSubmenuActiveOnBigScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
}
export const PageMenuMultiItemContainer = PageMenuItemContainer.extend`
  transition-delay: ${(props: TPageMenuMultiItemContainer) => (
    props.isSubmenuActiveOnBigScreen ? '0s' : '0.4s'
  )};
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    transition: ${(props: TPageMenuMultiItemContainer) => (
      props.isSubmenuActiveOnSmallScreen ? '0.8s' : '0.4s'
    )};
  }
`;

/**
 * Вложенная ссылка простого элемента основного меню страницы.
 * [!!!] Вместо submenu: string должно быть isSubmenuActive: boolean.
 * Но в этом месте можно передать только string и без camelCase.
 * @param {string | null} icon
 * @return {React.Component}
 */
type TPageMenuItemLink = {
  icon: string | null,
  submenu: string
}
export const PageMenuItemLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: ${ FA_SMALL_FONT_SIZE };
  font-weight: 600;
  color: inherit;
  padding: 14px 20px 14px 25px;
  background-color: transparent;
  cursor: pointer;
  transition: font-size 0s ease 0.4s, padding 0.4s ease 0.4s;
  &::selection {
    background-color: transparent;
  }
  &::before {
    content: "\\${(props: TPageMenuItemLink) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-right: 6px;
    transition: font-size 0.4s ease 0.4s, margin 0.4s ease 0.4s;
  }
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
    font-size: ${(props: TPageMenuItemLink) => (
      props.submenu ? `${FA_SMALL_FONT_SIZE }` : '0'
    )};
    padding: ${(props: TPageMenuItemLink) => (
      props.submenu ? '14px 20px 14px 25px' : '10px 14px 10px 14px'
    )};
    &::before {
      font-size: ${(props: TPageMenuItemLink) => (
        props.submenu ? `${ FA_SMALL_FONT_SIZE }` : `${ FA_BIG_FONT_SIZE }`
      )};
      margin-right:  ${(props: TPageMenuItemLink) => (
        props.submenu ? '6px' : '0' 
      )};
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
  icon: string | null,
  isSubmenuActiveOnBigScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
}

export const PageMenuItemAnchor = styled.a`
  display: block;
  text-decoration: none;
  font-size: ${ FA_SMALL_FONT_SIZE};
  font-weight: 600;
  color: inherit;
  cursor: pointer;
  padding: 14px 20px 14px 25px;
  background-color: transparent;
  transition: font-size 0s ease 0.4s, padding 0.4s ease 0.4s;
  &::selection {
    background-color: transparent;
  }
  &::before {
    content: "\\${(props: PageMenuItemAnchorProps) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 6px;
    transition: font-size 0.4s ease 0.4s, margin 0.4s ease 0.4s;
  }
  @media screen and ( min-width: ${ BIG_SCREEN_MIN} ) {
    &::after {
      content: "\\f104";
      transform: ${(props: PageMenuItemAnchorProps) => (
        props.isSubmenuActiveOnBigScreen ? 'rotate(-90deg)' : 'none'
      )};
      transition: transform 0.4s ease 0.4s;
      position: absolute;
      top: 16px;
      right: 20px;
      font-family: 'FontAwesome';
      font-weight: normal;
      font-size: ${ FA_SMALL_FONT_SIZE};
      margin-right: 6px;
    }
  }
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    font-size: ${(props: PageMenuItemAnchorProps) => (
      props.isSubmenuActiveOnSmallScreen ? `${FA_SMALL_FONT_SIZE}` : '0'
    )};
    padding: ${(props: PageMenuItemAnchorProps) => (
      props.isSubmenuActiveOnSmallScreen ? '14px 20px 14px 25px' : '10px 14px 10px 14px'
    )};
    &::before {
      font-size: ${(props: PageMenuItemAnchorProps) => (
        props.isSubmenuActiveOnSmallScreen
          ? `${FA_SMALL_FONT_SIZE}` : `${FA_BIG_FONT_SIZE}`
      )};
      margin-right:  ${(props: PageMenuItemAnchorProps) => (
        props.isSubmenuActiveOnSmallScreen ? '6px' : '0')};
      }
    }
  }
`;

/** [PageMenuMultiItem] */

/**
 * Каркас вложенного меню страницы
 * @return {React.Component}
 */
type TPageSubMenuLayout = {
  isSubmenuActiveOnSmallScreen: boolean,
  isSubmenuActiveOnBigScreen: boolean,
  subMenuHeight: string
}
export const PageSubMenuLayout = styled.ul`
  display: block;
  transition: ${(props: TPageSubMenuLayout) => (
    props.isSubmenuActiveOnBigScreen ? 'height 0.4s ease 0.4s' : 'height 0.4s'
  )};
  height: ${(props: TPageSubMenuLayout) => (
    props.isSubmenuActiveOnBigScreen ? props.subMenuHeight + 'px' : '0px'
  )};
  overflow: hidden;
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    height: ${(props: TPageSubMenuLayout) => (
      props.isSubmenuActiveOnSmallScreen ? props.subMenuHeight + 'px' : '0px'
    )};
    transition: ${(props: TPageSubMenuLayout) => (
      props.isSubmenuActiveOnSmallScreen ? 'height .4s ease 0.8s' : 'height .4s'
    )};
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
  &:hover {
    color: #fff;
  }
  &::selection {
    background-color: transparent;
  }
`;

/**
 * Вложенная ссылка элемента подменю
 * @param {string | null} icon
 * @return {React.Component}
 */
export const PageSubMenuItemLink = styled(NavLink)`
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
    content: "\\${(props: { icon: string | null }) => (
      props.icon !== null ? props.icon : 'f05e'
    )}";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE};
    margin-right: 6px;
  }
`;
