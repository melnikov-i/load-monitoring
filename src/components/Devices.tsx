import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  WidgetsLayout,
  Widget,
  WidgetHeaderWrapper,
  WidgetHeader,
  WidgetContent,  
  DevicesTable,
  DevicesTableHeadRow,
  DevicesTableBodyRow,
  DevicesTableHeadCollDev,
  DevicesTableHeadCollIP,
  DevicesTableHeadCollInfo,
  DevicesTableHeadCollLoad,
  DevicesTableHeadCollStatus,
  DevicesTableHeadLastColl,
  DevicesTableBodyColl,
  DevicesTableBodyLink,
  DevicesTableBodyCompNameSpan,
  DevicesTableBodyIPSpan,
  DevicesTableBodyInfoLink,
  DevicesTableBodyInfo,
  DevicesTableBodyInfoSpan,
  DevicesTableBodyWrapperLast,
  DevicesTableActionAnchor,
  DevicesTableActionMenuLayout,
  DevicesTableActionMenuItem,
  DevicesTableActionLink,

} from '@src/styled';

import {
  DevicesTableInterface,
  DroppedMenuButtonClickedType,
  MainHeaderInterface
} from '@src/interfaces';

import { Spinner } from '@src/components';
import { DroppedMenu } from '@src/libs';
// import DevicesLoadConnected from 
//   '@src/usage/DevicesLoadUsage';
// import DevicesStatusConnected from 
//   '@src/usage/DevicesStatusUsage';
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';

interface DevicesProps extends RouteComponentProps<void> {
  DevicesItemsWasRequestedFromAPI: boolean,
  makeDevicesItemsRequestFromAPI: () => any,
  DevicesTableItemsCollection: DevicesTableInterface[],
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,
  isFirefoxInUse: boolean,
  /* Метод в actions, изменяющий идентифкатор PageMenuItemActive */
  switchPageMenuItemActive: ( payload: string ) => any,
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesItemsWasRequestedFromAPI,
    makeDevicesItemsRequestFromAPI,
    DevicesTableItemsCollection,
    switchPageMenuItemActive
  } = props;

  if ( DevicesTableItemsCollection.length === 0 ) {
    if ( !DevicesItemsWasRequestedFromAPI ) {
      makeDevicesItemsRequestFromAPI();

    } 
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#f3f3f4'}
      />
    );
  }

  const {
    DroppedMenuButtonClickedId,
    changeDroppedMenuClickedId,
    isFirefoxInUse,
  } = props;

  type actionMenuType = {
    value: string,
    to: string
  }

  // Данные для выпадающего меню
  const actionMenu: actionMenuType[] = [
    {
      value: 'Обзор',
      to: '',
    },
    {
      value: 'Настроить уведомления',
      to: 'aaa'
    },
    {
      value: 'Удалить',
      to: 'bbb',
    }
  ];

  // Данные для заголовка
  const MainHeaderState: MainHeaderInterface = {
    header: 'Все устройства',
    breadcrumbs: [
      {
        href: '',
        title: 'Главная',
      },
      {
        href: 'devices',
        title: 'Все устройства',
      }
    ],
  };

  /**
   * Очищает идентификатор PageMenuItemActive, который 
   * подсвечивает активный пункт меню.
   */

  const tableLinkHandler = 
  ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    e.preventDefault();
    switchPageMenuItemActive('');
  }

  return (
    <div>
      <MainHeaderConnected data={MainHeaderState} />
      <WidgetsLayout>
        <Widget>
          <WidgetHeaderWrapper>
            <WidgetHeader>{'Все устройства'}</WidgetHeader>          
          </WidgetHeaderWrapper>
          <WidgetContent>
            <DevicesTable>
              <thead>
                <DevicesTableHeadRow>
                  <DevicesTableHeadCollDev>
                    {'Устройство'}
                  </DevicesTableHeadCollDev>
                  <DevicesTableHeadCollIP>
                    {'IP-адрес'}
                  </DevicesTableHeadCollIP>
                  <DevicesTableHeadCollInfo>
                    {'Информация о системе'}
                  </DevicesTableHeadCollInfo>
                  <DevicesTableHeadCollLoad>
                    {'Нагрузка'}
                  </DevicesTableHeadCollLoad>
                  <DevicesTableHeadCollStatus>
                    {'Статус'}
                  </DevicesTableHeadCollStatus>
                  <DevicesTableHeadLastColl></DevicesTableHeadLastColl>
                </DevicesTableHeadRow>
              </thead>
              <tbody>
                {
                  DevicesTableItemsCollection.map((e, i) => {
                    return (
                      <DevicesTableBodyRow 
                        key={i}
                      >
                        <DevicesTableBodyColl
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyLink
                            to={e.to}
                            onClick={tableLinkHandler}
                          >
                            <DevicesTableBodyCompNameSpan
                              icon={e.icon}
                              title={e.comp_name}
                            >
                              {e.comp_name}
                            </DevicesTableBodyCompNameSpan>
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyLink
                            to={e.to}
                            onClick={tableLinkHandler}
                          >
                            <DevicesTableBodyIPSpan>
                              {e.ip}
                            </DevicesTableBodyIPSpan>
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyInfoLink
                            to={e.to}
                            onClick={tableLinkHandler}
                          >
                            <DevicesTableBodyInfo>
                              {e.system}
                            </DevicesTableBodyInfo>
                            <DevicesTableBodyInfo>
                              <DevicesTableBodyInfoSpan>
                                {'CPU: '}
                              </DevicesTableBodyInfoSpan>
                              {e.cpu_name}
                            </DevicesTableBodyInfo>
                            <DevicesTableBodyInfo>
                              <DevicesTableBodyInfoSpan>
                                {'RAM: '}
                              </DevicesTableBodyInfoSpan>
                              {Math.floor(
                                  (Number(e.memory) / 1024) / 1024
                                ) + ' Мб'
                              }
                            </DevicesTableBodyInfo>
                          </DevicesTableBodyInfoLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyLink
                            to={e.to}
                            onClick={tableLinkHandler}
                          >
                            {/* <DevicesLoadConnected id={e.to} /> */}
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyLink
                            to={e.to}
                            onClick={tableLinkHandler}
                          >
                            {/* <DevicesStatusConnected id={e.to} /> */}
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyWrapperLast>
                            <DevicesTableActionAnchor
                              onClick={(e) =>
                                DroppedMenu(
                                  e, 
                                  DroppedMenuButtonClickedId, 
                                  changeDroppedMenuClickedId
                                )
                              }
                              data-button-id={'1' + i}
                              isClicked={
                                DroppedMenuButtonClickedId === String('1' + i)
                              }
                            >
                              {'Действие'}
                            </DevicesTableActionAnchor>
                            <DevicesTableActionMenuLayout
                              isClicked={
                                DroppedMenuButtonClickedId === String('1' + i)
                              }
                            >
                              {
                                actionMenu.map((item, i) => (
                                    <DevicesTableActionMenuItem key={i}>
                                      <DevicesTableActionLink
                                        to={
                                          (item.value === 'Обзор') 
                                          ? e.to : item.to
                                        }
                                      >
                                        {item.value}
                                      </DevicesTableActionLink>
                                    </DevicesTableActionMenuItem>
                                  )
                                )
                              }
                            </DevicesTableActionMenuLayout>
                          </DevicesTableBodyWrapperLast>
                        </DevicesTableBodyColl>
                      </DevicesTableBodyRow>
                    );
                  })
                }
              </tbody>
            </DevicesTable>
          </WidgetContent>
        </Widget>
      </WidgetsLayout>
    </div>
  );
};