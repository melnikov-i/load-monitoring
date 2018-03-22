import * as React from 'react';

import {
  WidgetLayout,
  Widget,
  
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
  FullWidthWidgetContent,
  FullWidthWidgetHeaderWrapper,
  WidgetHeader
} from '@src/styled';

import {
  DevicesTableInterface,
  DroppedMenuButtonClickedType,
  MainHeaderInterface
} from '@src/interfaces';

import { Spinner } from '@src/components';
import { DroppedMenu } from '@src/libs';
import DevicesLoadConnected from 
  '@src/usage/DevicesLoadUsage';
import DevicesStatusConnected from 
  '@src/usage/DevicesStatusUsage';
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';

interface DevicesProps {
  DevicesItemsWasRequestedFromAPI: boolean,
  makeDevicesItemsRequestFromAPI: () => any,
  DevicesTableItemsCollection: DevicesTableInterface[],
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,
  isFirefoxInUse: boolean,
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesItemsWasRequestedFromAPI,
    makeDevicesItemsRequestFromAPI,
    DevicesTableItemsCollection,
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

  return (
    <div>
      <MainHeaderConnected data={MainHeaderState} />
      <WidgetLayout>
        <Widget>
          <FullWidthWidgetHeaderWrapper>
            <WidgetHeader>{'Все устройства'}</WidgetHeader>          
          </FullWidthWidgetHeaderWrapper>
          <FullWidthWidgetContent>          
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
                          <DevicesTableBodyLink to={e.to}>
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
                          <DevicesTableBodyLink to={e.to}>
                            <DevicesTableBodyIPSpan>
                              {e.ip}
                            </DevicesTableBodyIPSpan>
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyInfoLink to={e.to}>
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
                          <DevicesTableBodyLink to={e.to}>
                            <DevicesLoadConnected id={e.to} />
                          </DevicesTableBodyLink>
                        </DevicesTableBodyColl>
                        <DevicesTableBodyColl 
                          isFirefoxInUse={isFirefoxInUse}
                        >
                          <DevicesTableBodyLink to={e.to}>
                            <DevicesStatusConnected id={e.to} />
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
          </FullWidthWidgetContent>
        </Widget>
      </WidgetLayout>
    </div>
  );
};