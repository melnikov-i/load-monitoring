import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  DevicesMenuLayoutInterface,
} from '@src/interfaces';

import {
  MainLayout,
  MainMenu,
  MainMenuLogoWrapper,
  MainMenuLogo,
  // MainMenuWrapper,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuFakeLink,
  MainMenuLinkSpan,
  DevicesMenuLayout,
  DoOpenDevices,
  DevicesMenuLink,
  // DevicesMenuLinkMiddleClother,
  DevicesMenuLinkSpan,
  MainPage,
  MainTop,
  SmallMenuButton,
  MainContent,
  MainFooter,
} from '@src/styled';

import {
  // DevicesLoadable,
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuModel: MainMenuLinksInterface[],
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuModel: MainMenuLinksInterface[],
  isOpened: DevicesMenuLayoutInterface['isOpened'],
  isMainMenuOpened: DevicesMenuLayoutInterface['isOpened'],
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doDevicesMenuViewSwitch: () => any,
  doOpenMainMenuWhenSmallScreenSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuModel,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuModel,
    isOpened,
    isMainMenuOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doDevicesMenuViewSwitch,
    doOpenMainMenuWhenSmallScreenSwitch,
  } = props;


  
  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuModel;
  };

  const mainMenu = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuModel;
  };

  const devicesMenu = getDevicesMenu();

  const doOpenDevicesHandler = (e: React.MouseEvent<HTMLLinkElement & HTMLUListElement>) => {
    // e.preventDefault();
    if ( Boolean(e.currentTarget.id) ) {
      switch ( e.currentTarget.id ) {
        case "fakeLink": doDevicesMenuViewSwitch();
      }
    } else {
      if ( e.currentTarget.clientWidth !== 215 ) {
        doDevicesMenuViewSwitch();
      }
    }


    console.log(e.currentTarget.clientWidth);
    console.log('"' + e.currentTarget.id + '"');
    console.log(Boolean(e.currentTarget.id));
    // doDevicesMenuViewSwitch();
  }

  console.log('[isMainMenuOpened]',isMainMenuOpened);
  console.log('[isOpened]',isOpened);

  const doOpenMainMenuWhenSmallScreenHandler = () => {
    if ( isOpened ) {
      doDevicesMenuViewSwitch();
    }
    doOpenMainMenuWhenSmallScreenSwitch();
  }

  /*
    BIG_SCREEN: 
    -----------
      1. Основное меню не убирается.
      2. Меню устройств не складывается
    MIDDLE_SCREEN:
    --------------
      1. Основное меню не убирается.
      2. Меню устройств убирается
    SMALL_SCREEN:
    -------------
      1. Основное меню убирается по таймауту
      2. Меню устройств убирается
  */

  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu
          isOpened={isMainMenuOpened}
        >
          <SmallMenuButton 
          onClick={doOpenMainMenuWhenSmallScreenHandler}
          onLoad={() => console.log('loaded.')}
          isOpened={isMainMenuOpened} />
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
            <MainMenuLayout>
              {
                mainMenu.map((e, i) => {
                  if ( e.to !== 'devices' ) {
                    return (
                      <MainMenuItem key={i}>
                        <MainMenuLink
                          to={'/' + e.to}
                          activeClassName={'activeMainMenuItem'}
                          title={e.value}
                        >
                          <MainMenuLinkSpan
                            icon={ '\\' + e.icon }
                          >
                            { e.value }
                          </MainMenuLinkSpan>
                        </MainMenuLink>
                      </MainMenuItem>
                    );
                  } else {
                    return (
                      <MainMenuItem key={i}>
                        <MainMenuFakeLink
                          isOpened={isOpened}
                          id={'fakeLink'}
                          onClick={doOpenDevicesHandler}
                        >
                          <MainMenuLinkSpan
                            icon={ '\\' + e.icon }
                          >
                            { e.value }
                            <DoOpenDevices
                              isOpened={isOpened}
                            ></DoOpenDevices>
                          </MainMenuLinkSpan>                          
                        </MainMenuFakeLink>
                        <DevicesMenuLayout
                          isOpened={isOpened}
                        >
                          <MainMenuItem>
                            <DevicesMenuLink
                              to={'/devices'}
                              activeClassName={'activeDevicesMenuItem'}
                              title={'Все устройства'}
                            >
                              <DevicesMenuLinkSpan
                                icon={'\\f069'}
                              >
                                { 'Все устройства' }
                              </DevicesMenuLinkSpan>
                            </DevicesMenuLink>
                          </MainMenuItem>
                          {
                            devicesMenu.map((e, i) => {
                              return (
                                <MainMenuItem key={i}>
                                  <DevicesMenuLink
                                    to={'/' + e.to}
                                    activeClassName={'activeDevicesMenuItem'}
                                    title={e.value}
                                    onClick={doOpenDevicesHandler}
                                  >
                                    <DevicesMenuLinkSpan
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
                      </MainMenuItem>
                    )
                  }
                })
              }
            </MainMenuLayout>
        </MainMenu>
        <MainPage>
          <MainTop>
            
          </MainTop>
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
                                    // <DevicesMenuLinkMiddleClother
                                    //   onClick={doOpenDevicesHandler}
                                    // ></DevicesMenuLinkMiddleClother>
                              // <DevicesMenuLinkMiddleClother
                              //   onClick={doOpenDevicesHandler}
                              // ></DevicesMenuLinkMiddleClother>