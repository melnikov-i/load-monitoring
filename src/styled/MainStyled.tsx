import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MMSpanIconProps,
  MMUListIsOpenedProps,
  MMDivIsOpenedProps,
  MMLinkIsOpenedProps,
  MMButtonIsOpenedProps,
  UMUListIsOpenedProps,
  UMLinkIsOpenedProps,
} from '@src/interfaces';

// type MainMenuLinkSpanProps<P> = ThemedStyledProps<P, MMSpanIconProps>;

// const MainMenuLinkSpanFunction: StyledFunction<MMSpanIconProps> =
//   styled.span;

// const MainMenuFunction: StyledFunction<MMDivIsOpenedProps> =
//   styled.div;

// const MainMenuFakeLinkFunction: StyledFunction<MMLinkIsOpenedProps> =
//   styled.a;

// const UserMenuFakeLinkFunction: StyledFunction<UMLinkIsOpenedProps> =
//   styled.a;

// const MainPageFunction: StyledFunction<MMDivIsOpenedProps> =
//   styled.div;

// const DevicesMenuLayoutFunction: StyledFunction<MMUListIsOpenedProps> =
//   styled.ul;

// const IsOpenButtonFunction: StyledFunction<MMButtonIsOpenedProps> =
//   styled.button;

// const UserMenuLayoutFunction: StyledFunction<UMUListIsOpenedProps> =
//   styled.ul;

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  SMALL_SCREEN_MAX,
  MIDDLE_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  MENU_LOGO_HEIGHT,
  BIG_MAIN_LINK_HEIGHT,
  BIG_USER_FAKE_LINK_HEIGHT,
  FA_BIG_FONT_SIZE,
  FA_SMALL_FONT_SIZE,
  TOP_HEIGHT,
} from '@src/styled';

export const MainLayout = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
`;

export const MainMenu = styled.div`
  width: ${ MENU_LAYOUT_BIG_WIDTH };
  display: inline-block;
  vertical-align: top;
  &::before {
    content: "";
    display: block;
    width: ${ MENU_LAYOUT_BIG_WIDTH };
    min-height: 100%;
    height: auto;
    background-color: #2f4050;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      &::before {
        width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      }
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      margin-left: ${
        ( props: MMDivIsOpenedProps ) => (
          props.onSmallScreen
          ? '0'
          : `-${ MENU_LAYOUT_MIDDLE_WIDTH }`
        )
      };
      &::before {
        width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
        margin-left: ${
          ( props: MMDivIsOpenedProps ) => (
            props.onSmallScreen
            ? '0'
            : `-${ MENU_LAYOUT_MIDDLE_WIDTH }`
          )
        };
      }
    }
`;

export const SmallMenuButton = styled.button`
  display: none;
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: block;
      position: fixed;
      top: 15px;
      left: ${
        ( props: MMButtonIsOpenedProps ) => (
          props.onSmallScreen
          ? `calc(${ MENU_LAYOUT_MIDDLE_WIDTH } + 15px)`
          : '15px'
        )
      };
      width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: #19aa8d;
      border-radius: 4px;
      &::before {
        content: "\f0c9";
        font-family: 'FontAwesome';
        font-weight: normal;
        font-size: ${ FA_BIG_FONT_SIZE };
        color: #fff;
      }
    }
`;

export const MainMenuLogoWrapper = styled.div`
  width: 100%;
  height: ${ MENU_LOGO_HEIGHT };
  background-image: url( ${ HeaderProfile } );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  box-sizing: border-box;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-image: none;
      height: 30px;
      padding: 0;
    }
`;

export const MainMenuLogo = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  background-image: url( ${ Logo } );
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 60%;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
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

export const UserMenuFakeLink = styled.a`
  display: block;
  width: 100%;
  position: relative;
  top: 65px;
  height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  line-height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  font-size: 13px;
  font-weight: 600;
  color: #dfe4fe;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
  &::after {
      width: ${ BIG_USER_FAKE_LINK_HEIGHT };
      height: ${ BIG_USER_FAKE_LINK_HEIGHT };
      line-height: ${ BIG_USER_FAKE_LINK_HEIGHT };
      text-align: center;
      content: "${
        ( props: UMLinkIsOpenedProps ) => (
          props.onBigScreen 
          ? "\f078" 
          : "\f053"
        )
      }";
      font-family: 'FontAwesome';
      font-weight: normal;
      font-size: calc(${ FA_SMALL_FONT_SIZE } - 4px);
      color: #dfe4fe;
      position: absolute;
      top: 0;
      right: 0;
    }
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
    }
`;

export const UserMenuLayout = styled.ul`
  display: ${
    ( props: UMUListIsOpenedProps ) => (
      props.onBigScreen
      ? 'block'
      : 'none'
    )
  };
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 3px 0;
  position: relative;
  top: 70px;
  left: 0;
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
    }
`;

export const UserMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

export const UserMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

export const UserMenuLinkSpan = styled.span`
  display: block;
  height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  line-height: ${ BIG_USER_FAKE_LINK_HEIGHT };
  font-size: 13px;
  font-weight: normal;
  color: #333;
  white-space: no-wrap;
  padding: 3px 5px;
  &::selection {
    background-color: transparent;
  }
  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  }
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
    }
`;

export const MainMenuLayout = styled.ul`
  width: 100%;
  margin-top: 10px;
  padding-bottom: ${ BIG_MAIN_LINK_HEIGHT };
  @media screen 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-top: 40px;
      padding-top: 5px;
    }
`;

export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      position: relative;
    }
`;

export const MainMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_MAIN_LINK_HEIGHT };
  }
`;

export const MainMenuFakeLink = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &::selection {
    background: transparent;
  }
  color: ${ 
    ( props: MMLinkIsOpenedProps ) => (
      props.onBigScreen
      ? '#fff'
      : '#a7b1c2'
    )
  };
  background-color: ${
    ( props: MMLinkIsOpenedProps ) =>
      props.onBigScreen
      ? '#293846'
      : 'transparent'
  };
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_MAIN_LINK_HEIGHT };
    background-color: ${
      ( props: MMLinkIsOpenedProps ) =>
        props.onBigScreen
        ? '#19aa8d'
        : 'transparent'
    };
  }
  &::after {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    content: "${
      ( props: MMLinkIsOpenedProps ) => (
        props.onBigScreen 
        ? "\f078" 
        : "\f053"
      )
    }";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    position: absolute;
    top: 8px;
    right: 10px;
  }
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN })
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      color: ${ 
        ( props: MMLinkIsOpenedProps ) => (
          props.onMiddleScreen
          ? '#fff'
          : '#a7b1c2'
        )
      };
      background-color: ${
        ( props: MMLinkIsOpenedProps ) =>
          props.onMiddleScreen
          ? '#293846'
          : 'transparent'
      };
      &::before {
        background-color: ${
          ( props: MMLinkIsOpenedProps ) =>
            props.onMiddleScreen
            ? '#19aa8d'
            : 'transparent'
        };
      }
      &::after {
        display: none;          
      }
    }
  @media screen 
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      color: ${ 
        ( props: MMLinkIsOpenedProps ) => (
          props.onSmallScreen
          ? '#fff'
          : '#a7b1c2'
        )
      };
      background-color: ${
        ( props: MMLinkIsOpenedProps ) =>
          props.onSmallScreen
          ? '#293846'
          : 'transparent'
      };
      &::before {
        background-color: ${
          ( props: MMLinkIsOpenedProps ) =>
            props.onSmallScreen
            ? '#19aa8d'
            : 'transparent'
        };
      }
      &::after {
        display: none;          
      }
    }
`;

export const MainMenuLinkSpan = styled.span`
  width: calc(100% - 5px);
  height: ${ BIG_MAIN_LINK_HEIGHT };
  line-height: ${ BIG_MAIN_LINK_HEIGHT };
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  vertical-align: top;
  &::selection {
    background: transparent;
  }
  &::before {
    content: "${ (props: MMSpanIconProps) => props.icon }";
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-left: 14px;
    margin-right: 6px;
  }
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
      &::before {
        font-size: ${ FA_BIG_FONT_SIZE };
        margin-left: 10px;
        margin-right: 0;
      }
    }
`;

export const DevicesMenuLayout = styled.ul`
  display: ${
    ( props: MMUListIsOpenedProps ) => 
      props.onBigScreen
      ? 'block'
      : 'none'
  };
  overflow: hidden;
  margin-right: 5px;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN })
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: ${
        ( props: MMUListIsOpenedProps ) => 
          props.onMiddleScreen
          ? 'block'
          : 'none'
      };
      background-color: #2f4050;
      position: absolute;
      left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      top: 0;
      min-width: 300%;
      padding-right: 5px;
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: ${
        ( props: MMUListIsOpenedProps ) => 
          props.onSmallScreen
          ? 'block'
          : 'none'
      };
      background-color: #2f4050;
      position: absolute;
      left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      top: 0;
      min-width: 300%;
      padding-right: 5px;
    }
`;

export const DevicesMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  position: relative;
`;

export const DevicesMenuLinkSpan = MainMenuLinkSpan.extend`
  white-space: nowrap;
  &::before {
    margin-left: 40px;
  }
  @media screen
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 100%;
      &:hover {
        color: #fff;
        background-color: #293846;
      }
      font-size: 13px;
      &::before {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
`;

export const MainPage = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - ${ MENU_LAYOUT_BIG_WIDTH });
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: calc(100% - ${ MENU_LAYOUT_MIDDLE_WIDTH });
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${
        ( props: MMDivIsOpenedProps ) => (
          props.onSmallScreen
          ? `calc(100% - ${ MENU_LAYOUT_MIDDLE_WIDTH })`
          : '100%'
        )
      };
    }
`;

export const MainTop = styled.div`
  width: 100%;
  height: ${ TOP_HEIGHT };
  background-color: #f3f3f3;
  border-bottom: 1px solid #e7eaec;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  width: 100%;
  background-color: #fff;
`;