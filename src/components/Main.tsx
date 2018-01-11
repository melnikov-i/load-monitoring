import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import {
  MainMenuLinksInterface,
  IsOpenedInterface,
  UserMenuInterface,
  DeviceItemsInterface,
  LogOunInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import { Spinner } from '@src/components';

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
  UserMenuButton,
  UserMenuButtonSpan,
  UserMenuLayout,
  UserMenuItem,
  UserMenuLink,
  UserMenuLinkSpan,
  MainTopExitWrapper,
  MainTopExitLink,
} from '@src/styled';

import {
  PageOverview,
} from '@src/containers';

import DevicesConnected from '@src/connected/DevicesConnected.usage';
import DeviceConnected from '@src/connected/DeviceConnected.usage';

interface MainProps {
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuItemsCollection: MainMenuLinksInterface[],
  UserMenuItemsCollection: UserMenuInterface,
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuItemsCollection: MainMenuLinksInterface[],
  isDevicesMenuOpened: IsOpenedInterface,
  isMainMenuOpened: IsOpenedInterface,
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doMainMenuOnSmallScreenSwitch: () => any,
  doDevicesMenuOnBigScreenSwitch: () => any,
  doDevicesMenuOnMiddleScreenSwitch: () => any,
  doDevicesMenuOnSmallScreenSwitch: () => any,
  doBothMenuOnSmallScreenOff: () => any,
  sendLogOutToAPI: (payload: LogOunInterface) => any,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,  
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuItemsCollection,
    makeMainMenuRequestToAPI,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuItemsCollection,
    makeDevicesMenuRequestToAPI,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( !MainMenuWasRequestedFromAPI ) {
      makeMainMenuRequestToAPI();
    }
    return MainMenuItemsCollection;
  };
  const mainMenu = getMainMenu();

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuItemsCollection;
  };
  const devicesMenu = getDevicesMenu();

  /* Покажет компонент после загрузки меню устройств (грузится последним) */
  if ( devicesMenu.length !== 0 ) {
    const {
      UserMenuItemsCollection,
      isDevicesMenuOpened,
      isMainMenuOpened,
      doMainMenuOnSmallScreenSwitch,
      doDevicesMenuOnBigScreenSwitch,
      doDevicesMenuOnMiddleScreenSwitch,
      doDevicesMenuOnSmallScreenSwitch,
      doBothMenuOnSmallScreenOff,
      sendLogOutToAPI,
      DroppedMenuButtonClickedId,      
      changeDroppedMenuClickedId,
    } = props;
  
    /* Обработчики событий */
    const doOpenMainMenuHandler = () => {
      doMainMenuOnSmallScreenSwitch();
    }

    const mainMenuFakeLinkHandler =
    (e: React.MouseEvent<HTMLDivElement>) => {
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

    const devicesMenuLinkHandler = 
    (e: React.MouseEvent<HTMLLinkElement>) => {
       if ( e.currentTarget.clientWidth !== 215 ) {
        if ( window.innerWidth < 768 ) {
          doBothMenuOnSmallScreenOff();
        } else {
          doDevicesMenuOnMiddleScreenSwitch();
        }
      }
    };

    const logOutHandler = () => {
      console.log('[EXIT]');
      const payload: LogOunInterface = {
        step: 'exit',
      };
      sendLogOutToAPI(payload);
    };


    const droppedMenuHandlerRemove = () => {
      document.removeEventListener('click', droppedMenuHandlerRemove);    
      changeDroppedMenuClickedId('');
    };

    const droppedMenuHandler = 
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const current: string =
        String(e.currentTarget.getAttribute('data-button-id'));
      if ( DroppedMenuButtonClickedId === '' ) {
        document.addEventListener('click', droppedMenuHandlerRemove);
        changeDroppedMenuClickedId(current);
      } else {
        if ( current === DroppedMenuButtonClickedId ) {
          changeDroppedMenuClickedId('');
        } else {
          e.nativeEvent.stopImmediatePropagation();
          changeDroppedMenuClickedId(current);
        }
      }
    };

    return (
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
              <UserMenuButton 
              onClick={(e) => droppedMenuHandler(e)}
              data-button-id={'00'}>
                <UserMenuButtonSpan
                isClicked={DroppedMenuButtonClickedId === '00'}>
                  { UserMenuItemsCollection.user[0].login }                  
                </UserMenuButtonSpan>
                <UserMenuLayout
                isClicked={DroppedMenuButtonClickedId === '00'}>
            {
              UserMenuItemsCollection.links.map((e, i) => {
                return (
                  <UserMenuItem key={i}>
                    <UserMenuLink
                    to={'/' + e.to}
                    title={e.value}
                    onClick={ (e.to === 'exit') ? logOutHandler : null }>
                      <UserMenuLinkSpan>
                        { e.value }
                      </UserMenuLinkSpan>
                    </UserMenuLink>
                  </UserMenuItem>
                );
              })
            }
                </UserMenuLayout>              
              </UserMenuButton>              
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
                        <MainMenuLinkSpan icon={ e.icon }>
                          { e.value }
                        </MainMenuLinkSpan>
                      </MainMenuLink>
                    </MainMenuItem>
                  );
                } else {
                  return (
                    <MainMenuItem key={i}>
                      <div onClick={mainMenuFakeLinkHandler}>
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
                        >
                          <MainMenuLinkSpan
                            icon={ e.icon }
                          >
                            { e.value }
                          </MainMenuLinkSpan>
                        </MainMenuFakeLink>
                      </div>
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
                              icon={ 'f069' }
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
                                  activeClassName={
                                    'activeDevicesMenuItem'
                                  }
                                  title={e.value}
                                  onClick={devicesMenuLinkHandler}
                                >
                                  <DevicesMenuLinkSpan
                                    icon={ e.icon }
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
          <MainTop>
            <MainTopExitWrapper>
              <MainTopExitLink
                to={'/'}
                onClick={logOutHandler}
              >
                {'Выход'}
              </MainTopExitLink>
            </MainTopExitWrapper>
          </MainTop>
          <MainContent>
            <Switch>
              <Route
                exact path="/overview"
                component={PageOverview} />
              <Route
                exact path={'/devices'}
                render={()=> (
                  <DevicesConnected />
                )} />
        {
          devicesMenu.map((e, i) => {
            const items: DeviceItemsInterface = {
              id: e.to,
            }
            return (
              <Route 
                key={i}
                exact path={'/' + e.to}
                render={() => (
                  <DeviceConnected items={items} />
                )}
              />
            );
          })
        }
              <Route 
                exact path={'/'}
                component={PageOverview} />
            </Switch>
          </MainContent>
        </MainPage>
      </MainLayout>
    );    
  } else {
    /* Пока подгружаются данные, пользователю показывается спиннер */
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );
  }
};