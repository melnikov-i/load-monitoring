import * as React from 'react';
import {
  Chart,
  Transform,
  Lines,
  // Dots,
  // Layer,
} from 'rumble-charts';

import {
  WidgetInterface,
} from '@src/interfaces';

import {
  DynamicWidthWidget,
  DynamicWidthWidgetHeaderWrapper,
  WidgetHeader,
  DynamicWidthWidgetContent,
} from '@src/styled';

const series = [
  {
    // color: '#1ab394',
    data: [
      45,
      23,
      65,
      12,
      67,
      43,
      1,
      34,
      88,
      99,
      33,
      45,
      45,
      23,
      65,
      12,
      67,
      43,
      1,
      34,
      88,
      99,
      33,
      45,
      45,
      23,
      65,
      12,
      67,
      43,
      1,
      34,
      88,
      99,
      33,
      45,
      45,
      23,
      65,
      12,
      67,
      43,
      1,
      34,
      88,
      99,
      33,
      45,
      45,
      23,
      65,
      12,
      67,
      43,
      1,
      34,
      88,
      99,
      33,
      99,
    ]
  }
];

interface DashboardWidgetProps {
  item: WidgetInterface,
}

export const DashboardWidget: 
React.SFC<DashboardWidgetProps> = (props) => {
  const { item } = props;



  return (
    <DynamicWidthWidget>
      <DynamicWidthWidgetHeaderWrapper>
        <WidgetHeader>{ item.widget_name }</WidgetHeader>
      </DynamicWidthWidgetHeaderWrapper>
      <DynamicWidthWidgetContent>
        <Chart
          series={series}
          viewBox={'0 0 100 50'}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            // backgroundColor: 'rgba(255, 0, 0, .4)',
          }}
          minY={0}
          scaleX={{paddingStart: 0, paddingEnd: 0}}
          scaleY={{paddingTop: 2}}
        >
          <Transform method={'stack'}>
            <Lines
              asAreas={true}
              colors={['#1ab394']}
            />            
          </Transform>
        </Chart>
      </DynamicWidthWidgetContent>
    </DynamicWidthWidget>
  );
}
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