import * as React from 'react';

import {
  CommonDataInterface,

  // CommonModel,
  // makeRequestToAPIProps,
  // DataFromAPIModel,
} from '@src/interfaces';
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
  CommonDataModel: CommonDataInterface,
  // currentDataCollection: CommonModel['currentDataCollection'],
  // dataAddInLastField: CommonModel['dataAddInLastField'],
  // currentDataCollectionItem: DataFromAPIModel,
  // data1,
  // data0,
  makeFirstRequestToAPI: (payload: string) => any,
  makeNextRequestToAPI: (count: string, interval: number) => any,
  doDeferredIndexIncrement: (payload: number) => any,
}

export const CPUCommonLoad: React.SFC<CPUCommonLoadProps> = (props) => {
  const {
    CommonDataModel,
    makeFirstRequestToAPI,
    makeNextRequestToAPI,
    doDeferredIndexIncrement,
  } = props;

  // console.log('[COMMON_DATA_MODEL]:', CommonDataModel);

  // console.log(
  //   '[COMPONENT:dataAddInLastField]:',
  //   dataAddInLastField
  // );

  // console.log(
  //   '[COMPONENT]:currentDataCollectionItem',
  //   currentDataCollectionItem
  // );


  const getValue = (): number => {
    /* Начальное состояние */
    if ( CommonDataModel.data[CommonDataModel.index].data_add === "" ) {
      makeFirstRequestToAPI('65');
      return 0;
    }
    
    console.log(
      '[COMPONENT] - CommonDataModel.data.length',
      CommonDataModel.data.length
    );

    console.log(
      '[COMPONENT] - CommonDataModel.index',
      CommonDataModel.index
    );

    console.log(
      '[COMPONENT] - DATA_ADD',
      CommonDataModel.data[CommonDataModel.index].data_add
    );
    

    if ( CommonDataModel.data.length - CommonDataModel.index < 5 ) {
      console.log('[COMPONENT] - makeNextRequestToAPI');
      makeNextRequestToAPI('65', CommonDataModel.interval);
    } else {
      doDeferredIndexIncrement(CommonDataModel.interval);
    }
    return Number(CommonDataModel.data[CommonDataModel.index].cpu);
  };

  const getColor = ( value: number ) => {
    if ( value > 25 && value < 51 ) return 'yellow';
    else if ( value > 50 && value < 76 ) return 'orange';
    else if ( value > 75 ) return 'red';
    else return 'green';
  };
  
  const value = getValue();
  const color = getColor(value);

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
    </div>
  );
}