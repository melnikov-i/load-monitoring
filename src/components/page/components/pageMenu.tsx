/**
 * PageMenu -- компонент, содержащий основное меню страницы
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import { PageMenuContainer } from './';

import { PageMenuSimpleItemConnected as PageMenuSimpleItem } from '../connected';
import { PageMenuMultiItemConnected as PageMenuMultiItem } from '../connected';

interface PageMenuProps extends RouteComponentProps<void> {
  mainMenuCollection: IMenuItem[]
}

export const PageMenu: React.SFC<PageMenuProps> = (props) => {
  const { mainMenuCollection } = props;
  
  return (
    <PageMenuContainer>
      {mainMenuCollection.map((e, i) => {
        const arr = e.submenu ? e.submenu : [];
        if (arr.length > 0) {
          return (
            <PageMenuMultiItem params={{ item: e, index: i }} key={'multi' + i} />
          );
        } else {
          return (
            <PageMenuSimpleItem params={{ item: e, index: i }} key={'simple' + i} />
          );
        }
      })}
    </PageMenuContainer>
  );
};
