import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import {
  PageMenuMultiItemContainer,
  PageMenuItemAnchor,
  PageSubMenuLayout,
} from './';

import { PageSubmenuItemConnected as PageSubmenuItem } from '../connected';

interface PageMenuMultiItemProps extends RouteComponentProps<void> {
  isMultiActive: boolean,
  isMenuItemActiveOnSmallScreen: string,
  params: { item: IMenuItem, index: number },
  openSubmenu: (payload: string) => any,
  closeSubmenu: () => any,
}

export const PageMenuMultiItem: React.SFC<PageMenuMultiItemProps> = (props) => {
  const {
    isMultiActive,
    isMenuItemActiveOnSmallScreen,
    params: { item, index },
    openSubmenu,
    closeSubmenu,
  } = props;

  console.log('[PageMenuMultiItem].item value:', item.value);

  /**
   * Отправляет в Store идентификатор активного составного элемента
   * основного меню.
   * @param {React.MouseEvent<T>} e
   * @return {void}
   */
  type MouseEventGenericType =
    | HTMLLIElement
    | HTMLUListElement
    | HTMLAnchorElement;

  const PageMenuItemMultiActiveHandler =
    (e: React.MouseEvent<MouseEventGenericType>): void => {
      if (isMultiActive) {
        closeSubmenu();
      } else {
        const current: string =
          String(e.currentTarget.getAttribute('data-item-id'));
        openSubmenu(current);
      }
    };

  /** Вычисление высоты подменю для плавного выпадания */
  const submenu = item.submenu ? item.submenu : [];
  const submenuHeight: string = String(submenu.length * 32+ 10);

  return (
    <PageMenuMultiItemContainer isActive={isMultiActive}>
      <PageMenuItemAnchor
        onClick={PageMenuItemMultiActiveHandler}
        data-item-id={'3' + index}
        icon={item.icon}
        isActive={isMultiActive}
        active={isMenuItemActiveOnSmallScreen}
        title={item.value}
      >{item.value}</PageMenuItemAnchor>
      <PageSubMenuLayout
        isActive={isMultiActive}
        subMenuHeight={submenuHeight}
      >
        {submenu.map((e, i) => (
          <PageSubmenuItem params={{item: e, index: i, parent: '3' + index}} key={i} />
        ))}
      </PageSubMenuLayout>
    </PageMenuMultiItemContainer>
  );
};
