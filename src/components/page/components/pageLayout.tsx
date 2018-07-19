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
  isSubmenuActiveOnSmallScreen: boolean,
}

export const PageLayout: React.SFC<PageLayoutProps> = (props) => {
  const { isSubmenuActiveOnSmallScreen } = props;
  return (
    <Layout>
      <PageLayoutMenuCollumn
        isSubmenuActiveOnSmallScreen={isSubmenuActiveOnSmallScreen}>
        <PageUserinfo />
        <PageMenu />
      </PageLayoutMenuCollumn>
      <PageLayoutContentCollumn>
        <PageRouter />
      </PageLayoutContentCollumn>
    </Layout>
  );
};