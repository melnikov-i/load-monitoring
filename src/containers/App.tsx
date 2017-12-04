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
  MainMenuLinkIcon,
  // MainMenuLinkBefore,
  MainMenuLogoWrapper,
  MainMenuLogo,
} from '@src/styled';

import {
  Devices,
  PageOverview,
} from '@src/containers';

export const App = () => {
  return (
    <MainLayout>      
      <MainMenu>
        <MainMenuLogoWrapper>
          <MainMenuLogo></MainMenuLogo>
        </MainMenuLogoWrapper>
        <ul>
          <MainMenuItem>            
            <MainMenuLink
              to={'/overview'}
              activeClassName={'activeMainMenuItem'}
            ><MainMenuLinkIcon value={'\f0e8'} />Обзор Системы</MainMenuLink>
          </MainMenuItem>
          <MainMenuItem>
            <MainMenuLink
              to={'/devices'}
              activeClassName={'activeMainMenuItem'}
            ><MainMenuLinkIcon value={'\f233'} />Устройства</MainMenuLink>
          </MainMenuItem>
          <MainMenuItem>
            <MainMenuLink
              to={'/settings'}
              activeClassName={'activeMainMenuItem'}
            ><MainMenuLinkIcon value={'\f013'} />Настройка</MainMenuLink>
          </MainMenuItem>
        </ul>
      </MainMenu>
      <MainPage>
        <MainTop></MainTop>
        <MainContent>
          <Switch>
            <Route exact path="/overview" component={PageOverview} />
            <Route exact path={'/devices'} component={Devices} />
            <Route exact path={'/'} component={PageOverview} />
          </Switch>
        </MainContent>
        <MainFooter></MainFooter>        
      </MainPage>
      
    </MainLayout>
  );
}