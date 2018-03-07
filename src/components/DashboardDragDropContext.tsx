import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import { DashboardDragLayer } from '@src/components';

import DashboardDragSourceDropTargetConnected from 
  '@src/usage/DashboardDragSourceDropTargetUsage';

interface DashboardDragDropContextProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardDragDropContext: 
React.SFC<DashboardDragDropContextProps> = (props) => {
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
      <DashboardDragLayer />
      {DashboardCollection.dash_data.map((e, i) => {
        const element: DashboardWidgetWrapperInterface = {
          index: i + 1,
          width: SelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
        }
        return (
          <DashboardDragSourceDropTargetConnected
            key={i}
            element={element} 
          />
        );
      })}      
    </div>
  );
};