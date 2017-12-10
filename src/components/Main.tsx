import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { MainMenuLinksInterface } from '@src/interfaces';

import {
  MainLayout,
  MainMenu,
  MainMenuLogoWrapper,
  MainMenuLogo,
  MainMenuWrapper,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuLinkSpan,
  DevicesMenuLayout,
  DoOpenDevices,
  DevicesMenuLink,
  DevicesMenuLinkSpan,
  MainPage,
  MainTop,
  MainContent,
  MainFooter,
} from '@src/styled';

import {
  DevicesLoadable,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuModel: MainMenuLinksInterface[],
  DevicesMenuModel: MainMenuLinksInterface[],
  isOpened: boolean,
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doDevicesMenuViewSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuModel,
    DevicesMenuModel,
    isOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doDevicesMenuViewSwitch,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( MainMenuModel.length === 0 ) {
      makeMainMenuRequestToAPI();
      return [];
    } else {
      return MainMenuModel;
    }
  };
  const mainMenuItems: MainMenuLinksInterface[] = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( DevicesMenuModel.length === 0 ) {
      makeDevicesMenuRequestToAPI();
      return [];
    } else {
      return DevicesMenuModel;
    }
  }
  const devicesMenuItems: MainMenuLinksInterface[] = getDevicesMenu();
  
  const doOpenDevicesHandler = () => {
    doDevicesMenuViewSwitch();
  }

  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu>
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
          <MainMenuWrapper>
            <MainMenuLayout isOpened={isOpened}>
              {
                mainMenuItems.map((e, i) => {
                  return (
                    <MainMenuItem key={i}>
                      <MainMenuLink
                        to={'/' + e.to}
                        activeClassName={'activeMainMenuItem'}
                        title={e.value}
                      >
                        <MainMenuLinkSpan 
                          isOpened={isOpened}
                          icon={'\\' + e.icon}
                        >
                          {e.value}
                        </MainMenuLinkSpan>
                      </MainMenuLink>
                    </MainMenuItem>
                  );
                })
              }
            </MainMenuLayout>
            <DevicesMenuLayout isOpened={isOpened}>
              <DoOpenDevices
                onClick={doOpenDevicesHandler}
                isOpened={isOpened}
              ></DoOpenDevices>
              {
                devicesMenuItems.map((e, i) => {
                  return (
                    <MainMenuItem key={i}>
                      <DevicesMenuLink
                        to={'/devices/' + e.to}
                        activeClassName={'activeDevicesMenuItem'}
                        title={e.value}
                      >
                        <DevicesMenuLinkSpan 
                          isOpened={isOpened}
                          icon={'\\' + e.icon}
                        >
                          {e.value}
                        </DevicesMenuLinkSpan>
                      </DevicesMenuLink>
                    </MainMenuItem>
                  );
                })
              }
            </DevicesMenuLayout>
          </MainMenuWrapper>
        </MainMenu>
        <MainPage>
          <MainTop></MainTop>
          <MainContent>
            <Switch>
              <Route
                exact path="/overview"
                component={PageOverview} />
              <Route
                exact path={'/devices'}
                component={DevicesLoadable} />
              <Route 
                exact path={'/'}
                component={PageOverview} />
            </Switch>
          </MainContent>
          <MainFooter></MainFooter>
        </MainPage>      
      </MainLayout>
    </Router>
  );
};