import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  IsOpenedUserMenuInterface
} from '@src/interfaces';

import {
  MainLayout,
  MainMenu,
  MainMenuLogoWrapper,
  MainMenuLogo,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuFakeLink,
  MainMenuLinkSpan,
  DevicesMenuLayout,
  DevicesMenuLink,
  DevicesMenuLinkSpan,
  MainPage,
  MainTop,
  SmallMenuButton,
  MainContent,
  UserMenuFakeLink,
  UserMenuLayout,
  UserMenuItem,
  UserMenuLink,
  UserMenuLinkSpan,
} from '@src/styled';

import {
  // DevicesLoadable,
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuModel: MainMenuLinksInterface[],
  UserMenuModel: UserMenuInterface,
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuModel: MainMenuLinksInterface[],
  isDevicesMenuOpened: IsOpenedInterface,
  isMainMenuOpened: IsOpenedInterface,
  isUserMenuOpened: IsOpenedUserMenuInterface,
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doMainMenuOnSmallScreenSwitch: () => any,
  doDevicesMenuOnBigScreenSwitch: () => any,
  doDevicesMenuOnMiddleScreenSwitch: () => any,
  doDevicesMenuOnSmallScreenSwitch: () => any,
  doBothMenuOnSmallScreenOff: () => any,
  doUserMenuOnBigScreenSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuModel,
    UserMenuModel,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuModel,
    isDevicesMenuOpened,
    isMainMenuOpened,
    isUserMenuOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doMainMenuOnSmallScreenSwitch,
    doDevicesMenuOnBigScreenSwitch,
    doDevicesMenuOnMiddleScreenSwitch,
    doDevicesMenuOnSmallScreenSwitch,
    doBothMenuOnSmallScreenOff,
    doUserMenuOnBigScreenSwitch,
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

  /* Обработчики событий */

  const doOpenMainMenuHandler = () => {
    doMainMenuOnSmallScreenSwitch();
  }

  const mainMenuFakeLinkHandler = (e: React.MouseEvent<HTMLLinkElement>) => {
    if ( e.currentTarget.clientWidth === 60 ) {
      if ( window.innerWidth < 768 ) {
        doDevicesMenuOnSmallScreenSwitch();
      } else {
        doDevicesMenuOnMiddleScreenSwitch();
      }
    } else {
      doDevicesMenuOnBigScreenSwitch();
    }
  };

  const devicesMenuLinkHandler = (e: React.MouseEvent<HTMLLinkElement>) => {
     if ( e.currentTarget.clientWidth !== 215 ) {
      if ( window.innerWidth < 768 ) {
        doBothMenuOnSmallScreenOff();
      } else {
        doDevicesMenuOnMiddleScreenSwitch();
      }
    }
  };

  const userMenuLinkHandler = () => {
    doUserMenuOnBigScreenSwitch();
  }

  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu
          onSmallScreen={isMainMenuOpened.onSmallScreen}
        >
          <SmallMenuButton 
            onClick={doOpenMainMenuHandler}
            onSmallScreen={isMainMenuOpened.onSmallScreen}
            id={'smallMenuButton'} />
          <MainMenuLogoWrapper>
            <MainMenuLogo>
              <UserMenuFakeLink 
                onBigScreen={isUserMenuOpened.onBigScreen}
                onClick={userMenuLinkHandler}
              >
                { UserMenuModel.user[0].login }
              </UserMenuFakeLink>
              <UserMenuLayout
                onBigScreen={isUserMenuOpened.onBigScreen}
              >
                {
                  UserMenuModel.links.map((e, i) => {
                    return (
                      <UserMenuItem key={i}>
                        <UserMenuLink
                          to={'/' + e.to}
                          title={e.value}
                          onClick={userMenuLinkHandler}
                        >
                          <UserMenuLinkSpan>
                            { e.value }
                          </UserMenuLinkSpan>
                        </UserMenuLink>
                      </UserMenuItem>
                    );
                  })
                }
              </UserMenuLayout>
            </MainMenuLogo>
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
                        <MainMenuLinkSpan icon={ '\\' + e.icon }>
                          { e.value }
                        </MainMenuLinkSpan>
                      </MainMenuLink>
                    </MainMenuItem>
                  );
                } else {
                  return (
                    <MainMenuItem key={i}>
                      <MainMenuFakeLink
                        onBigScreen={
                          isDevicesMenuOpened.onBigScreen
                        }
                        onMiddleScreen={
                          isDevicesMenuOpened.onMiddleScreen
                        }
                        onSmallScreen={
                          isDevicesMenuOpened.onSmallScreen
                        }
                        onClick={mainMenuFakeLinkHandler}
                      >
                        <MainMenuLinkSpan icon={ '\\' + e.icon }>
                          { e.value }
                        </MainMenuLinkSpan>                          
                      </MainMenuFakeLink>
                      <DevicesMenuLayout
                        onBigScreen={
                          isDevicesMenuOpened.onBigScreen
                        }
                        onMiddleScreen={
                          isDevicesMenuOpened.onMiddleScreen
                        }
                        onSmallScreen={
                          isDevicesMenuOpened.onSmallScreen
                        }
                      >
                        <MainMenuItem>
                          <DevicesMenuLink
                            to={'/devices'}
                            activeClassName={'activeDevicesMenuItem'}
                            title={'Все устройства'}
                            onClick={devicesMenuLinkHandler}
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
                                  onClick={devicesMenuLinkHandler}
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
        <MainPage onSmallScreen={isMainMenuOpened.onSmallScreen}>
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