import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

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
  MainMenuLinkIcon,
  MainMenuLogoWrapper,
  MainMenuLogo,
  TestMain,
} from '@src/styled';

import {
  Devices,
  PageOverview,
} from '@src/containers';

interface MainProps {
  MainMenuModel: any,
  CompositeFieldSwitch: boolean,
  makeMenuRequestToAPI: () => any,
  compositeFieldChangeState: (payload: boolean) => any,
}

export const Main: React.SFC<MainProps> = (props) => {
  const {
    makeMenuRequestToAPI,
    CompositeFieldSwitch,
    // compositeFieldChangeState,
  } = props;
  
  console.log('[CompositeFieldSwitch]', CompositeFieldSwitch)

  const testHandler = () => {
    makeMenuRequestToAPI();
  }

  const CompositeFieldActiveHandler = (match, location) => {
    // if ( !match ) {
    //   return false;
    // } else {
      console.log('[match]', match);
      console.log('[location]', location);
    //   return true;
    // }
    // compositeFieldChangeState(false);
  }

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
                activeClassName={'activeMainMenuItem'}
                 isActive={CompositeFieldActiveHandler}
              ><MainMenuLinkIcon icon={'\f0e8'} />
                <MainMenuLinkSpan fontSize={'13px'}>
                  {'Обзор Системы'}
                </MainMenuLinkSpan>
              </MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/devices'}
                activeClassName={'activeMainMenuItem'}
                isActive={CompositeFieldActiveHandler}
              ><MainMenuLinkIcon icon={'\f233'} />
                <MainMenuLinkSpan fontSize={'13px'}>
                  {'Устройства'}                  
                </MainMenuLinkSpan>
              </MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink
                to={'/settings'}
                activeClassName={'activeMainMenuItem'}
                isActive={CompositeFieldActiveHandler}
              ><MainMenuLinkIcon icon={'\f013'} />
                <MainMenuLinkSpan fontSize={'13px'}>
                  {'Настройка'}
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