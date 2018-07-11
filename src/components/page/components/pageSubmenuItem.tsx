import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem, ISelecSubmenu } from '@src/core/interfaces';

import {
  PageSubMenuItem,
  PageSubMenuItemLink
} from './';

interface PageSubmenuItemProps extends RouteComponentProps<void> {
  isSubmenuActive: boolean,
  isMenuItemActiveOnSmallScreen: string,
  params: { item: IMenuItem, index: number, parent: string },
  selectSubmenu: (payload: ISelecSubmenu) => any,
}

export const PageSubmenuItem: React.SFC<PageSubmenuItemProps> = (props) => {
  const {
    isSubmenuActive,
    // isMenuItemActiveOnSmallScreen,
    params : {item, index, parent},
    selectSubmenu,
  } = props;

  console.log('[PageSubmenuItem]');

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
        console.log('pageSubmenuItem', current);
        selectSubmenu({parent: parent, child: current});
    };

  const oddEvent: any = (match: any) => {
    if (match) {
      if (isSubmenuActive === null) {
        // selectSubmenu({ parent: parent, child: '4' + index });
      }
    }
    return false;
  };

  return (
    <PageSubMenuItem isActive={isSubmenuActive}>
      <PageSubMenuItemLink
        onClick={pageMenuItemActiveHandler}
        data-item-id={'4' + index}
        icon={item.icon}
        to={'/' + item.to}
        title={item.value}
        // active={isMenuItemActiveOnSmallScreen}
        isActive={oddEvent}
      >{item.value}</PageSubMenuItemLink>
    </PageSubMenuItem>    
  );
};