import * as React from 'react';

import {

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
    
    return (
      <div></div>
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