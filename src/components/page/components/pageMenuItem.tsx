/**
 * PageMenuItem -- компонент, содержит элемент меню. 
 * Элемент может быть простым и содержать подменю. 
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import {
  PageMenuItemContainer,
  PageMenuItemLink
} from './';

interface PageMenuItemProps extends RouteComponentProps<void> {
  isActive: boolean,
  style: any,
  params: { item: IMenuItem, index: number },
  isMenuItemActiveOnSmallScreen: string,
  switchPageMenuItemActive: (payload: string) => any,
}

export const PageMenuItem: React.SFC<PageMenuItemProps> = (props) => {
  const {
    isActive,
    style,
    switchPageMenuItemActive,
    params: { item, index },
    isMenuItemActiveOnSmallScreen
  } = props;

  console.log('[PageMenuItem].item value:', item.value);

  /**
   * Отправляет в Store идентификатор активного простого элемента
   * основного меню.
   * @param {React.MouseEvent<T>} e
   * @return {void}
   */
  type MouseEventGenericType =
    | HTMLLIElement
    | HTMLUListElement
    | HTMLAnchorElement;

  const pageMenuItemActiveHandler =
    (e: React.MouseEvent<MouseEventGenericType>): void => {
      const current: string =
        String(e.currentTarget.getAttribute('data-item-id'));
      switchPageMenuItemActive(current);
    };

  return (
    <PageMenuItemContainer isActive={isActive}>
      <PageMenuItemLink
        onClick={pageMenuItemActiveHandler}
        data-item-id={'3' + index}
        icon={item.icon}
        active={isMenuItemActiveOnSmallScreen}
        to={'/' + item.to}
        title={item.value}
        style={style}
      >{item.value}</PageMenuItemLink>
    </PageMenuItemContainer>
  );
};
