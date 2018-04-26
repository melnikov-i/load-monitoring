import * as React from 'react';

import {
  Chart,
  Layer,
  Bars,
  Ticks,
  Title,
} from 'rumble-charts';

import {
  WidgetInterface,
  DashboardInterface,
} from '@src/interfaces';

import {
  WidgetWrapperForSVG,
  Widget,
  WidgetContent,
  WidgetContentInForSVG,
  WidgetHeaderWrapper,
  WidgetHeader,
} from '@src/styled';


export interface DashboardDragWidgetProps {
  SeriesDataCollection: any,
  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  margin?: number,
}

export const DashboardDragWidget: 
React.SFC<DashboardDragWidgetProps> = (props) => {
  const {
    SeriesDataCollection,
    widget_name,
    width,
    margin,
  } = props;


  /**
   * Данные для блиблиотеки rumble-charts для отображения
   */

  const series: any = [
    {
      data: SeriesDataCollection,
    }
  ];


  return (
    <Widget
      width={width}
      margin={margin}
    >
      <WidgetHeaderWrapper>
        <WidgetHeader>{ widget_name }</WidgetHeader>
      </WidgetHeaderWrapper>
      <WidgetContent>
        <WidgetWrapperForSVG>
          <WidgetContentInForSVG>
            <Chart
              series={series}
              viewBox={'0 0 100 50'}
              minY={0}
              maxY={100}
              scaleX={{paddingStart: 1, paddingEnd: 0}}
              scaleY={{paddingTop: 4, paddingBottom: .05}}
            >
              <Layer width={'100%'} height={'100%'}>
                <Ticks 
                  axis={'y'}
                  position={'right'}
                  lineLength={.94}
                  lineOffset={-1}
                  lineVisible={true}
                  lineStyle={{
                    stroke: 'lightgray',
                    strokeWidth: 0.2,
                  }}
                  labelStyle={{
                    textAnchor: 'start',
                    dominantBaseline: 'middle',
                    fill: 'lightgray',
                    fontSize: 2.5,
                  }}
                  labelAttributes={{x: -5}}
                />
              </Layer>
              <Layer
                width={'92%'}
                height={'100%'}
                position={'left bottom'}
              >
                  <Bars
                    barWidth={.011}
                    barStyle={{
                      fillOpacity: .7,
                      transition: 'fillOpacity 250ms',
                      cursor: 'pointer',
                    }}
                    barAttributes={{
                      onMouseMove: e => e.target.style.fillOpacity = 1,
                      onMouseLeave: e => e.target.style.fillOpacity = .7,
                    }}
                  />
              </Layer>
              <Layer width={'100%'} height={'100%'}>
                <Title position={'top left'}>
                  <g id={widget_name} style={{opacity: 0,}}></g>
                </Title>
              </Layer>
            </Chart>
          </WidgetContentInForSVG>
        </WidgetWrapperForSVG>
      </WidgetContent>
    </Widget>
  );
};