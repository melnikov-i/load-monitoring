import * as React from 'react';

import {
  DashboardInterface,
  DashboardWidgetWrapperInterface,
} from '@src/interfaces';

import { DashboardDragLayer } from '@src/components';

import { Spinner } from '@src/components';
import DashboardDragSourceDropTargetConnected from 
  '@src/usage/DashboardDragSourceDropTargetUsage';

interface DashboardDragDropContextProps {
  DashboardCollection: DashboardInterface,
  DraggableWidgetsCollection: DashboardInterface['dash_data'],
  DraggableSelectedCheckbox: string,
  isDraggableWidgetsCollection: boolean,
  createDraggableDashboard:
  ( payload: DashboardInterface['dash_data'] ) => any,
}

export const DashboardDragDropContext: 
React.SFC<DashboardDragDropContextProps> = (props) => {
  const {
    DashboardCollection,
    DraggableSelectedCheckbox,
    DraggableWidgetsCollection,
    isDraggableWidgetsCollection,
    createDraggableDashboard,
  } = props;

  if ( !isDraggableWidgetsCollection ) {
    console.log('DraggableWidgetsCollection create:')
    createDraggableDashboard(DashboardCollection.dash_data);
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#f3f3f4'}
      />
    );
  }

  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: '20px 15px 0',
      }}
    >
      <DashboardDragLayer />
      {DraggableWidgetsCollection.map((e, i) => {
        const element: DashboardWidgetWrapperInterface = {
          index: i + 1,
          width: DraggableSelectedCheckbox,
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