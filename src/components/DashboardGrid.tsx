import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface
} from '@src/interfaces';

import DashboardWidgetWrapperConnected from 
  '@src/connected/DashboardWidgetWrapperConnected.usage';

interface DashboardGridProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardGrid: React.SFC<DashboardGridProps> = (props) => {
  const {
    SelectedCheckbox,
    DashboardCollection,
  } = props;


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
          <DashboardWidgetWrapperConnected
            key={i}
            element={element} 
          />
        );
      })}
    </div>
  );
};