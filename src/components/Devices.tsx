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
  DevicesTableBodyLinkLast,
  DevicesTableBodyInfoLink,
  DevicesTableHeadCollStatus,
  DevicesTableActionButton
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
  devicesActionButtonReset: () => any,
}

export const Devices: React.SFC<DevicesProps> = (props) => {
  const {
    DevicesTableItemsCollection,
    DevicesItemsWasRequestedFromAPI,
    DevicesActionButtonClickedId,
    makeDevicesItemsRequestFromAPI,
    changeDevicesActionButtonClickedId,
    devicesActionButtonReset,
  } = props;

  const getDevicesItems = (): DevicesTableInterface[] => {
    if ( !DevicesItemsWasRequestedFromAPI ) {
      makeDevicesItemsRequestFromAPI();
    }
    return DevicesTableItemsCollection;
  };
  const devicesItems = getDevicesItems();

  const ActionButtonHandler = 
  (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      '[button-id]',
      e.currentTarget.getAttribute('data-button-id')
    );
    const current: string =
      String(e.currentTarget.getAttribute('data-button-id'));
    const fromStore: string = DevicesActionButtonClickedId;
    if ( fromStore === '' ) {
      changeDevicesActionButtonClickedId(current);
    } else {
      if ( current === fromStore ) {
        devicesActionButtonReset();
      } else {
        changeDevicesActionButtonClickedId(current);
      }
    }
  };

  if ( devicesItems.length !== 0 ) {
    console.log('[DEVICES_ITEMS]:', devicesItems);
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
                <DevicesTableBodyLinkLast to={e.to}>
                  <DevicesTableActionButton
                  onClick={ActionButtonHandler}
                  data-button-id={i}
                  isClicked={
                    (DevicesActionButtonClickedId === String(i)) 
                      ? true
                      : false
                  }>
                    {'Действие'}
                  </DevicesTableActionButton>
                </DevicesTableBodyLinkLast>
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
        width={5}
        color={'#2f4050'}
        bgColor={'#fff'}
      />
    );    
  }

};