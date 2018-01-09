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
  // DevicesTableBodyLinkLast,
  DevicesTableBodyInfoLink,
  DevicesTableHeadCollStatus,
  DevicesTableActionButton,
  DevicesTableActionMenuLayout,
  DevicesTableActionMenuItem,
  DevicesTableActonLink,
  // DevicesTableActionLinkSpan,
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

  const actionButtonHandler = 
  (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // console.log(
    //   '[button-id]',
    //   e.currentTarget.getAttribute('data-button-id')
    // );

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

  const actionButtonBlurHandler = 
  (e: React.FocusEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('------------------');
    // console.log('NATIVE', e.nativeEvent);
    // console.log('CURRENT', e.currentTarget.classList);
    // console.log('TARGET', e.target);
    // console.log('RELATED', e.relatedTarget);
    if ( e.relatedTarget === null ) {
      changeDevicesActionButtonClickedId('');      
    } else {
      
    }
    console.log('------------------');
  };

  // const actionMenuCloseHandler =
  // (e: React.MouseEvent<HTMLElement>, key: string) => {
  //   e.preventDefault();
  //   console.log('KEY', key);
  // };

  /*
    при переключении между кнопками срабатывает ложный onBlur
  */

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
    // console.log('[DEVICES_ITEMS]:', devicesItems);
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
                <DevicesTableActionButton
                onClick={actionButtonHandler}
                onBlur={actionButtonBlurHandler}
                data-button-id={i}
                isClicked={DevicesActionButtonClickedId === String(i)}>
                  {'Действие'}
                  <DevicesTableActionMenuLayout
                  isClicked={DevicesActionButtonClickedId === String(i)}
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

// onClick={() => null}
                // <DevicesTableBodyLinkLast to={e.to}>
                // </DevicesTableBodyLinkLast>
                        // <DevicesTableActionLinkSpan>
                        // </DevicesTableActionLinkSpan>