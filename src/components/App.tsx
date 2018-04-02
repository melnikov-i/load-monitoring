/**
 * Корневой компонент приложения.
 * В нем подключаются глобальные шрифты, стили и выполняется
 * проверка авторизации. В зависимости от полученной информации
 * с бэкэнда, подгружается либо основная страница, либо страница
 * авторизации.
 */

import * as React from 'react';
import { injectGlobal } from 'styled-components';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


/* импорт шрифтов FontAwesome */

const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');


/*
 * Компоненты, подгружаемые в процессе проверки авторизации 
 */

import MainConnected from '@src/usage/MainUsage';
import LoginConnected from '@src/usage/LoginUsage';


/* Глобальные стили */

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
    overflow-x: hidden;
  }

  #app {
    width: 100%;
    min-width: 700px;
    min-height: 100%;
    box-sizing: border-box;
    height: auto;
    background-color: #f3f3f4;
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


interface AppProps {
  isAuthorized: boolean,
}

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