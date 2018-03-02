import * as React from 'react';
import { injectGlobal } from 'styled-components';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

import MainConnected from '@src/usage/MainUsage';
import LoginConnected from '@src/usage/LoginUsage';

import {
  FOOTER_HEIGHT,
  FA_SMALL_FONT_SIZE,
  emergence,
} from '@src/styled';

interface AppProps {
  isAuthorized: boolean,
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: 0;
    font-family: 'Open Sans', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #fff;
  }

  #app {
    width: 100%;
    min-width: 700px;
    min-height: 100%;
    box-sizing: border-box;
    padding-bottom: ${ FOOTER_HEIGHT };
    height: auto;
    background-color: #f3f3f4;
  }
  
  .activeMainMenuItem {
    background-color: #293846;
    color: #fff;
    &::before {
      background-color: #19aa8d;
    }
  }

  .activeDevicesMenuItem {
    color: #19aa8d;
    background-color: #293846;
  }

  .dashboardWidgetWrapper {
    overflow: hidden;
    animation-name: ${ emergence};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: both;
    display: inline-block;
    vertical-align: top;
    --background-color: rgba(255, 0, 0, .4);
    position: relative;    
    &::before {
      content: "";
      display: block;
      padding-top: 62%;
    }
  }

  .dashboardWidgetPreview {
    box-sizing: border-box;
    z-index: 1000;
    opacity: 0.5;
    &::before {
      content: "";
      display: block;
      padding-top: 62%;
    }
  }

  #footer {
    width: 100%;
    height: ${ FOOTER_HEIGHT };
    margin-top: -${ FOOTER_HEIGHT };
    margin-left: 0;
    box-sizing: border-box;
    border-top: 1px solid #e7eaec;
    position: relative;
    background-color: #fff;
  }

  #copyright {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: calc(${ FA_SMALL_FONT_SIZE } - 2px);
    font-weight: 600;
    color: #676a6c;
    &::before {
      content: "\f1f9";
      font-family: 'FontAwesome';
      font-size: calc(${ FA_SMALL_FONT_SIZE } - 2px);
      color: #676a6c;
      margin-right: 3px;
    }
    &::after {
      content: "${ new Date().getFullYear() }";
      font-size: calc(${ FA_SMALL_FONT_SIZE } - 2px);
      color: #676a6c;
      margin-left: 3px;
    }
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('${FontAwesomeEOT}?v=4.7.0');
    src: url('${FontAwesomeEOT}?#iefix&v=4.7.0') format('embedded-opentype'), 
         url('${FontAwesomeWOFF2}?v=4.7.0') format('woff2'), 
         url('${FontAwesomeTTF}?v=4.7.0') format('truetype'), 
         url('${FontAwesomeWOFF}?v=4.7.0') format('woff'), 
         url('${FontAwesomeSVG}?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

export const App: React.SFC<AppProps> = (props) => {
  const { isAuthorized } = props;
  return (
    <Switch>
      <Route exact path={'/login'} render={() => (
        !isAuthorized ? (
          <LoginConnected />
        ) : (
          <Redirect to={'/'} />
        )
      )} />
      <Route path={'/'} render={() => (
        isAuthorized ? (
          <MainConnected />
        ) : (
          <Redirect to={'/login'} />
        )
      )}/>
    </Switch>
  );
}