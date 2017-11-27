import * as React from 'react';

import {
  DataFromServerModel,
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
  CPUCommonLoadCollectionItem: DataFromServerModel[],
  CPUCommonLoadCurrentItem: number,
  getCPUCommonLoadNextItem: (payload: number) => any,
}

export const CPUCommonLoad: React.SFC<CPUCommonLoadProps> = (props) => {
  const {
    getCPUCommonLoadNextItem,
    CPUCommonLoadCollectionItem,
    CPUCommonLoadCurrentItem,
  } = props;

  const value = (): number => {
    if ( CPUCommonLoadCollectionItem.length > CPUCommonLoadCurrentItem ) {
      const { cpu } = CPUCommonLoadCollectionItem[CPUCommonLoadCurrentItem];      
      return Number(cpu);
    }
    return 0;
  }

  console.log('[CPU]:', value());


  const color = ( value: number ) => {
    if ( value > 25 && value < 51 ) return 'yellow';
    else if ( value > 50 && value < 76 ) return 'orange';
    else if ( value > 75 ) return 'red';
    else return 'green';
  }

  setTimeout(
    () => {
      console.log('timeout');
      console.log('CPUCommonLoadCurrentItem', CPUCommonLoadCurrentItem)
      console.log(getCPUCommonLoadNextItem);
      getCPUCommonLoadNextItem(CPUCommonLoadCurrentItem + 1)
    },
    1000
  );

  return (
    <div>
      <Header>CPUCommonLoad</Header>
      <PieChartWrapper>
        <PieChartOuterBoundary>
          <PieChartIndicator value={value()}>
            <PieChartIndicatorTop></PieChartIndicatorTop>
            <PieChartIndicatorBottom color={color(value())}></PieChartIndicatorBottom>
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