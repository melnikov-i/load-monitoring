import * as React from 'react';

import {
  DevicesLayout,
  DevicesHeader,
  DevicesTable,
  DevicesTableHead,
  DevicesTableBody,
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
  DevicesTableActonLink,
} from '@src/styled';

import {
  DevicesTableInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import { Spinner } from '@src/components';
import DevicesLoadConnected from 
'@src/connected/DevicesLoadConnected.usage';
import DevicesStatusConnected from 
'@src/connected/DevicesStatusConnected.usage';

interface DevicesProps {
  DevicesTableItemsCollection: DevicesTableInterface[],
  DevicesItemsWasRequestedFromAPI: boolean,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  isFirefoxInUse: boolean,
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,
  makeDevicesItemsRequestFromAPI: () => any,
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesItemsWasRequestedFromAPI,
    makeDevicesItemsRequestFromAPI,
    DevicesTableItemsCollection,
  } = props;

  // Запрос данных таблицы
  const getDevicesItems = () => {
    if ( !DevicesItemsWasRequestedFromAPI ) {
      makeDevicesItemsRequestFromAPI();
    }
    return DevicesTableItemsCollection;
  };
  const devicesItems = getDevicesItems();

  if ( devicesItems.length !== 0 ) {
    const {
      DroppedMenuButtonClickedId,
      isFirefoxInUse,
      changeDroppedMenuClickedId,
    } = props;

    // Обработчики событий
    const droppedMenuHandlerRemove = () => {
      document.removeEventListener('click', droppedMenuHandlerRemove);
      changeDroppedMenuClickedId('');
    };

    const devicesDroppedMenuHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const current: string =
        String(e.currentTarget.getAttribute('data-button-id'));
      if ( DroppedMenuButtonClickedId === '' ) {
        document.addEventListener('click', droppedMenuHandlerRemove);
        changeDroppedMenuClickedId(current);
      } else {
        if ( current === DroppedMenuButtonClickedId ) {
          changeDroppedMenuClickedId('');
        } else {
          e.nativeEvent.stopImmediatePropagation();
          changeDroppedMenuClickedId(current);
        }
      }
    };

    type actionMenuType = {
      value: string,
      to: string
    }

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

    return (
      <DevicesLayout onTransitionEnd={()=>{console.log('loading complete')}}>
        <DevicesHeader>{'Все устройства'}</DevicesHeader>
        <DevicesTable>
          <DevicesTableHead>
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
          </DevicesTableHead>
          <DevicesTableBody>
      {
        devicesItems.map((e, i) => {
          return (
            <DevicesTableBodyRow 
              key={i}
            >
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
                <DevicesTableBodyLink to={e.to}>
                  <DevicesTableBodyCompNameSpan
                  icon={e.icon}
                  title={e.comp_name}>
                    {e.comp_name}
                  </DevicesTableBodyCompNameSpan>
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
                <DevicesTableBodyLink to={e.to}>
                  <DevicesTableBodyIPSpan>
                    {e.ip}
                  </DevicesTableBodyIPSpan>
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
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
                    {Math.floor((Number(e.memory) / 1024) / 1024) + ' Мб'}
                  </DevicesTableBodyInfo>
                </DevicesTableBodyInfoLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
                <DevicesTableBodyLink to={e.to}>
                  <DevicesLoadConnected id={e.to} />
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
                <DevicesTableBodyLink to={e.to}>
                  <DevicesStatusConnected id={e.to} />
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl isFirefoxInUse={isFirefoxInUse}>
                <DevicesTableBodyWrapperLast>
                  <DevicesTableActionAnchor
                  onClick={devicesDroppedMenuHandler}
                  data-button-id={'1' + i}
                  isClicked={DroppedMenuButtonClickedId === String('1' + i)}>
                    {'Действие'}
                  </DevicesTableActionAnchor>
                  
                  <DevicesTableActionMenuLayout
                  isClicked={DroppedMenuButtonClickedId === String('1' + i)}
                  >
              {
                actionMenu.map((item, i) => {
                  return (
                    <DevicesTableActionMenuItem key={i}>
                      <DevicesTableActonLink
                      to={(item.value === 'Обзор') ? e.to : item.to}>
                        {item.value}
                      </DevicesTableActonLink>
                    </DevicesTableActionMenuItem>
                  );
                })
              }
                  </DevicesTableActionMenuLayout>
                </DevicesTableBodyWrapperLast>
              </DevicesTableBodyColl>
            </DevicesTableBodyRow>
          );
        })
      }
          </DevicesTableBody>
        </DevicesTable>
      </DevicesLayout>
    );
  } else {
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );    
  }

};