import * as React from 'react';

import {
  OverviewLayout,
  OverviewHeader,
  OverviewIconsLayout,
  OverviewIconWrapper,
  OverviewIcon,
  OverviewIconNumber,
  OverviewIconText,
  OverviewTable,
  OverviewTableHead,
  OverviewTableHeadRow,
  OverviewTableHeadCollNumber,
  OverviewTableHeadCollDate,
  OverviewTableHeadCollCompName,
  OverviewTableHeadCollEvent,
  OverviewTableHeadCollAction,
  OverviewTableBody,
  OverviewTableBodyRow,
  OverviewTableBodyColl,
  OverviewTableBodyCollNumber,
  OverviewTableActionAnchor,
  OverviewTableActionMenuLayout,
  OverviewTableActionMenuItem,
  OverviewTableActionMenuAnchor,
} from '@src/styled';

import {
  OverviewInterface,
  DroppedMenuButtonClickedType
} from '@src/interfaces';

import { Spinner } from '@src/components';

interface OverviewProps {
  OverviewItemsWasRequestedFromAPI: boolean,
  makeOverviewItemsRequestFromAPI: () => any,
  OverviewItemsCollection: OverviewInterface,
  DroppedMenuButtonClickedId: DroppedMenuButtonClickedType,
  changeDroppedMenuClickedId: 
  (payload: DroppedMenuButtonClickedType) => any,
}

export const Overview: React.SFC<OverviewProps> = (props) => {
  const {
    OverviewItemsWasRequestedFromAPI,
    makeOverviewItemsRequestFromAPI,
    OverviewItemsCollection,
    DroppedMenuButtonClickedId,
    changeDroppedMenuClickedId,
  } = props;
  
  const getOverviewItems = ():OverviewInterface => {
    if ( !OverviewItemsWasRequestedFromAPI ) {
      makeOverviewItemsRequestFromAPI();
    }
    return OverviewItemsCollection;
  };
  const overviewItems: OverviewInterface = getOverviewItems();

  console.log('OverviewPage');
  
  if ( overviewItems.counts.normal !== '' ) {
    console.log('ITEMS:', overviewItems);

    const textSuffix = (count: 
    | OverviewInterface['counts']['normal']
    | OverviewInterface['counts']['warning']
    | OverviewInterface['counts']['offline'] ) => {

      if ( Number(count) % 100 > 4 && Number(count) % 100 < 20 ) {
        return 'Устройств';
      } else {
        switch ( Number(count) % 10 ) {
          case 1: return 'Устройство';
          case 2: return 'Устройства';
          case 3: return 'Устройства';
          case 4: return 'Устройства';
          default: return 'Устройств';
        }        
      }
    };

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

    const deleteEventFromTableHandler = () => {
      console.log('BINGO');
    }

    return (
      <OverviewLayout>
        <OverviewHeader>{'Обзор системы'}</OverviewHeader>
        <OverviewIconsLayout>
          <OverviewIconWrapper bgcolor={'#1ab394'}>
            <OverviewIcon icon={'f058'} />
            <OverviewIconNumber>
              {overviewItems.counts.normal}
            </OverviewIconNumber>
            <OverviewIconText>
              {textSuffix(overviewItems.counts.normal)}
            </OverviewIconText>
          </OverviewIconWrapper>
          <OverviewIconWrapper bgcolor={'#f8ac59'}>
            <OverviewIcon icon={'f059'} />
            <OverviewIconNumber>
              {overviewItems.counts.warning}
            </OverviewIconNumber>
            <OverviewIconText>
              {textSuffix(overviewItems.counts.warning)}
            </OverviewIconText>
          </OverviewIconWrapper>
          <OverviewIconWrapper bgcolor={'#ed5565'}>
            <OverviewIcon icon={'f071'} />
            <OverviewIconNumber>
              {overviewItems.counts.offline}
            </OverviewIconNumber>
            <OverviewIconText>
              {textSuffix(overviewItems.counts.offline)}
            </OverviewIconText>
          </OverviewIconWrapper>
        </OverviewIconsLayout>
        <OverviewTable>
          <OverviewTableHead>
            <OverviewTableHeadRow>
              <OverviewTableHeadCollNumber>
                {'№'}
              </OverviewTableHeadCollNumber>
              <OverviewTableHeadCollDate>
                {'Дата'}
              </OverviewTableHeadCollDate>
              <OverviewTableHeadCollCompName>
                {'имя ПК'}
              </OverviewTableHeadCollCompName>
              <OverviewTableHeadCollEvent>
                {'Событие'}
              </OverviewTableHeadCollEvent>
              <OverviewTableHeadCollAction>
                
              </OverviewTableHeadCollAction>
            </OverviewTableHeadRow>
          </OverviewTableHead>
          <OverviewTableBody>
        {overviewItems.events_table.map((e, i) => {
          const date = new Date(Number(e.event_data) * 1000);
          return (
            <OverviewTableBodyRow key={i}>
              <OverviewTableBodyCollNumber>
                {i}
              </OverviewTableBodyCollNumber>
              <OverviewTableBodyColl>
              {
                date.getDate()
                + ((date.getMonth() > 8 ) ? '.' : '.0')
                + (date.getMonth() + 1)
                + '.' + date.getFullYear()
                + ' ' + ((date.getHours() > 9) ? '' : '0') + date.getHours()
                + ((date.getMinutes() > 9) ? ':' : ':0') + date.getMinutes()
                + ((date.getSeconds() > 9) ? ':' : ':0') + date.getSeconds()
              }
              </OverviewTableBodyColl>
              <OverviewTableBodyColl>
                {e.comp_name}
              </OverviewTableBodyColl>
              <OverviewTableBodyColl>
                {e.text}
              </OverviewTableBodyColl>
              <OverviewTableBodyColl>
                <OverviewTableActionAnchor
                onClick={devicesDroppedMenuHandler}
                data-button-id={'2' + i}
                isClicked={DroppedMenuButtonClickedId === String('2' + i)}>
                  {'Действие'}
                </OverviewTableActionAnchor>                
                <OverviewTableActionMenuLayout
                isClicked={DroppedMenuButtonClickedId === String('2' + i)}>
                  <OverviewTableActionMenuItem key={i}>
                    <OverviewTableActionMenuAnchor
                    onClick={deleteEventFromTableHandler}>
                      {'Убрать уведомление'}
                    </OverviewTableActionMenuAnchor>
                  </OverviewTableActionMenuItem>
                </OverviewTableActionMenuLayout>
              </OverviewTableBodyColl>
            </OverviewTableBodyRow>
          );
        })}
          </OverviewTableBody>
        </OverviewTable>
      </OverviewLayout>
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