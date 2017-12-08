import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

import {
  MIDDLE_SCREEN_MAX,
  MIDDLE_SCREEN_MIN,
} from '@src/styled';

import store from './store';
import MainConnected from '@src/connected/MainConnected.usage';

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
    height: 100%;
  }
  
  .activeMainMenuItem {
    background-color: #293846;
    color: #fff;
    &::before {
      content: "";
      display: inline-block;
      vertical-align: top;
      width: 5px;
      height: 100%;
      background-color: #19aa8d;
      margin-right: 20px;
    }
    @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 0;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: top;
        width: 5px;
        height: 100%;
        margin-right: 12px;
      }
    }
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('${FontAwesomeEOT}?v=4.7.0');
    src: url('${FontAwesomeEOT}?#iefix&v=4.7.0') format('embedded-opentype'), 
         url('${FontAwesomeWOFF2}?v=4.7.0') format('woff2'), 
         url('${FontAwesomeWOFF}?v=4.7.0') format('woff'), 
         url('${FontAwesomeTTF}?v=4.7.0') format('truetype'), 
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

