import * as React from 'react';

import {
  OverviewLayout,
  OverviewHeader,
  OverviewIconsLayout,
  OverviewIconWrapper,
  OverviewIcon,
  OverviewIconNumber,
  OverviewIconText
} from '@src/styled';

import {
  OverviewInterface,
} from '@src/interfaces';

import { Spinner } from '@src/components';

interface OverviewProps {
  OverviewItemsWasRequestedFromAPI: boolean,
  makeOverviewItemsRequestFromAPI: () => any,
  OverviewItemsCollection: OverviewInterface,
}

export const Overview: React.SFC<OverviewProps> = (props) => {
  const {
    OverviewItemsWasRequestedFromAPI,
    makeOverviewItemsRequestFromAPI,
    OverviewItemsCollection,
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

      // if ( Number(count) % 100 !== 0 ) {
        if ( Number(count) % 100 > 4 && Number(count) % 100 < 20 ) {
          return 'Устройств';
        } else {
          if ( Number(count) % 10 < 4 ) {
            switch ( Number(count) % 10 ) {
              case 0: return 'Устройств';
              case 1: return 'Устройство';
              default: return 'Устройства';
            }
          } else {
            return 'Устройства';
          }
        }

      // } else {
      //   return 'Устройств';
      // }
    }

    for (let i = 0; i < 40; i++) {
      console.log(i, textSuffix(String(i)));
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