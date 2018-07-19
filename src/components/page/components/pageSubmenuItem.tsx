import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem, ISelectSubmenu } from '@src/core/interfaces';

import {
  PageSubMenuItem,
  PageSubMenuItemLink
} from './';

interface PageSubmenuItemProps extends RouteComponentProps<void> {
  isActive: boolean,
  params: { item: IMenuItem, index: number, parent: string },
  closeSubmenu: (payload?: string) => any,
  selectSubmenu: (payload: ISelectSubmenu) => any,
}

export const PageSubmenuItem: React.SFC<PageSubmenuItemProps> = (props) => {
  const {
    isActive,
    params : {item, index, parent},
    closeSubmenu,
    selectSubmenu,
  } = props;
  
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
        closeSubmenu(current);
    };

  const oddEvent: any = (match: any) => {
    if (match) {
      if (isActive === null) {
        selectSubmenu({ parent: parent, child: '4' + index });
      }
    }
    return false;
  };

  return (
    <PageSubMenuItem style={{
      color: isActive ? '#fff' : '#a7b1c2'
    }}>
      <PageSubMenuItemLink
        onClick={pageMenuItemActiveHandler}
        data-item-id={'4' + index}
        icon={item.icon}
        to={'/' + item.to}
        title={item.value}
        isActive={oddEvent}
      >{item.value}</PageSubMenuItemLink>
    </PageSubMenuItem>    
  );
};