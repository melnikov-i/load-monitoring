import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { MainMenuLinksInterface } from '@src/interfaces';

import {
  MainLayout,
  MainPage,
  MainTop,
  MainContent,
  MainFooter,
  MainMenu,
  MainMenuLayout,
  MainMenuItem,
  MainMenuLink,
  MainMenuSubLink,
  MainMenuLinkSpan,
  MainMenuSubLinkSpan,
  MainMenuLogoWrapper,
  MainMenuLogo,
  MainMenuSubLayout
} from '@src/styled';

import {
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuModel: MainMenuLinksInterface[],
  makeMenuRequestToAPI: () => any,

  isCompositeActive: boolean,
  doCompositeSwitch: 
  ( payload: MainMenuLinksInterface['to'] ) => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    MainMenuModel,
    makeMenuRequestToAPI,
    // isCompositeActive,
    // doCompositeSwitch,
  } = props;

  const getMainMenu = (): MainMenuLinksInterface[] => {
    if ( MainMenuModel.length === 0 ) {
      makeMenuRequestToAPI();
      return [];
    } else {
      return MainMenuModel;
    }
  };

  const mainMenuItems: MainMenuLinksInterface[] = getMainMenu();
  const isCompositeActive: boolean = false;
  
  console.log('[MainMenu]', MainMenuModel)


  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu>
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
          <MainMenuLayout isCompositeActive={isCompositeActive}>
          {
            mainMenuItems.map((e, i) =>{
              return (
                <MainMenuItem key={i}>
                  <MainMenuLink
                    to={'/' + e.to}
                    activeClassName={'activeMainMenuItem'}
                  ><MainMenuLinkSpan 
                      isCompositeActive={isCompositeActive}
                      icon={'\\' + e.icon}
                      height={'46px'}
                    >{e.value}</MainMenuLinkSpan>
                  </MainMenuLink>
                  {
                    ( e.childrens !== undefined )
                    ? <MainMenuSubLayout
                      isCompositeActive={isCompositeActive}
                    >
                      { e.childrens.map((e, i) => {
                        return (
                          <MainMenuItem key={i}>
                            <MainMenuSubLink
                              to={'/devices/' + e.to}
                              activeClassName={'activeSubMenuItem'}
                            ><MainMenuSubLinkSpan
                                isCompositeActive={false}
                                icon={'\\' + e.icon}
                              >{e.value}</MainMenuSubLinkSpan>
                            </MainMenuSubLink>
                            }
                          </MainMenuItem>
                        );
                      })
                    }
                    </MainMenuSubLayout>
                    : null }
                </MainMenuItem>
              );
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
}