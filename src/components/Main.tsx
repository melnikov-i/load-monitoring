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
  // DevicesLoadable,
  Devices,
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

// type Menu = {
//   main: MainMenuLinksInterface[],
//   devices: MainMenuLinksInterface[],
// };

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuModel,
    DevicesMenuModel,
    isOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doDevicesMenuViewSwitch,
  } = props;

  // const getMenu = (): Menu => {
  //   let key: number = 0;
  //   if ( MainMenuModel.length === 0 ) {
  //     key = 1; // Зпросить только главное меню
  //   }
  //   if ( DevicesMenuModel.length === 0 ) {
  //     if ( key === 0 ) key = 2; // запросить только меню устройств
  //     else key = 3; // запросить оба
  //   }
  //     // makeMainMenuRequestToAPI();i
  //     console.log('[GET_MAIN_MENU]', MainMenuModel);
  //   return {main: MainMenuModel, devices: DevicesMenuModel};
  // }

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( MainMenuModel.length === 0 ) {
      console.log('[GET_MAIN_MENU]', MainMenuModel);
      makeMainMenuRequestToAPI();
    }
    return MainMenuModel;
  };
  // const mainMenuItems: MainMenuLinksInterface[] = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( DevicesMenuModel.length === 0 ) {
      console.log('[GET_DEVICES_MENU]', DevicesMenuModel);
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuModel;
  }
  // const devicesMenuItems: MainMenuLinksInterface[] = getDevicesMenu();
  
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
                getMainMenu().map((e, i) => {
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
                getDevicesMenu().map((e, i) => {
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
                component={Devices} />
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