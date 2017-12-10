import styled, { StyledFunction } from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MainMenuLinkSpanProps,
  MenuLayoutProps,
  DevicesButtonProps,
} from '@src/interfaces';

const MainMenuLinkSpanFunction: StyledFunction<MainMenuLinkSpanProps> =
  styled.span;

const MainMenuLayoutFunction: StyledFunction<MenuLayoutProps> =
  styled.ul;

const DeviceMenuLayoutFunction: StyledFunction<MenuLayoutProps> =
  styled.ul;

const DevicesButtonFunction: StyledFunction<DevicesButtonProps> =
  styled.button;

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  SMALL_SCREEN_MAX,
  MIDDLE_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  MENU_LAYOUT_SMALL_WIDTH,
  MENU_LOGO_HEIGHT,
  MAIN_MENU_BIG_WIDTH,
  MAIN_MENU_MIDDLE_WIDTH,
  DEVICES_MENU_MIDDLE_WIDTH,
  DEVICES_MENU_BIG_WIDTH,
  DEVICES_LINK_HEADER,
  BIG_MAIN_LINK_HEIGHT,
  FA_BIG_FONT_SIZE,
  FA_SMALL_FONT_SIZE,
  TOP_HEIGHT,
  FOOTER_HEIGHT,
} from '@src/styled';

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenu = styled.div`
  width: ${ MENU_LAYOUT_BIG_WIDTH };
  height: 100%;
  background-color: #2f4050;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${ MENU_LAYOUT_SMALL_WIDTH };
      display: none;
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
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-image: none;
      height: 30px;
      padding: 0;
    }
`;

export const MainMenuLogo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url( ${ Logo } );
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 60%;
    @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      background-image: none;
      &::before {
        content: "Monyze";
        display: block;
        font-size: 16px;
        font-weight: 600;
        height: 70px;
        line-height: 70px;
        color: #fff;
        text-align: center;
      }
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: none;
    }
`;

export const MainMenuWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-top: 40px;
      padding-top: 5;
    }
`;

export const MainMenuLayout = MainMenuLayoutFunction`
  width: ${
    props => (
      props.isOpened
      ? `${ MAIN_MENU_MIDDLE_WIDTH }`
      : `${ MAIN_MENU_BIG_WIDTH }`
    )
  };
  display: inline-block;
  vertical-align: top;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ MAIN_MENU_MIDDLE_WIDTH };
    }
`;

export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

export const MainMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_MAIN_LINK_HEIGHT };
  }
`;

export const MainMenuLinkSpan = MainMenuLinkSpanFunction`
  font-size: ${ props => ( props.isOpened ? '0' : '13px' )};
  height: ${ BIG_MAIN_LINK_HEIGHT };
  line-height: ${ BIG_MAIN_LINK_HEIGHT };
  font-weight: 600;
  display: inline-block;
  vertical-align: top;
  &::selection {
    background: transparent;
  }
  &:hover {
    color: #fff;
  }
  &::before {
    content: "${ (props) => props.icon }";
    font-family: 'FontAwesome';
    font-size: ${
      props => (
        props.isOpened
        ? `${ FA_BIG_FONT_SIZE }` 
        : `${ FA_SMALL_FONT_SIZE }` 
      )
    };
    margin-left: ${
      props => (
        props.isOpened 
        ? '8px' 
        : '14px' 
      )
    };
    margin-right: ${
      props => ( 
        props.isOpened 
        ? '0' 
        : '6px' 
      )
    };
  }
  @media screen
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
      &::before {
        font-size: ${ FA_BIG_FONT_SIZE };
        margin-left: 8px;
        margin-right: 0;
      }
    }
`;

export const DevicesMenuLayout = DeviceMenuLayoutFunction`
  margin-left: 5px;
  position: relative;
  background-color: #293846;
  width: ${
    props => (
      props.isOpened
      ? `${ DEVICES_MENU_BIG_WIDTH }`
      : `${ DEVICES_MENU_MIDDLE_WIDTH }`
    )
  };
  display: inline-block;
  vertical-align: top;
  padding-top: ${
    props => (
      props.isOpened
      ? '0'
      : '35px'
    )
  };
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ DEVICES_MENU_MIDDLE_WIDTH };
      margin: 0;
      padding: 0;
    }
`;

export const DoOpenDevices = DevicesButtonFunction`
  width: 30px;
  height: 30px;
  background-color: #293846;
  position: absolute;
  top: 0;
  right: 0;
  &::before {
    content: "${
      props => (
        props.isOpened 
        ? "\f0a9" 
        : "\f0a8"
      )
    }";
    font-family: 'FontAwesome';
    font-size: ${ FA_BIG_FONT_SIZE };
    color: #a7b1c2;
    }
  }
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
    }
`;

export const DevicesMenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #a7b1c2;
  
`;

export const DevicesMenuLinkSpan = MainMenuLinkSpanFunction`
  display: inline-block;
  vertical-align: top;
  font-size: ${ props => ( props.isOpened ? '13px' : '0' )};
  font-weight: 600;
  height: ${ DEVICES_LINK_HEADER };
  line-height: ${ DEVICES_LINK_HEADER };
  &::selection {
    background: transparent;
  }
  &:hover {
    color: #fff;
  }
  &::before {
    content: "${ (props) => props.icon }";
    display: inline-block;
    vertical-align: top;
    font-family: 'FontAwesome';
    font-size: ${ FA_SMALL_FONT_SIZE };
    margin-left: 8px;
    margin-right: ${
      props => ( 
        props.isOpened 
        ? '6px' 
        : '0' 
      )
    };
  }
  @media screen
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
    }

`;

export const MainPage = styled.div`
  width: calc(100% - ${ MENU_LAYOUT_BIG_WIDTH });
  margin-left: ${ MENU_LAYOUT_BIG_WIDTH };
  height: 100%;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: calc(100% - ${ MENU_LAYOUT_MIDDLE_WIDTH });
      margin-left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: 100%;
      margin-left: ${ MENU_LAYOUT_SMALL_WIDTH };
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
  min-height: calc(100% - ${ TOP_HEIGHT } - ${ FOOTER_HEIGHT });
  background-color: #fff;
`;

export const MainFooter = styled.div`
  width: 100%;
  height: ${ FOOTER_HEIGHT };
  box-sizing: border-box;
  border-top: 1px solid #e7eaec;
`;