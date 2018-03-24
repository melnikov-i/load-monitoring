import * as React from 'react';

import {
  DashboardInterface,
  // WidgetInterface
} from '@src/interfaces';


import {
  // WidgetsLayout,
  // Widget,
} from '@src/styled';


interface DashboardStaticContainerProps {
  items: DashboardInterface
}

export const DashboardStaticContainer: 
React.SFC<DashboardStaticContainerProps> = (props) => {
  const { items } = props;

  console.log('items:', items);

  return (
    <div>
      {/* Контейнер с виджетами */}
    </div>
  );
}
      // <WidgetsLayout>
      //   {items.dash_data.map((e, i) => {
          
      //     const item: WidgetInterface = {
      //       widget_name: e.widget_name,
      //       device_id: e.device_id,
      //       id: e.id,
      //       series: series,
      //     };
      //     return (
      //       <Widget
      //         key={i}
      //         width={SelectedCheckbox}
      //         margin={i + 1}
      //       >
      //         <DashboardWidgetConnected item={item} />
      //       </Widget>
      //     )
      //   })}
      // </WidgetsLayout>