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
  MainMenuWasRequestedFromAPI: boolean,
  MainMenuModel: MainMenuLinksInterface[],
  DevicesMenuWasRequestedFromAPI: boolean,
  DevicesMenuModel: MainMenuLinksInterface[],
  isOpened: DevicesMenuLayoutInterface['isOpened'],
  makeMainMenuRequestToAPI: () => any,
  makeDevicesMenuRequestToAPI: () => any,
  doDevicesMenuViewSwitch: () => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuWasRequestedFromAPI,
    MainMenuModel,
    DevicesMenuWasRequestedFromAPI,
    DevicesMenuModel,
    isOpened,
    makeMainMenuRequestToAPI,
    makeDevicesMenuRequestToAPI,
    doDevicesMenuViewSwitch,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( !MainMenuWasRequestedFromAPI ) {
      console.log('[GET_MAIN_MENU]', MainMenuModel);
      makeMainMenuRequestToAPI();
    }
    return MainMenuModel;
  };

  const getDevicesMenu = (): MainMenuLinksInterface[] => {
    if ( !DevicesMenuWasRequestedFromAPI ) {
      console.log('[GET_DEVICES_MENU]', DevicesMenuModel);
      makeDevicesMenuRequestToAPI();
    }
    return DevicesMenuModel;
  };

  console.log('[GET_DEVICES]:',getDevicesMenu());

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
            <MainMenuLayout>
              {
                getMainMenu().map((e, i) => {
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
                            getDevicesMenu().map((e, i) => {
                              console.log(e);
                              return (
                                <MainMenuItem key={i}>
                                  <DevicesMenuLink
                                    to={'/' + e.to}
                                    activeClassName={'activeDevicesMenuItem'}
                                    title={e.value}
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
            // <DevicesMenuLayout isOpened={isOpened}>
            //   <DoOpenDevices
            //     onClick={doOpenDevicesHandler}
            //     isOpened={isOpened}
            //   ></DoOpenDevices>
            //   {
            //     getDevicesMenu().map((e, i) => {
            //       return (
            //         <MainMenuItem key={i}>
            //           <DevicesMenuLink
            //             to={'/devices/' + e.to}
            //             activeClassName={'activeDevicesMenuItem'}
            //             title={e.value}
            //           >
            //             <DevicesMenuLinkSpan 
            //               isOpened={isOpened}
            //               icon={'\\' + e.icon}
            //             >
            //               {e.value}
            //             </DevicesMenuLinkSpan>
            //           </DevicesMenuLink>
            //         </MainMenuItem>
            //       );
            //     })
            //   }
            // </DevicesMenuLayout>