import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

import store from './store';
import MainConnected from '@src/connected/MainConnected.usage';

import {
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX,
  MENU_LAYOUT_MIDDLE_WIDTH,
  FOOTER_HEIGHT,
  MENU_LAYOUT_BIG_WIDTH,
} from '@src/styled';

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

  #app {
    width: 100%;
    min-width: 700px;
    min-height: 100%;
    height: auto;
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

  #footer {
    width: calc(100% - ${ MENU_LAYOUT_BIG_WIDTH });
    margin-left: ${ MENU_LAYOUT_BIG_WIDTH };
    height: ${ FOOTER_HEIGHT };
    margin-top: -${ FOOTER_HEIGHT };
    box-sizing: border-box;
    border-top: 1px solid #e7eaec;
    @media screen 
      and (min-width: ${ MIDDLE_SCREEN_MIN }) 
      and (max-width: ${ MIDDLE_SCREEN_MAX }) {
        width: calc(100% - ${ MENU_LAYOUT_MIDDLE_WIDTH });
        margin-left: ${ MENU_LAYOUT_MIDDLE_WIDTH };
      }
    @media screen
      and (max-width: ${ SMALL_SCREEN_MAX }) {
        width: 100%;
        margin-left: 0;
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

const Root: JSX.Element = (
  <Provider store={ store }>
    <MainConnected />
  </Provider>
);

render(
  Root, document.getElementById('app')
);

