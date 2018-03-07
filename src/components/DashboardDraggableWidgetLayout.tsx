import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import { DashboardDragLayer } from '@src/components';

import DashboardWidgetConnected from 
  '@src/usage/DashboardWidgetUsage';

interface DashboardWidgetsPositionSettingsProps {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}

export const DashboardDraggableWidgetLayout: 
React.SFC<DashboardWidgetsPositionSettingsProps> = (props) => {
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
          <DashboardWidgetConnected
            key={i}
            element={element} 
          />
        );
      })}      
    </div>
  );
};