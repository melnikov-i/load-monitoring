import styled, { StyledFunction } from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  MainMenuLinkSpanProps
} from '@src/interfaces';

// const MainMenuLinkIconFunction: StyledFunction<MainMenuLinkIconProps> =
//   styled.span;

const MainMenuLinkSpanFunction: StyledFunction<MainMenuLinkSpanProps> =
  styled.span;

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
} from '@src/styled';

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenu = styled.div`
  width: ${ MENU_BIG_WIDTH };
  height: 100%;
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

export const MainMenuLayout = styled.ul`
  margin-top: 10px;
  width: 100%;
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

export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
`;

  // &::before {
  //   content: "";
  //   display: inline-block;
  //   vertical-align: top;
  //   width: 5px;
  //   height: 100%;
  //   margin-right: 20px;
  // }
  // @media screen 
  //   and (min-width: ${ MIDDLE_SCREEN_MIN }) 
  //   and (max-width: ${ MIDDLE_SCREEN_MAX }) {
  //     font-size: 0;
  //     &::before {
  //       content: "";
  //       display: inline-block;
  //       vertical-align: top;
  //       width: 5px;
  //       height: 100%;
  //       margin-right: 12px;
  //     }
  //   }  
  // background-color: #293846;

export const MainMenuLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 46px;
  text-decoration: none;
`;

export const MainMenuLinkSpan = MainMenuLinkSpanFunction`
  display: block;
  width: 100%;
  height: 46px;
  line-height: 46px;
  color: #a7b1c2;
  font-size: ${ props => ( props.isCompositeActive ? '0' : '13px' ) };
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
    font-size: ${ props => ( props.isCompositeActive ? '42px' : '14px' ) };
    width: 20px;
  }
  
  @media screen
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
    }
`;

// export const MainMenuLinkIcon = MainMenuLinkIconFunction`
//   &::before {
//   }
//     @media screen 
//     and (min-width: ${ MIDDLE_SCREEN_MIN }) 
//     and (max-width: ${ MIDDLE_SCREEN_MAX }) {
//       &::before {
//         content: "${ (props) => props.icon }";
//         display: inline-block;
//         vertical-align: top;
//         font-family: 'FontAwesome';
//         font-size: 42px;
//         width: 42px;
//       }      
//     }
// `;

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
      background-image: none;

    }
  @media screen
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: none;
    }
`;

export const TestMain = styled.button`
  font-size: 16px;
`;