/**
 * Корневой компонент приложения.
 * В нем подключаются глобальные шрифты, стили и выполняется
 * проверка авторизации. В зависимости от полученной информации
 * с бэкэнда, подгружается либо основная страница, либо страница
 * авторизации.
 */
import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

/** импорт шрифтов FontAwesome */
const fontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const fontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const fontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const fontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const fontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

/** Компоненты, подгружаемые в процессе проверки авторизации */
import Login from '@src/components/login';
import Registration from '@src/components/registration';
import Recovery from '@src/components/recovery';
import MainConnected from '@src/usage/MainUsage';

/** Глобальные стили */
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
    src: url('${fontAwesomeEOT}?v=4.7.0');
    src: url('${fontAwesomeEOT}?#iefix&v=4.7.0') format('embedded-opentype'), 
         url('${fontAwesomeWOFF2}?v=4.7.0') format('woff2'), 
         url('${fontAwesomeTTF}?v=4.7.0') format('truetype'), 
         url('${fontAwesomeWOFF}?v=4.7.0') format('woff'), 
         url('${fontAwesomeSVG}?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

interface RouterProps extends RouteComponentProps<void> {
  // isAuthorized: boolean,
}

export const Router: React.SFC<RouterProps> = (props) => {
  const { /* isAuthorized */ } = props;

  const isAuthorized: boolean = false;

  return (
    <Switch>
      {/** Страницы, доступ на которые возможен после проверки авторизации */}
      <Route exact path={'/login'} render={() => !isAuthorized ? <Login /> : <Redirect to={'/'} />} />
      <Route exact path={'/'} render={() => isAuthorized ? <MainConnected /> : <Redirect to={'/login'} />} />
      {/** Страницы, доступ на которые открыт */}
      <Route exact path={'/registration'} render={() => <Registration />} />
      <Route exact path={'/recovery'} render={() => <Recovery />} />

    </Switch>
  );
}