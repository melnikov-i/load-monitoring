/**
 * PageLayout -- компонент, содержащий каркас основной страницы.
 * Внутри себя содержит остальные компоненты страницы.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  PageUserinfoConnected as PageUserinfo,
  PageMenuConnected as PageMenu,
  PageRouterConnected as PageRouter
} from '../connected';

import {
  Layout,
  PageLayoutMenuCollumn,
  PageLayoutHeader,
  PageLayoutContentCollumn,
  PageHeaderExitWrapper,
  PageHeaderExitLink,
  PageLayoutFooter,
  PageLayoutFooterCopyright,
} from './'

interface PageLayoutProps extends RouteComponentProps<void> {
  isSubmenuActiveOnSmallScreen: boolean,
  sendLogoutToApi: () => any,
}

export const PageLayout: React.SFC<PageLayoutProps> = (props) => {
  const { isSubmenuActiveOnSmallScreen, sendLogoutToApi } = props;

  /** Обработчики событий */
  const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sendLogoutToApi();
  };

  return (
    <Layout>
      <PageLayoutMenuCollumn
        isSubmenuActiveOnSmallScreen={isSubmenuActiveOnSmallScreen}>
        <PageUserinfo />
        <PageMenu />
      </PageLayoutMenuCollumn>
      <PageLayoutContentCollumn>
      
        <PageLayoutHeader>
          <PageHeaderExitWrapper>
            <PageHeaderExitLink
              to={'/'}
              onClick={logoutHandler}
            >{'Выход'}</PageHeaderExitLink>
          </PageHeaderExitWrapper>
        </PageLayoutHeader>
        
        <PageRouter />
      
      </PageLayoutContentCollumn>
      <PageLayoutFooter>
        <PageLayoutFooterCopyright>{'Monyze'}</PageLayoutFooterCopyright>
      </PageLayoutFooter>
    </Layout>
  );
};