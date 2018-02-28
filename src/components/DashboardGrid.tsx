import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface
} from '@src/interfaces';

import DashboardWidgetConnected from 
  '@src/usage/DashboardWidgetUsage';
// import { DashboardDragLayer } from
//   '@src/components/DashboardDragLayer';

interface DashboardGridProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardGrid: React.SFC<DashboardGridProps> = (props) => {
  const {
    SelectedCheckbox,
    DashboardCollection,
  } = props;

  // const dragLayerElement: DashboardWidgetWrapperInterface = {
  //   index: 100,
  //   width: '2',
  //   widget_name: 'test',
  //   device_id: '123123123',
  // }


      // <DashboardDragLayer />
  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '20px 15px 0',
      }}
    >
      {DashboardCollection.dash_data.map((e, i) => {
        const element: DashboardWidgetWrapperInterface = {
          index: i + 1,
          width: SelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
        }
        return (
          <DashboardWidgetConnected
            key={i}
            element={element} 
          />
        );
      })}
    </div>
  );
};