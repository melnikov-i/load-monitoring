import * as React from 'react';

import {
  CommonModel,
  makeRequestToAPIProps,
  DataFromAPIModel,
} from '@src/models';
import {
  Header,
  PieChartWrapper,
  PieChartOuterBoundary,
  PieChartInternalBoundary,
  PieChartIndicator,
  PieChartIndicatorTop,
  PieChartIndicatorBottom,
  PieChartTextContent
} from '@src/styled';

interface CPUCommonLoadProps {
  currentDataCollection: CommonModel['currentDataCollection'],
  dataAddInLastField: CommonModel['dataAddInLastField'],
  currentDataCollectionItem: DataFromAPIModel,
  // data1,
  // data0,
  makeRequestToAPI: (payload: makeRequestToAPIProps) => any,
  doDeferredIndexIncrement: () => any,
}

export const CPUCommonLoad: React.SFC<CPUCommonLoadProps> = (props) => {
  const {
    currentDataCollection,
    dataAddInLastField,
    currentDataCollectionItem,
    makeRequestToAPI,
    doDeferredIndexIncrement,
  } = props;

  console.log(
    '[COMPONENT:dataAddInLastField]:',
    dataAddInLastField
  );

  console.log(
    '[COMPONENT]:currentDataCollectionItem',
    currentDataCollectionItem
  );


  const getValue = (): number => {
    if ( dataAddInLastField === 0 ) {
      const makeRequestToAPIProps: makeRequestToAPIProps = {
        dataAddInLastField: dataAddInLastField,
        currentDataCollection: currentDataCollection,
      }
      makeRequestToAPI(makeRequestToAPIProps);
    } else {
      doDeferredIndexIncrement();
    }

    if ( currentDataCollectionItem !== undefined )
      return Number(currentDataCollectionItem.cpu);
      
    return 0;

    // const makeRequestToAPIProps: makeRequestToAPIProps = {
    //   dataAddInLastField: dataAddInLastField,
    //   currentDataCollection: currentDataCollection,
    // }
    // if ( dataAddInLastField === 0 ){
    //   makeRequestToAPI(makeRequestToAPIProps);
    // }
  };

  const getColor = ( value: number ) => {
    if ( value > 25 && value < 51 ) return 'yellow';
    else if ( value > 50 && value < 76 ) return 'orange';
    else if ( value > 75 ) return 'red';
    else return 'green';
  };
  
  const value = getValue();
  const color = getColor(value);

  // setTimeout(
  //   () => {
  //     console.log('[TIMEOUT]:');
  //     console.log('[CURRENT_INDEX]:', CPUCommonLoadCurrentItem)
  //     console.log(getCPUCommonLoadNextItem);
  //       makeRequestToServer();
  //     if (value > 0 ) {
  //       getCPUCommonLoadNextItem(CPUCommonLoadCurrentItem + 1);
  //     }
  //   },
  //   1000
  // );

  const testHandler = () => {
    const makeRequestToAPIProps: makeRequestToAPIProps = {
      dataAddInLastField: dataAddInLastField,
      currentDataCollection: currentDataCollection,
    }
    makeRequestToAPI(makeRequestToAPIProps);
  }

  return (
    <div>
      <Header>CPUCommonLoad</Header>
      <PieChartWrapper>
        <PieChartOuterBoundary>
          <PieChartIndicator value={value}>
            <PieChartIndicatorTop></PieChartIndicatorTop>
            <PieChartIndicatorBottom color={color}></PieChartIndicatorBottom>
          </PieChartIndicator>
          <PieChartInternalBoundary>
            <PieChartTextContent>
              {value}%
            </PieChartTextContent>          
          </PieChartInternalBoundary>
        </PieChartOuterBoundary>
      </PieChartWrapper>
      <button onClick={testHandler}>
        TEST
      </button>
    </div>
  );
}