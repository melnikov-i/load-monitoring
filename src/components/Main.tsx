import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
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
  // DoOpenDevices,
  DevicesMenuLink,
  // DevicesMenuLinkMiddleClother,
  DevicesMenuLinkSpan,
  MainPage,
  MainTop,
  SmallMenuButton,
  MainContent,
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
  isDevicesMenuOpened: IsOpenedInterface,
  isMainMenuOpened: IsOpenedInterface,
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doMainMenuOnSmallScreenSwitch: () => any,
  doDevicesMenuOnBigScreenSwitch: () => any,

  doDevicesMenuViewSwitch: () => any,
  doOpenMainMenuWhenSmallScreenSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuModel,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuModel,
    isDevicesMenuOpened,
    isMainMenuOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    // doMainMenuOnSmallScreenSwitch,
    doDevicesMenuOnBigScreenSwitch,

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
    if ( e.currentTarget.clientWidth === 220 ) {
      doDevicesMenuOnBigScreenSwitch();
    }
    // e.preventDefault();
    // if ( Boolean(e.currentTarget.id) ) {
    //   switch ( e.currentTarget.id ) {
    //     case "fakeLink": doDevicesMenuViewSwitch();
    //   }
    // } else {
    // }


    console.log(e.currentTarget.clientWidth);
    console.log('"' + e.currentTarget.id + '"');
    console.log(Boolean(e.currentTarget.id));
    // doDevicesMenuViewSwitch();
  }

  console.log('[isMainMenuOpened]',isMainMenuOpened);
  console.log('[isDevicesMenuOpened]',isDevicesMenuOpened);

  const doOpenMainMenuHandler = () => {
    if ( isDevicesMenuOpened ) {
      doDevicesMenuViewSwitch();
    }
    doOpenMainMenuWhenSmallScreenSwitch();
  }

  /*
    BIG_SCREEN: 
    -----------
      По нажатию на FakeLink раскрывается меню устройств.
      FakeLink должна переключать:
        - ключ isDevicesMenuOpenedOnBigScreen при большом разрешении
        - ключ isDevicesMenuOpenedOnMiddleScreen при среднем разрешении
        - ключ isDevicesMenuOpenedOnSmallScreen при малом разрешении

      В StyledComponents необходимо передавать все три, 
      а менять их по обработке события (ширина страницы) 

      

      По нажатию на пункт меню устройств, меню устройств 
      не схлопывается
      
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
          onSmallScreen={isMainMenuOpened.onSmallScreen}
        >
          <SmallMenuButton 
          onClick={doOpenMainMenuHandler}
          onLoad={() => console.log('loaded.')}
          onSmallScreen={isMainMenuOpened.onSmallScreen} />
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
                          onBigScreen={isDevicesMenuOpened.onBigScreen}
                          id={'fakeLink'}
                          onClick={doOpenDevicesHandler}
                        >
                          <MainMenuLinkSpan
                            icon={ '\\' + e.icon }
                          >
                            { e.value }

                          </MainMenuLinkSpan>                          
                        </MainMenuFakeLink>
                        <DevicesMenuLayout
                          onBigScreen={isDevicesMenuOpened.onBigScreen}
                          onMiddleScreen={isDevicesMenuOpened.onMiddleScreen}
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
        <MainPage onSmallScreen={isDevicesMenuOpened.onSmallScreen}>
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
        </MainPage>
      </MainLayout>
    </Router>
  );
};