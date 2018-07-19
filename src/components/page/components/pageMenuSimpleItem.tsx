/**
 * PageMenuSimpleItem -- компонент, содержит элемент простого меню
 * без подменю.
 * Может быть активным или не активным, а также обладает возможностью
 * динамически раскрываться на малых экранах при активации элемента
 * основного меню, в состав которого входит подменю.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import {
  PageMenuItemContainer,
  PageMenuItemLink,
} from '@src/components/page/components';

interface PageMenuSimpleItemProps extends RouteComponentProps<void> {
  isSimpleMenuItemActive: boolean,
  params: { item: IMenuItem, index: number },
  isSubmenuActiveOnBigScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
  selectSimpleItemMainMenu: (payload: string) => any,  
}

export const PageMenuSimpleItem: React.SFC<PageMenuSimpleItemProps> = (props) => {
  const {
    isSimpleMenuItemActive,
    selectSimpleItemMainMenu,
    params: { item, index },
    // isSubmenuActiveOnBigScreen,
    isSubmenuActiveOnSmallScreen,
  } = props;

  /**
   * Проверяет через react-router, не является ли этот пункт меню
   * активным. Если да, отправляет в Store идентификатор этого элемента основного
   * меню. Но выполняется эта функция только при загрузке страницы.
   * В остальные случаи за отправку идентификатора элемента меню в Store отвечает 
   * обработчик события onClick по линку элемента меню.
   * @param match 
   */
  const oddEvent: any = (match: any) => {
    if (match) {
      if (isSimpleMenuItemActive === null) {
        selectSimpleItemMainMenu('3' + index);
      }      
    }
    return false;
  };

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
      selectSimpleItemMainMenu(current);
    };

  return (
    <PageMenuItemContainer
      isActiveOnBigScreen={isSimpleMenuItemActive}
      isActiveOnSmallScreen={isSimpleMenuItemActive}
    >
      <PageMenuItemLink
        onClick={pageMenuItemActiveHandler}
        data-item-id={'3' + index}
        icon={item.icon}
        submenu={isSubmenuActiveOnSmallScreen ? '1' : ''}
        to={'/' + item.to}
        title={item.value}
        isActive={oddEvent}
      >{item.value}</PageMenuItemLink>
    </PageMenuItemContainer>
  );
};
