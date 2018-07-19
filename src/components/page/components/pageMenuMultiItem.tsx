/**
 * PageMenuMultiItem -- Компонент, содержащий элемент меню с вложенным
 * подменю. Может быть активным и неактивным, а также может раскрываться
 * на малых экранах при активации.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IMenuItem } from '@src/core/interfaces';

import {
  PageMenuMultiItemContainer,
  PageMenuItemAnchor,
  PageSubMenuLayout,
} from '@src/components/page/components';

import { PageSubmenuItemConnected as PageSubmenuItem } from '@src/components/page/connected';

interface PageMenuMultiItemProps extends RouteComponentProps<void> {
  isMultiMenuItemActiveOnBigScreen: boolean,
  isMultiMenuItemActiveOnSmallScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
  isSubmenuActiveOnBigScreen: boolean,
  params: { item: IMenuItem, index: number },
  openSubmenu: (payload: string) => any,
  closeSubmenu: (payload?: string) => any,
}

export const PageMenuMultiItem: React.SFC<PageMenuMultiItemProps> = (props) => {
  const {
    isMultiMenuItemActiveOnBigScreen,
    isMultiMenuItemActiveOnSmallScreen,
    isSubmenuActiveOnSmallScreen,
    isSubmenuActiveOnBigScreen,
    params: { item, index },
    openSubmenu,
    closeSubmenu,
  } = props;

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
      
      if (isSubmenuActiveOnSmallScreen) {
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
    <PageMenuMultiItemContainer
      isActiveOnBigScreen={isMultiMenuItemActiveOnBigScreen}
      isActiveOnSmallScreen={isMultiMenuItemActiveOnSmallScreen}
      isSubmenuActiveOnBigScreen={isSubmenuActiveOnBigScreen}
      isSubmenuActiveOnSmallScreen={isSubmenuActiveOnSmallScreen}
    >
      <PageMenuItemAnchor
        onClick={PageMenuItemMultiActiveHandler}
        data-item-id={'3' + index}
        icon={item.icon}
        title={item.value}
        isSubmenuActiveOnBigScreen={isSubmenuActiveOnBigScreen}
        isSubmenuActiveOnSmallScreen={isSubmenuActiveOnSmallScreen}
      >{item.value}</PageMenuItemAnchor>
      <PageSubMenuLayout
        isSubmenuActiveOnSmallScreen={isSubmenuActiveOnSmallScreen}
        isSubmenuActiveOnBigScreen={isSubmenuActiveOnBigScreen}
        subMenuHeight={submenuHeight}
      >
        {submenu.map((e, i) => (
          <PageSubmenuItem
            params={{item: e, index: i, parent: '3' + index}} key={'submenuItem' + i} />
        ))}
      </PageSubMenuLayout>
    </PageMenuMultiItemContainer>
  );
};
