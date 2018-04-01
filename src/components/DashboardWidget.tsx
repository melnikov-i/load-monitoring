import * as React from 'react';
import {
  Chart,
  Layer,
  Bars,
  Ticks,
  Handlers,
  Title,
} from 'rumble-charts';

import {
  WidgetInterface,
  DashboardInterface
} from '@src/interfaces';

import {
  WidgetWrapperForSVG,
  Widget,
  WidgetContent,
  WidgetContentInForSVG,
  WidgetHeaderWrapper,
  WidgetHeader,
} from '@src/styled';


interface DashboardWidgetProps {
  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  margin?: number,
}

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const {
    widget_name,
    width,
    margin,
  } = props;


  /**
   * Возвращает цвет столбца. 
   *
   * @param {number} y
   * @return {string}
   */

  const getColor = ( y: number ) => {
    if ( y >= 90 ) {
      return '#ec4758'; // red    
    } else {
      if ( y >= 50 ) {
        return '#f8ac59'; // orange
      } else {
        return '#1ab394'; // green
      }
    }
  };

  const series: any = [
    {
      data: [
        {y:90, x:0, color: getColor(90)},
        {y:2, x:1, color: getColor(2)},
        {y:4, x:2, color: getColor(4)},
        {y:6, x:3, color: getColor(6)},
        {y:8, x:4, color: getColor(8)},
        {y:10, x:5, color: getColor(10)},
        {y:12, x:6, color: getColor(12)},
        {y:14, x:7, color: getColor(14)},
        {y:16, x:8, color: getColor(16)},
        {y:18, x:9, color: getColor(18)},
        {y:20, x:10, color: getColor(20)},
        {y:22, x:11, color: getColor(22)},
        {y:24, x:12, color: getColor(24)},
        {y:26, x:13, color: getColor(26)},
        {y:28, x:14, color: getColor(28)},
        {y:30, x:15, color: getColor(30)},
        {y:32, x:16, color: getColor(32)},
        {y:34, x:17, color: getColor(34)},
        {y:36, x:18, color: getColor(36)},
        {y:38, x:19, color: getColor(38)},
        {y:40, x:20, color: getColor(40)},
        {y:42, x:21, color: getColor(42)},
        {y:44, x:22, color: getColor(44)},
        {y:46, x:23, color: getColor(46)},
        {y:48, x:24, color: getColor(48)},
        {y:50, x:25, color: getColor(50)},
        {y:52, x:26, color: getColor(52)},
        {y:54, x:27, color: getColor(54)},
        {y:56, x:28, color: getColor(56)},
        {y:58, x:29, color: getColor(58)},
        {y:60, x:30, color: getColor(60)},
        {y:62, x:31, color: getColor(62)},
        {y:64, x:32, color: getColor(64)},
        {y:66, x:33, color: getColor(66)},
        {y:68, x:34, color: getColor(68)},
        {y:70, x:35, color: getColor(70)},
        {y:72, x:36, color: getColor(72)},
        {y:74, x:37, color: getColor(74)},
        {y:76, x:38, color: getColor(76)},
        {y:78, x:39, color: getColor(78)},
        {y:80, x:40, color: getColor(80)},
        {y:82, x:41, color: getColor(82)},
        {y:84, x:42, color: getColor(84)},
        {y:86, x:43, color: getColor(86)},
        {y:88, x:44, color: getColor(88)},
        {y:90, x:45, color: getColor(90)},
        {y:92, x:46, color: getColor(92)},
        {y:94, x:47, color: getColor(94)},
        {y:96, x:48, color: getColor(96)},
        {y:98, x:49, color: getColor(98)},
        {y:96, x:50, color: getColor(96)},
        {y:94, x:51, color: getColor(94)},
        {y:92, x:52, color: getColor(92)},
        {y:90, x:53, color: getColor(90)},
        {y:88, x:54, color: getColor(88)},
        {y:86, x:55, color: getColor(86)},
        {y:84, x:56, color: getColor(84)},
        {y:82, x:57, color: getColor(82)},
        {y:80, x:58, color: getColor(80)},
        {y:78, x:59, color: getColor(78)},
      ],
    },
  ];


  /**
   * Обрабатывает движения мыши по диаграмме.
   * 
   */

  const handleMouseMove = ( e: any ) => {

    const clientX = () => {
      const x = e.clientX;
      if ( x >= 65 ) return x - 31;
      return x + 1;
    };

    const clientY = () => {
      const y = e.clientY;
      if ( y >= 10 ) return y - 9;
      return y + 1;
    };

    const title = document.getElementById(props.widget_name);
    if ( !title ) return;

    const curent = e.originalEvent.target;
    
    if ( curent.nodeName === 'rect' ) {
      title.style.opacity = '0';
      return;
    }

    const parent = curent.parentNode;
    const root = parent.parentNode;

    let index = -1;

    root.childNodes.forEach((node, i) => {
      if ( node === parent ) index = i
    });

    if ( index === -1 ) return;

    title.setAttribute(
      'transform', `translate(${clientX()} ${clientY()})`);
    title.style.opacity = '1';
    title.innerHTML = '<rect x="0" y="0" width="30" height="8"'
      + ' fill="#676a6c" fillOpacity=".8" rx="1" ry="1"></rect>'
      + '<text fill="lightgray" x="2" y="5" style="fillOpacity: 1;'
      + ' transition: all 250ms; font-family: sans-serif;'
      + 'font-size: 3px; text-renderint: geometricprecision;">'
      + widget_name + ': ' + series[0].data[index].y + '%</text>';
  };



  const handleMouseLeave = ( e: any ) => {
    const title = document.getElementById(props.widget_name);
    if ( !title ) return;
    title.style.opacity = '0';
  };


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
              scaleX={{paddingStart: 1, paddingEnd: 0}}
              scaleY={{paddingTop: 4, paddingBottom: .05}}
            >
              <Layer width={'100%'} height={'100%'}>
                <Ticks 
                  axis={'y'}
                  position={'right'}
                  lineLength={.95}
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
                  labelAttributes={{x: -4}}
                />
              </Layer>
              <Layer
                width={'94%'}
                height={'100%'}
                position={'left bottom'}
              >
                <Handlers
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  optimized={false}
                >
                  <Bars
                    barWidth={.013}
                    barStyle={{
                      fillOpacity: .7,
                      transition: 'all 250ms',
                      cursor: 'pointer',
                    }}
                    barAttributes={{
                      onMouseMove: e => e.target.style.fillOpacity = 1,
                      onMouseLeave: e => e.target.style.fillOpacity = .7,
                    }}
                  />
                </Handlers>
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