import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  SMALL_SCREEN_MAX,
  // MIDDLE_SCREEN_MIN,
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
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${(props: { active: string }) => (
        props.active === '1'
          ? `${MENU_LAYOUT_BIG_WIDTH}` : `${MENU_LAYOUT_MIDDLE_WIDTH}`
      )};
    }
`;

/**
 * Колонка основного контента
 * В зависимости от ширины экрана может быть разной ширины.
 * В этом контейнере происходит корректировка размеров основной части страницы
 * при показе анимации раскрытия меню.
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
  transition:${(props: { active: string }) => (
    props.active === '1'
    ? 'padding-left 0.4s' : 'padding-left 0.4s ease 0.8s'
  )};
  @media screen 
    and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
      padding-left: ${(props: { active: string}) => (
        props.active === '1'
          ? `${MENU_LAYOUT_BIG_WIDTH}` : `${MENU_LAYOUT_MIDDLE_WIDTH}`
      )};
    }
`;

  // export const PageMenu = styled.div`
  //   width: ${ MENU_LAYOUT_BIG_WIDTH};
  //   display: inline-block;
  //   vertical-align: top;
  //   min-height: 100vh;
  //   margin-bottom: -${ FOOTER_HEIGHT};
  //   &::before {
  //     content: "";
  //     display: block;
  //     width: ${ MENU_LAYOUT_BIG_WIDTH};
  //     min-height: 100%;
  //     height: auto;
  //     background-color: #2f4050;
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     z-index: 1;
  //   }
  //   @media screen
  //     and ( min-width: ${ MIDDLE_SCREEN_MIN} )
  //     and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
  //       width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
  //       &::before {
  //         width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
  //       }
  //     };
  //   @media screen
  //     and ( max-width: ${ SMALL_SCREEN_MAX} ) {
  //       width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
  //       margin-left: ${(props: { isMenuOpenedOnSmallScreen: boolean }) => (
  //     props.isMenuOpenedOnSmallScreen
  //       ? '0' : `-${MENU_LAYOUT_MIDDLE_WIDTH}`
  //   )};
  //       &::before {
  //         width: ${ MENU_LAYOUT_MIDDLE_WIDTH};
  //         margin-left: ${(props: { isMenuOpenedOnSmallScreen: boolean }) => (
  //     props.isMenuOpenedOnSmallScreen
  //       ? '0' : `-${MENU_LAYOUT_MIDDLE_WIDTH}`
  //   )};
  //       }
  //     };
  // `;

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
export const PageMenuItemContainer = styled.li`
  list-style-position: inside;
  list-style-type: none;
  display: block;
  position: relative;
  transition: border-left 0.4s;
  border-left: ${(props: { isActive: boolean }) => (
    props.isActive ? '4px solid #19aa8d' : '0 solid #19aa8d'
  )};
  background-color: ${(props: { isActive: boolean }) => (
    props.isActive ? '#293846' : 'transparent'
  )};
  color: ${(props: { isActive: boolean }) => (
    props.isActive ? '#fff' : '#a7b1c2'
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
export const PageMenuMultiItemContainer = PageMenuItemContainer.extend`
  transition: ${(props: {isActive: boolean}) => (
    props.isActive ? 'border-left 0.4s' : 'border-left 0.4s ease 0.4s'
  )};
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX } ) {
    transition: ${(props: { isActive: boolean }) => (
      props.isActive ? 'border-left 0.4s' : 'border-left 0.4s ease 0.8s'
    )};
  }
`;

/**
 * Вложенная ссылка простого элемента основного меню страницы
 * @param {string | null} icon
 * @return {React.Component}
 */
type TPageMenuItemLink = {
  icon: string | null,
  active: string
}
export const PageMenuItemLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: ${ FA_SMALL_FONT_SIZE };
  font-weight: 600;
  color: inherit;
  padding: 14px 20px 14px 25px;
  background-color: transparent;
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
        (props.active === '1') ? `${FA_SMALL_FONT_SIZE }` : '0'
      )};
    padding: ${(props: TPageMenuItemLink) => (
      (props.active === '1')
        ? '14px 20px 14px 25px' : '10px 14px 10px 14px'
      )};
    &::before {
      font-size: ${(props: TPageMenuItemLink) => (
        (props.active === '1')
          ? `${ FA_SMALL_FONT_SIZE }` : `${ FA_BIG_FONT_SIZE }`
        )};
      margin-right:  ${(props: TPageMenuItemLink) => (
        (props.active === '1') ? '6px' : '0' )};
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
  isActive: boolean,
  active: string,
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
      content: "\\${(props: PageMenuItemAnchorProps) => (
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
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    font-size: ${(props: PageMenuItemAnchorProps) => (
      (props.active === '1') ? `${FA_SMALL_FONT_SIZE}` : '0'
    )};
    padding: ${(props: PageMenuItemAnchorProps) => (
      (props.active === '1')
        ? '14px 20px 14px 25px' : '10px 14px 10px 14px'
    )};
    &::before {
      font-size: ${(props: PageMenuItemAnchorProps) => (
        (props.active === '1')
          ? `${FA_SMALL_FONT_SIZE}` : `${FA_BIG_FONT_SIZE}`
      )};
      margin-right:  ${(props: PageMenuItemAnchorProps) => (
        (props.active === '1') ? '6px' : '0')};
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
  isActive: boolean,
  subMenuHeight: string
}
export const PageSubMenuLayout = styled.ul`
  display: block;
  transition: ${(props: TPageSubMenuLayout) => (
    props.isActive ? 'height 0.4s ease 0.4s' : 'height 0.4s'
  )};
  height: ${(props: TPageSubMenuLayout) => (
    props.isActive ? props.subMenuHeight + 'px' : '0'
  )};
  overflow: hidden;
  @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    transition: ${(props: { isActive: boolean }) => (
      props.isActive ? 'height .4s ease 0.8s' : 'height .4s'
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
  color: ${(props: { isActive: boolean }) => (
    props.isActive ? '#fff' : '#a7b1c2'
  )};
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
    // @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
    //     padding: ${(props: TPageSubMenuItemLink) => (
    //       (props.active === '1') ? '7px 10px 7px 52px' : '10px 14px 10px 14px'
    //     )};
    //     height: ${(props: TPageSubMenuItemLink) => (
    //       (props.active === '1') ? '32px' : 'auto'
    //     )};
    //     background-color: transparent;
    //     &:hover {
    //       background-color: #293846;
    //     }
    //     &::before {
    //       content: "\\${(props: { icon: string | null }) => (
    //         props.icon !== null ? props.icon : 'f05e'
    //       )}";
    //       display: inline-block;
    //       vertical-align: sub;
    //       font-family: 'FontAwesome';
    //       font-weight: normal;
    //       font-size: ${(props: PageMenuItemAnchorProps) => (
    //         (props.active === '1')
    //           ? `${FA_SMALL_FONT_SIZE}` : `${FA_BIG_FONT_SIZE}`
    //       )};
    //       margin-right:  ${(props: PageMenuItemAnchorProps) => (
    //         (props.active === '1') ? '6px' : '0')};
    //       }
    //     }
    //   }



  
  // @media screen and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
  //   display: block;
  //   width: calc( 100% - ${ MENU_LAYOUT_MIDDLE_WIDTH} - 30px );
  //   position: fixed;
  //   top: calc( ${ MENU_LAYOUT_MIDDLE_WIDTH} / 4 );
  //   left: calc( ${ MENU_LAYOUT_MIDDLE_WIDTH} + 15px );
  //   transform: ${(props: TPageSubMenuLayout) => (
  //     props.isActive ? 'translateX(0)' : 'translateX(20px)'
  //   )};
  //   z-index: 10;
  //   transition: height 0s;
  //   transition: transform 1s;
  //   overflow: ${(props: PageSubMenuLayoutProps) => (
  //     props.isActive ? 'visible' : 'hidden'
  //   )};
  //   &::before {
  //     content: "";
  //     display: ${(props: PageSubMenuLayoutProps) => (
  //       props.isActive ? 'block' : 'none'
  //     )};
  //     position: fixed;
  //     width: 100%;
  //     height: calc( 100vh - 30px );
  //     background-color: #293846;
  //     opacity: 0.9;
  //   }
  // }




















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
      left: ${(props: { isMenuOpenedOnSmallScreen: boolean }) => (
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
 * Кнопка закрытия выпадающего меню, оторбажаемая на малых экранах
 * @param {boolean} isActive
 * @return {React.Component}
 */
// export const PageSubMenuCloseAnchor = styled.a`
//   display: none;
//   @media screen
//     and ( max-width: ${ MIDDLE_SCREEN_MAX} ) {
//       display: ${(props: { isActive: boolean }) => (
//     props.isActive ? 'block' : 'none'
//   )};
//       color: #a7b1c2;
//       position: fixed;
//       right: 0;
//       width: 46px;
//       height: 46px;
//       cursor: pointer;
//       z-index: 200;
//       &:hover {
//         color: #fff;
//         background-color: #293846;
//       }      
//       &::before {
//         content: "\002b";
//         display: block;
//         font-weight: normal;
//         font-size: 54px;
//         margin-top: -16px;
//         text-align: center;
//         transform: rotateZ(45deg)
//       }
//     }
// `;


