import styled, { StyledFunction } from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MainMenuLinkSpanProps,
  MainMenuLayoutProps
} from '@src/interfaces';

const MainMenuLinkSpanFunction: StyledFunction<MainMenuLinkSpanProps> =
  styled.span;

const MainMenuLayoutFunction: StyledFunction<MainMenuLayoutProps> =
  styled.ul;

const MainMenuSubLayoutFunction: StyledFunction<MainMenuLayoutProps> =
  styled.ul;

const HeaderProfile = require('@src/images/HeaderProfile');
const Logo = require('@src/images/Logo');

import {
  MENU_BIG_WIDTH,
  MENU_MIDDLE_WIDTH,
  MENU_SMALL_WIDTH,
  MENU_LOGO_HEIGHT,
  SMALL_SCREEN_MAX,
  MIDDLE_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
  TOP_HEIGHT,
  FOOTER_HEIGHT,
  BIG_LINK_HEIGHT,
  SUB_LINK_HEIGHT,
  FA_BIG_FONT_SIZE,
  FA_SMALL_FONT_SIZE,
  SUB_MENU_WIDTH,
  SUB_MENU_TOP_POSITION
} from '@src/styled';

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenu = styled.div`
  width: ${ MENU_BIG_WIDTH };
  height: 100%;
  positon: relative;
  background-color: #2f4050;
  position: fixed;
  top: 0;
  left: 0;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: ${ MENU_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${ MENU_SMALL_WIDTH };
      display: none;
    }
`;

export const MainMenuLayout = MainMenuLayoutFunction`
  margin-top: 10px;
  width: ${
    props => (
      props.isCompositeActive
      ? `${ MENU_MIDDLE_WIDTH }` 
      : '100%'
    )
  };
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      margin-top: 40px;
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: ${ MENU_SMALL_WIDTH };
      display: none;
    }
`;

export const MainMenuSubLayout = MainMenuSubLayoutFunction`
  display: ${
    props => (
      props.isCompositeActive
      ? 'block'
      : 'none'
    )
  };
  background-color: #293846;
  width: ${ SUB_MENU_WIDTH };
  height: calc(100% - ${ SUB_MENU_TOP_POSITION });
  position: absolute;
  top: ${ SUB_MENU_TOP_POSITION };
  left: ${ MENU_MIDDLE_WIDTH };
  padding-top: 5px;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: none;
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
  margin-bottom: 5px;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 5px;
    height: ${ BIG_LINK_HEIGHT };
  }
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {}
`;

  export const MainMenuSubLink = MainMenuLink.extend`
  height: ${ SUB_LINK_HEIGHT };
  margin-bottom: 2px;
  &::before {
    height: ${ SUB_LINK_HEIGHT };
  }
`;

export const MainMenuLinkSpan = MainMenuLinkSpanFunction`
  display: inline-block;
  vertical-align: top;
  height: ${ BIG_LINK_HEIGHT };
  line-height: ${ BIG_LINK_HEIGHT };
  font-size: ${ props => ( props.isCompositeActive ? '0' : '13px' )};
  font-weight: 600;
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
    margin-left: ${
      props => (
        props.isCompositeActive 
        ? '8px' 
        : '20px' 
      )
    };
    margin-right: ${
      props => ( 
        props.isCompositeActive 
        ? '0' 
        : '10px' 
      )
    };
    font-size: ${
      props => (
        props.isCompositeActive
        ? `${ FA_BIG_FONT_SIZE }` 
        : `${ FA_SMALL_FONT_SIZE }` 
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

export const MainMenuSubLinkSpan = MainMenuLinkSpan.extend`
  height: 18px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  &::before {
    margin-left: 8px;
    font-size: 14px;
    width: 20px;
  }
`;

export const MainPage = styled.div`
  width: calc(100% - ${ MENU_BIG_WIDTH });
  margin-left: ${ MENU_BIG_WIDTH };
  height: 100%;
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: calc(100% - ${ MENU_MIDDLE_WIDTH });
      margin-left: ${ MENU_MIDDLE_WIDTH };
    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: 100%;
      margin-left: ${ MENU_SMALL_WIDTH };
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
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: none;
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
        font-size: 12px;
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

