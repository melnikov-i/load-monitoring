import * as React from 'react';
import * as ReactDnd from 'react-dnd';

import {
  DashboardWidgetWrapperInterface,
  MoveWidgetsInterface,
  WidgetInterface
} from '@src/interfaces';

import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

import {
  getWidth,
  checkPosition
} from '@src/libs';

export interface DashboardDragSourceDropTargetProps {
  element: DashboardWidgetWrapperInterface
  isDragging?: boolean,
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  connectDragSource?: ReactDnd.ConnectDragSource,
  getSourceClientOffset?: any,
  isOver?: boolean,
  reorderDraggableWidgetsCollection:
  ( payload: MoveWidgetsInterface ) => any,
}

export const DashboardDragSourceDropTarget: 
React.SFC<DashboardDragSourceDropTargetProps> = (props) => {
  const {
    element,
    isDragging,
    connectDragSource,
    connectDropTarget,
    isOver,
  } = props;

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  const widgetItem: WidgetInterface = {
    widget_name: element.widget_name,
    device_id: element.device_id,
    isPreview: false,
    series: element.series,
  };

    return (
      <div
        className={'dashboardWidgetWrapper'}
        style={{
          width: getWidth(element.width),
          marginRight: checkPosition(
              Number(element.width), element.index
            ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
          marginBottom: ( element.width === '1' ) 
            ? '20px' : '2%',
          cursor: 'move',
          boxSizing: 'border-box',
          border: isDragging 
            ? '1px dashed #cecece'
            : isOver ? '1px dashed #cecece' : 'none',
          backgroundColor: isDragging
            ? '#e7eaec'
            : isOver ? '#e7eaec' : 'transparent',
        }}
      >
        {connectDragSource(
          connectDropTarget(
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                backgroundColor: 'tranceparent',
                zIndex: 100,
              }}>              
              </div>
          )
        )}
        {
          !isDragging
            ? !isOver
              ? <DashboardWidgetConnected item={widgetItem} />
              : null
            : null
        }
      </div>
    );
};