import * as React from 'react';


import {
  DashboardInterface,
  WidgetInterface,
  DraggableDashboardChangerIterface,
} from '@src/interfaces';


import {
  emergence,
  Widget
} from '@src/styled';


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


  /**
   * Особенностью React-DnD является то, что она ждет в качестве
   * корневого элемента JSX.Element. Поэтому в данном месте
   * необходимо повторить стиль WidgetLayout
   */

  return (
    <div /* WidgetLayout */
      style={{
        display: 'block',  
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: '20px 15px 0',
        animationName: emergence,
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        // position: 'relative',
      }}
    >
      {/* Компонент, отображаемый при перемещении под курсором */}
      <DashboardDragLayer />

      {DraggableWidgetsCollection.dash_data.map((e, i) => {
        const element: WidgetInterface = {
          index: i + 1,
          width: DraggableSelectedCheckbox,
          widget_name: e.widget_name,
          device_id: e.device_id,
          isPreview: false,
          series: series,
        }
        return (
          <Widget
            key={i}
            width={DraggableSelectedCheckbox}
            margin={i + 1}
          >
            <DashboardDragSourceDropTargetConnected
              element={element} 
            />            
          </Widget>
        );
      })}      
    </div>
  );
};