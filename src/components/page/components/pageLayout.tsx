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
  PageLayoutContentCollumn
} from './'

interface PageLayoutProps extends RouteComponentProps<void> {
  isMenuItemActiveOnSmallScreen: string,
}

export const PageLayout: React.SFC<PageLayoutProps> = (props) => {
  const { isMenuItemActiveOnSmallScreen } = props;
  console.log('[PageLayout]');
  return (
    <Layout>
      <PageLayoutMenuCollumn active={isMenuItemActiveOnSmallScreen}>
        <PageUserinfo />
        <PageMenu />
      </PageLayoutMenuCollumn>
      <PageLayoutContentCollumn active={isMenuItemActiveOnSmallScreen}>
        <PageRouter />
      </PageLayoutContentCollumn>
    </Layout>
  );
};