/**
 * PageMenu -- компонент, содержащий основное меню страницы
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import {
  PageMenuContainer,
} from './';

import { PageMenuItemConnected as PageMenuItem } from '../connected';

interface PageMenuProps extends RouteComponentProps<void> {
  mainMenuCollection: IMenuItem[]
}

export const PageMenu: React.SFC<PageMenuProps> = (props) => {
  const { mainMenuCollection } = props;

  console.log('[PageMenu].mainMenuCollection:', mainMenuCollection);

  return (
    <PageMenuContainer>
      {mainMenuCollection.map((e, i) => (
        <PageMenuItem params={{ item: e, index: i }} key={i} />
      ))}
    </PageMenuContainer>
  );
};
