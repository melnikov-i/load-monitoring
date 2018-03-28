import * as React from 'react';
import {
  Chart,
  Layer,
  // Lines,
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
    time: '0', data: [{y:90, color: getColor(90)},],
  }, {
    time: '1', data: [{y:2, color: getColor(2)},],
  }, {
    time: '2', data: [{y:4, color: getColor(4)},],
  }, {
    time: '3', data: [{y:6, color: getColor(6)},],
  }, {
    time: '4', data: [{y:8, color: getColor(8)},],
  }, {
    time: '5', data: [{y:10, color: getColor(10)},],
  }, {
    time: '6', data: [{y:12, color: getColor(12)},],
  }, {
    time: '7', data: [{y:14, color: getColor(14)},],
  }, {
    time: '8', data: [{y:16, color: getColor(16)},],
  }, {
    time: '9', data: [{y:18, color: getColor(18)},],
  }, {
    time: '10', data: [{y:20, color: getColor(20)},],
  }, {
    time: '11', data: [{y:22, color: getColor(22)},],
  }, {
    time: '12', data: [{y:24, color: getColor(24)},],
  }, {
    time: '13', data: [{y:26, color: getColor(26)},],
  }, {
    time: '14', data: [{y:28, color: getColor(28)},],
  },{
    time: '15', data: [{y:30, color: getColor(30)},],
  }, {
    time: '16', data: [{y:32, color: getColor(32)},],
  },{
    time: '17', data: [{y:34, color: getColor(34)},],
  }, {
    time: '18', data: [{y:36, color: getColor(36)},],
  }, {
    time: '19', data: [{y:38, color: getColor(38)},],
  }, {
    time: '20', data: [{y:40, color: getColor(40)},],
  }, {
    time: '21', data: [{y:42, color: getColor(42)},],
  }, {
    time: '22', data: [{y:44, color: getColor(44)},],
  }, {
    time: '23', data: [{y:46, color: getColor(46)},],
  }, {
    time: '24', data: [{y:48, color: getColor(48)},],
  },{
    time: '25', data: [{y:50, color: getColor(50)},],
  }, {
    time: '26', data: [{y:52, color: getColor(52)},],
  },{
    time: '27', data: [{y:54, color: getColor(54)},],
  }, {
    time: '28', data: [{y:56, color: getColor(56)},],
  }, {
    time: '29', data: [{y:58, color: getColor(58)},],
  },{
    time: '0', data: [{y:60, color: getColor(60)},],
  }, {
    time: '1', data: [{y:62, color: getColor(62)},],
  }, {
    time: '2', data: [{y:64, color: getColor(64)},],
  }, {
    time: '3', data: [{y:66, color: getColor(66)},],
  }, {
    time: '4', data: [{y:68, color: getColor(68)},],
  }, {
    time: '5', data: [{y:70, color: getColor(70)},],
  }, {
    time: '6', data: [{y:72, color: getColor(72)},],
  }, {
    time: '7', data: [{y:74, color: getColor(74)},],
  }, {
    time: '8', data: [{y:76, color: getColor(76)},],
  }, {
    time: '9', data: [{y:78, color: getColor(78)},],
  }, {
    time: '10', data: [{y:80, color: getColor(80)},],
  }, {
    time: '11', data: [{y:82, color: getColor(82)},],
  }, {
    time: '12', data: [{y:84, color: getColor(84)},],
  }, {
    time: '13', data: [{y:86, color: getColor(86)},],
  }, {
    time: '14', data: [{y:88, color: getColor(88)},],
  },{
    time: '15', data: [{y:90, color: getColor(90)},],
  }, {
    time: '16', data: [{y:92, color: getColor(92)},],
  },{
    time: '17', data: [{y:94, color: getColor(94)},],
  }, {
    time: '18', data: [{y:96, color: getColor(96)},],
  }, {
    time: '19', data:[{y:98, color: getColor(98)},],
  }, {
    time: '20', data: [{y:96, color: getColor(96)},],
  }, {
    time: '21', data: [{y:94, color: getColor(94)},],
  }, {
    time: '22', data: [{y:92, color: getColor(92)},],
  }, {
    time: '23', data: [{y:90, color: getColor(90)},],
  }, {
    time: '24', data: [{y:88, color: getColor(88)},],
  },{
    time: '25', data: [{y:86, color: getColor(86)},],
  }, {
    time: '26', data: [{y:84, color: getColor(84)},],
  },{
    time: '27', data: [{y:82, color: getColor(82)},],
  }, {
    time: '28', data: [{y:80, color: getColor(80)},],
  }, {
    time: '29', data: [{y:78, color: getColor(78)},],
  },
];
      // 45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
      // 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
      // 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
      // 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
      // 67, 43, 1, 34, 88, 99, 33, 99,
  // {
    
  //   // color: '#1ab394',
  //   data: [
  //     45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
  //     23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
  //     65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
  //     12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
  //     67, 43, 1, 34, 88, 99, 33, 99,
  //   ]
  // }

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


        // <DynamicWidthWidgetContent style={{fontSize: '14px'}}>
        // </DynamicWidthWidgetContent>

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
            scaleX={{paddingStart: 0, paddingEnd: .55}}
            scaleY={{paddingTop: 2, paddingBottom: .05}}
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
              <Bars
                opacity={.6}
                barWidth={.014}
                innerPadding={.0016}
              />
            </Layer>
          </Chart>

      </WidgetContent>
    </Widget>
  );
}

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