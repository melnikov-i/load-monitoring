import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

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
  MainMenuLinkSpan,
  // MainMenuLinkIcon,
  MainMenuLogoWrapper,
  MainMenuLogo,
  TestMain,
} from '@src/styled';

import {
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  isCompositeActive: boolean,
  MainMenuModel: any,
  makeMenuRequestToAPI: () => any,
  doCompositeSwitch: ( payload: MainMenuLinksInterface['to'] ) => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    makeMenuRequestToAPI,
    isCompositeActive,
    doCompositeSwitch,
  } = props;
  
  console.log('[isCompositeActive]', isCompositeActive)

  const testHandler = () => {
    makeMenuRequestToAPI();
  }

  const activeLinkHandler = (match) => {
    if ( match ) {
      console.log('[match]', match);
      doCompositeSwitch(match.path);
    }
  }
              // ><MainMenuLinkIcon icon={'\f0e8'} />
              // ><MainMenuLinkIcon icon={'\f233'} />
              // ><MainMenuLinkIcon icon={'\f013'} />

  return (
    <Router hashType={'slash'} basename={'/'}>
      <MainLayout>
        <MainMenu>
          <MainMenuLogoWrapper>
            <MainMenuLogo></MainMenuLogo>
          </MainMenuLogoWrapper>
          <MainMenuLayout>
            <MainMenuItem>
              <MainMenuLink
                to={'/overview'}
                isActive={activeLinkHandler}
                activeStyle={{
                  color: 'red',
                }}
              ><MainMenuLinkSpan 
                isCompositeActive={isCompositeActive}
                icon={'\f0e8'}
              >{'Обзор Системы'}
                </MainMenuLinkSpan>
              </MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/devices'}
                isActive={activeLinkHandler}
              ><MainMenuLinkSpan 
                isCompositeActive={isCompositeActive}
                icon={'\f233'}
              >{'Устройства'}                  
                </MainMenuLinkSpan>
              </MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/settings'}
                isActive={activeLinkHandler}
              ><MainMenuLinkSpan 
                isCompositeActive={isCompositeActive}
                icon={'\f013'}
              >{'Настройка'}
                </MainMenuLinkSpan>
              </MainMenuLink>
            </MainMenuItem>
          </MainMenuLayout>
          
        <TestMain onClick={testHandler}>Test</TestMain>
        
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
    </Router>
  );
}