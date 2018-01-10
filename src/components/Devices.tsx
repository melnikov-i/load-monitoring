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
  DevicesTableHeadCollLoad,
  DevicesTableHeadLastColl,
  DevicesTableHeadCollInfo,
  DevicesTableBodyColl,
  DevicesTableBodyInfo,
  DevicesTableBodyInfoSpan,
  DevicesTableBodyCompNameSpan,
  DevicesTableBodyLink,
  DevicesTableBodyWrapperLast,
  DevicesTableBodyInfoLink,
  DevicesTableHeadCollStatus,
  DevicesTableActionButton,
  DevicesTableActionMenuLayout,
  DevicesTableActionMenuItem,
  DevicesTableActonLink,
} from '@src/styled';

import {
  DevicesTableInterface,
  DevicesButtonClickedIdType,
} from '@src/interfaces';

import { Spinner } from '@src/components';

interface DevicesProps {
  DevicesTableItemsCollection: DevicesTableInterface[],
  DevicesItemsWasRequestedFromAPI: boolean,
  DevicesActionButtonClickedId: DevicesButtonClickedIdType,
  makeDevicesItemsRequestFromAPI: () => any,
  changeDevicesActionButtonClickedId: 
  (payload: DevicesButtonClickedIdType) => any
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesTableItemsCollection,
    DevicesItemsWasRequestedFromAPI,
    DevicesActionButtonClickedId,
    makeDevicesItemsRequestFromAPI,
    changeDevicesActionButtonClickedId,
  } = props;

  // Запрос данных таблицы
  const getDevicesItems = (): DevicesTableInterface[] => {
    if ( !DevicesItemsWasRequestedFromAPI ) {
      makeDevicesItemsRequestFromAPI();
    }
    return DevicesTableItemsCollection;
  };
  const devicesItems = getDevicesItems();

  // Обработчики событий
  const droppedMenuHandlerRemove = () => {
    document.removeEventListener('click', droppedMenuHandlerRemove);    
    changeDevicesActionButtonClickedId('');
  };

  const devicesDroppedMenuHandler = 
  (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const current: string =
      String(e.currentTarget.getAttribute('data-button-id'));
    if ( DevicesActionButtonClickedId === '' ) {
      document.addEventListener('click', droppedMenuHandlerRemove);
      changeDevicesActionButtonClickedId(current);
    } else {
      if ( current === DevicesActionButtonClickedId ) {
        changeDevicesActionButtonClickedId('');
      } else {
        e.nativeEvent.stopImmediatePropagation();
        changeDevicesActionButtonClickedId(current);
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

  if ( devicesItems.length !== 0 ) {
    return (
      <DevicesLayout>
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
              <DevicesTableBodyColl>
                <DevicesTableBodyLink to={e.to}>
                  <DevicesTableBodyCompNameSpan
                  icon={e.icon}
                  title={e.comp_name}>
                    {e.comp_name}                  
                  </DevicesTableBodyCompNameSpan>
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                <DevicesTableBodyLink to={e.to}>
                  {e.ip}
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
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
              <DevicesTableBodyColl>
                <DevicesTableBodyLink to={e.to}>
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                <DevicesTableBodyLink to={e.to}>
                </DevicesTableBodyLink>
              </DevicesTableBodyColl>
              <DevicesTableBodyColl>
                <DevicesTableBodyWrapperLast>
                  <DevicesTableActionButton
                  onClick={devicesDroppedMenuHandler}
                  data-button-id={'1' + i}
                  isClicked={DevicesActionButtonClickedId === String('1' + i)}>
                    {'Действие'}
                    <DevicesTableActionMenuLayout
                    isClicked={DevicesActionButtonClickedId === String('1' + i)}
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
                  </DevicesTableActionButton>                  
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