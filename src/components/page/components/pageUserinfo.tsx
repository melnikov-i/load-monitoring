/**
 * PageUserinfo -- компонент, показывающий блок пользовательского меню
 * в верхней части колонки с меню
 */
import * as React from 'react';
import { DroppedMenu } from '@src/core/libs';

import { RouteComponentProps } from 'react-router-dom';

import {
  PageUserinfoWrapper,
  PageUserinfoLogo,
  PageUserinfoMenuAnchor,
  PageUserinfoMenuLayout,
  PageUserinfoMenuItem,
  PageUserinfoMenuLink,
} from './';
import { IUser } from '@src/core/interfaces';

interface PageUserinfoProps extends RouteComponentProps<void> {
  droppedMenuItemId: string,
  userinfo: IUser,
  changeDroppedMenuItemID: (payload: string) => any,
  sendLogoutToApi: () => any,
}

export const PageUserinfo: React.SFC<PageUserinfoProps> = (props) => {
  const {
    droppedMenuItemId,
    changeDroppedMenuItemID,
    userinfo,
    sendLogoutToApi,
  } = props;

  /** Обработчики событий */
  const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sendLogoutToApi();
  };

  return (
    <PageUserinfoWrapper>
      <PageUserinfoLogo>
        <PageUserinfoMenuAnchor
          /* Кнопка вызова меню пользователя */
          onClick={(e) => DroppedMenu(e, droppedMenuItemId, changeDroppedMenuItemID)}
          data-button-id={'00'}
          isClicked={droppedMenuItemId === '00'}
        >
          {userinfo.login}
        </PageUserinfoMenuAnchor>
        <PageUserinfoMenuLayout
          /* Меню пользователя */
          isClicked={droppedMenuItemId === '00'}
        >
          {userinfo.links.map((e, i) => (
            <PageUserinfoMenuItem key={i}>
              <PageUserinfoMenuLink
                to={'/' + e.to}
                title={e.value}
                onClick={(e.to === 'exit')
                  ? logoutHandler : undefined
                }
              >
                {e.value}
              </PageUserinfoMenuLink>
            </PageUserinfoMenuItem>
          ))}
        </PageUserinfoMenuLayout>
      </PageUserinfoLogo>
    </PageUserinfoWrapper>
  );
}