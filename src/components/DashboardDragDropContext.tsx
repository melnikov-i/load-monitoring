import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
  DraggableDashboardChangerIterface,
} from '@src/interfaces';

import { DashboardDragLayer } from '@src/components';

import { Spinner } from '@src/components';
import DashboardDragSourceDropTargetConnected from 
  '@src/usage/DashboardDragSourceDropTargetUsage';

interface DashboardDragDropContextProps {
  DashboardCollection: DashboardInterface,
  DraggableWidgetsCollection: DashboardInterface,
  SelectedCheckbox: string,
  DraggableSelectedCheckbox: string,
  isDraggableWidgetsCollection: boolean,
  createDraggableDashboard:
  ( payload: DraggableDashboardChangerIterface ) => any,
}

export const DashboardDragDropContext: 
React.SFC<DashboardDragDropContextProps> = (props) => {
  const {
    DashboardCollection,
    DraggableWidgetsCollection,
    SelectedCheckbox,
    DraggableSelectedCheckbox,
    isDraggableWidgetsCollection,
    createDraggableDashboard,
  } = props;

  if ( !isDraggableWidgetsCollection ) {
    const item: DraggableDashboardChangerIterface = {
      dashboard: DashboardCollection,
      checkbox: SelectedCheckbox,
    }
    createDraggableDashboard(item);
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#f3f3f4'}
      />
    );
  }

  const series: any = [
    {
      // color: '#1ab394',
      data: [
        45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
        23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
        65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
        12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
        67, 43, 1, 34, 88, 99, 33, 99,
      ]
    }
  ];

  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '20px 15px 0',
      }}
    >
      <DashboardDragLayer />
      {DraggableWidgetsCollection.dash_data.map((e, i) => {
        const element: DashboardWidgetWrapperInterface = {
          index: i + 1,
          width: DraggableSelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
          series: series,
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