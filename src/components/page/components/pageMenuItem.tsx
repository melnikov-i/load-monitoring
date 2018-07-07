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
  params: { item: IMenuItem, index: number },
  isMenuItemActiveOnSmallScreen: string,
  switchPageMenuItemActive: (payload: string) => any,
}

export const PageMenuItem: React.SFC<PageMenuItemProps> = (props) => {
  const {
    isActive,
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

  const oddEvent = (match: any/* , location: any */) => {
    if (!match) {
      return false
    }
    console.log('[PageMenuItem].oddEvent match:', match);
    const eventID = parseInt(match.params.eventID);
    if (isActive === null) {
      switchPageMenuItemActive('3' + index);
    }
    return !isNaN(eventID) && eventID % 2 === 1;
  }

  return (
    <PageMenuItemContainer isActive={isActive}>
      <PageMenuItemLink
        onClick={pageMenuItemActiveHandler}
        data-item-id={'3' + index}
        icon={item.icon}
        active={isMenuItemActiveOnSmallScreen}
        to={'/' + item.to}
        title={item.value}
        isActive={oddEvent}
      >{item.value}</PageMenuItemLink>
    </PageMenuItemContainer>
  );
};
