import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  MainMenu,
  MainLayout,
  MainPage,
  MainTop,
  MainContent,
  MainFooter,
  MainMenuItem,
  MainMenuLink,
} from '@src/styled';

import {
  DashBoard,
  PageOverview,
} from '@src/containers';

export const App = () => {
  return (
    <MainLayout>
      <MainMenu>
        <ul>
          <MainMenuItem>
            <MainMenuLink
              to="/overview"
            >Обзор Системы</MainMenuLink>
          </MainMenuItem>
          <MainMenuItem>
            <MainMenuLink
              to="/dashboard"
            >Устройства</MainMenuLink>
          </MainMenuItem>
        </ul>
      </MainMenu>
      <MainPage>
        <MainTop></MainTop>
        <MainContent>
          <Switch>
            <Route exact path="/overview" component={PageOverview} />
            <Route exact path="/dashboard" component={DashBoard} />            
          </Switch>
        </MainContent>
        <MainFooter></MainFooter>        
      </MainPage>
      
    </MainLayout>
  );
}

/*
      <Route path={'/dashboard'} component={DashBoard} />
    <Wrapper>
      <Header>CPU Common Load</Header>
      <CPUCommonLoadConnected />
    </Wrapper>

*/