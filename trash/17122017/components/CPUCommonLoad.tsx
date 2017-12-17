import * as React from 'react';

import {
  CommonDataInterface,
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

  const getValue = (): number => {
    /* Начальное состояние */
    if ( CommonDataModel.data[CommonDataModel.index].data_add === "" ) {
      makeFirstRequestToAPI('65');
      return 0;
    }

    if ( CommonDataModel.data.length - CommonDataModel.index < 5 ) {
      console.log('[COMPONENT] - makeNextRequestToAPI');
      makeNextRequestToAPI('65', CommonDataModel.interval);
    } else {
      doDeferredIndexIncrement(CommonDataModel.interval);
    }
    return Number(CommonDataModel.data[CommonDataModel.index].cpu);
  };

  const getColor = ( value: number ) => {
    if ( value > 41 && value < 80 ) return '#FACC42';
    else if ( value > 81 ) return '#F52105';
    else return '#8AAD2E';
  };

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