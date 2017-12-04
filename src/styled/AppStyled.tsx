import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

export const MainFooter = styled.div`
  width: 100%;
  height: ${ FOOTER_HEIGHT };
  box-sizing: border-box;
  border-top: 1px solid #e7eaec;
`;


export const MainMenuItem = styled.li`
  list-style-position: inside;
  list-style-type: none;
  padding: 0 10px;
`;

export const MainMenuLink = styled(NavLink)`
  font-size: 13px;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-weightt: bold;
  text-align: center;
  text-decoration: none;
  display: block;
  height: 20px;
  line-height: 20px;
  color: #a7b1c2;
  &::selection {
    background: transparent;
  }
`;

export const MainMenuLogoWrapper = styled.div`
  width: 100%;
  height: ${ MENU_LOGO_HEIGHT };
  background-image: url( ${ HeaderProfile } );
  background-position: center-center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 25px;
  box-sizing: border-box;
`;

export const MainMenuLogo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url( ${ Logo } );
  background-position: left-top;
  background-repeat: no-repeat;
  background-size: 60%;
`;
  // background-color: green;
