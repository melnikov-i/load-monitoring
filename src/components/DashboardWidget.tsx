import * as React from 'react';
import {
  Chart,
  Layer,
  // Labels,
  // Lines,
  // Dots,
  Bars,
  Ticks,
  // Transform,
  // Dots,
} from 'rumble-charts';

import {
  WidgetInterface,
  DashboardInterface
} from '@src/interfaces';

import {
  Widget,
  WidgetContent,
  WidgetHeaderWrapper,
  WidgetHeader,

  // DynamicWidthWidget,
  // DynamicWidthWidgetContent,
} from '@src/styled';

/* Тестовые данные для диаграмм */

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

}

const series: any = [
  {
    data: [{y:90, x:0, color: getColor(90)},],
  }, {
    data: [{y:2, x:1, color: getColor(2)},],
  }, {
    data: [{y:4, x:2, color: getColor(4)},],
  }, {
    data: [{y:6, x:3, color: getColor(6)},],
  }, {
    data: [{y:8, x:4, color: getColor(8)},],
  }, {
    data: [{y:10, x:5, color: getColor(10)},],
  }, {
    data: [{y:12, x:6, color: getColor(12)},],
  }, {
    data: [{y:14, x:7, color: getColor(14)},],
  }, {
    data: [{y:16, x:8, color: getColor(16)},],
  }, {
    data: [{y:18, x:9, color: getColor(18)},],
  }, {
    data: [{y:20, x:10, color: getColor(20)},],
  }, {
    data: [{y:22, x:11, color: getColor(22)},],
  }, {
    data: [{y:24, x:12, color: getColor(24)},],
  }, {
    data: [{y:26, x:13, color: getColor(26)},],
  }, {
    data: [{y:28, x:14, color: getColor(28)},],
  },{
    data: [{y:30, x:15, color: getColor(30)},],
  }, {
    data: [{y:32, x:16, color: getColor(32)},],
  },{
    data: [{y:34, x:17, color: getColor(34)},],
  }, {
    data: [{y:36, x:18, color: getColor(36)},],
  }, {
    data: [{y:38, x:19, color: getColor(38)},],
  }, {
    data: [{y:40, x:20, color: getColor(40)},],
  }, {
    data: [{y:42, x:21, color: getColor(42)},],
  }, {
    data: [{y:44, x:22, color: getColor(44)},],
  }, {
    data: [{y:46, x:23, color: getColor(46)},],
  }, {
    data: [{y:48, x:24, color: getColor(48)},],
  },{
    data: [{y:50, x:25, color: getColor(50)},],
  }, {
    data: [{y:52, x:26, color: getColor(52)},],
  },{
    data: [{y:54, x:27, color: getColor(54)},],
  }, {
    data: [{y:56, x:28, color: getColor(56)},],
  }, {
    data: [{y:58, x:29, color: getColor(58)},],
  },{
    data: [{y:60, x:30, color: getColor(60)},],
  }, {
    data: [{y:62, x:31, color: getColor(62)},],
  }, {
    data: [{y:64, x:32, color: getColor(64)},],
  }, {
    data: [{y:66, x:33, color: getColor(66)},],
  }, {
    data: [{y:68, x:34, color: getColor(68)},],
  }, {
    data: [{y:70, x:35, color: getColor(70)},],
  }, {
    data: [{y:72, x:36, color: getColor(72)},],
  }, {
    data: [{y:74, x:37, color: getColor(74)},],
  }, {
    data: [{y:76, x:38, color: getColor(76)},],
  }, {
    data: [{y:78, x:39, color: getColor(78)},],
  }, {
    data: [{y:80, x:40, color: getColor(80)},],
  }, {
    data: [{y:82, x:41, color: getColor(82)},],
  }, {
    data: [{y:84, x:42, color: getColor(84)},],
  }, {
    data: [{y:86, x:43, color: getColor(86)},],
  }, {
    data: [{y:88, x:44, color: getColor(88)},],
  },{
    data: [{y:90, x:45, color: getColor(90)},],
  }, {
    data: [{y:92, x:46, color: getColor(92)},],
  },{
    data: [{y:94, x:47, color: getColor(94)},],
  }, {
    data: [{y:96, x:48, color: getColor(96)},],
  }, {
    data: [{y:98, x:49, color: getColor(98)},],
  }, {
    data: [{y:96, x:50, color: getColor(96)},],
  }, {
    data: [{y:94, x:51, color: getColor(94)},],
  }, {
    data: [{y:92, x:52, color: getColor(92)},],
  }, {
    data: [{y:90, x:53, color: getColor(90)},],
  }, {
    data: [{y:88, x:54, color: getColor(88)},],
  },{
    data: [{y:86, x:55, color: getColor(86)},],
  }, {
    data: [{y:84, x:56, color: getColor(84)},],
  },{
    data: [{y:82, x:57, color: getColor(82)},],
  }, {
    data: [{y:80, x:58, color: getColor(80)},],
  }, {
    data: [{y:78, x:59, color: getColor(78)},],
  },
];



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


  return (
    <Widget
      width={width}
      margin={margin}
    >
      <WidgetHeaderWrapper>
        <WidgetHeader>{ widget_name }</WidgetHeader>
      </WidgetHeaderWrapper>
      <WidgetContent>
          <Chart
            series={series}
            viewBox={'0 0 100 50'}
            minY={0}
            // layerWidth={50}
            // scaleX={{paddingStart: 0, paddingEnd: .55}}
            scaleY={{paddingTop: 2, paddingBottom: .05}}
          >
            <Layer width={'80%'} height={'100%'}>
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
              <Bars
                // barWidth={.015}
                innerPadding={.0001}
                // groupPadding={.1}
                barStyle={{
                  fillOpacity: .5,
                  transition: 'all 250ms',
                  cursor: 'pointer',
                }}
                barAttributes={{
                  onMouseMove: e => e.target.style.fillOpacity = 1,
                  onMouseLeave: e => e.target.style.fillOpacity = .5,
                }}
              />
            </Layer>
          </Chart>

      </WidgetContent>
    </Widget>
  );
}
              // <Labels 
              //   label={({point}) => (point.y)}
              //   dotStyle={{
              //     textAnchor: 'middle',
              //     alignmentBaseline: 'after-edge',
              //     fontFamily: 'sans-serif',
              //     fontSize: 1
              //   }}
              //   labelAttributes={{
              //     y: 10
              //   }}
              // />

              // <Ticks
              //   axis={'x'}
              //   label={({index, props}) => props.series[index].time}
              //   labelStyle={{
              //     textAnchor: 'start',
              //     dominantBaseline: 'text-before-edge',
              //     fill: 'lightgray',
              //     fontSize: 2,
              //   }}
              //   labelAtributes={{y: 3}}
              //   liteVisible={true}
              //   lineStyle={{
              //     stroke: 'lightgray'
              //   }}
              //   lineLength={1}
              // />

// <Transform method={'sort'}>
//               <Layer width={'100%'} height={'100%'}>
//               </Layer>
//               <Layer width={'100%'} height={'100%'}>
//                 <Lines
//                   // asAreas={true}
//                   colors={['yellow']}
//                   opacity={.6}
//                   // barWidth={'1.5%'}
//                 />
//               </Layer>
//               <Layer width={'100%'} height={'100%'}>
                // <Ticks 
                //   axis={'y'}
                //   lineLength={'100%'}
                //   lineVisible={true}
                //   lineStyle={{
                //     stroke: 'lightgray',
                //     strokeWidth: '0.2',
                //   }}
                //   // labelStyle={{
                //   //   textAnchor:'end',
                //   //   // dominantBaseline:'small',
                //   //   // fill:'lightgray'
                //   // }}
                //   // labelVisible={true}
                //   // labelAttributes={{x: -5}}
                // />
//               </Layer>
//               <Layer width={'100%'} height={'100%'}>
//                 <Ticks 
//                   axis={'x'}
//                   // lineLength={'100%'}

//                   // lineVisible={true}
//                   // lineStyle={{
//                   //   stroke: 'lightgray',
//                   //   strokeWidth: '0.2',
//                   // }}
//                   labelStyle={{
//                     textAnchor:'end',
//                     dominantBaseline:'small',
//                     fill:'lightgray'
//                   }}
//                   labelVisible={true}
//                   labelAttributes={{x: -5}}
//                 />
//               </Layer>
//             </Transform>





// const handleMouseMove = ( { closestPoints } ) => {

// }

// interface DashboardWidgetProps {
//   item: WidgetInterface,
// }

// export const DashboardWidget: 
// React.SFC<DashboardWidgetProps> = (props) => {
//   const { item } = props;
//   return (
//     <DynamicWidthWidget>
//       <DynamicWidthWidgetHeaderWrapper>
//         <WidgetHeader>{ item.widget_name }</WidgetHeader>
//       </DynamicWidthWidgetHeaderWrapper>
//       <DynamicWidthWidgetContent>
//         <Chart
//           series={series}
//           viewBox={'0 0 100 50'}
//           style={{
//             display: 'block',
//             width: '100%',
//             height: '100%',
//             // backgroundColor: 'rgba(255, 0, 0, .4)',
//           }}
//           minY={0}
//           scaleX={{paddingStart: 0, paddingEnd: 0}}
//           scaleY={{paddingTop: 2}}
//         >
//           <Layer width={'100%'} height={'100%'} position={'top left'}>
//             <Transform method={'sort'}>
//               <Lines
//                 asAreas={true}
//                 colors={['#1ab394']}
//               />
//               <Dots
//                 // className='dots'
//                 dotStyle={{transition: 'all 250ms', fillOpacity:0}}
//               />
//             </Transform>
//           </Layer>
//         </Chart>
//       </DynamicWidthWidgetContent>
//     </DynamicWidthWidget>
//   );
// }