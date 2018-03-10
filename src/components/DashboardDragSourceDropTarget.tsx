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
  getInitialSourceClientOffset?: any,
  isOver?: boolean,
  reorderDraggableWidgetsCollection:
  (payload: MoveWidgetsInterface) => any,
}

export const DashboardDragSourceDropTarget: 
React.SFC<DashboardDragSourceDropTargetProps> = (props) => {
  const {
    element,
    isDragging,
    connectDragSource,
    connectDropTarget,
    // getSourceClientOffset,
    getInitialSourceClientOffset,
    // isOver,
  } = props;

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  const item: WidgetInterface = {
    widget_name: element.widget_name,
    device_id: element.device_id,
    isPreview: false,
  }

  if ( isDragging ) {
    // console.log('SourceClietnOffset:', getSourceClientOffset);
    return (
      <div
        className={'dashboardWidgetWrapper'}
        id={element.device_id}
        style={{
          width: getWidth(element.width),
          marginRight: checkPosition(
              Number(element.width), element.index
            ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
          marginBottom: ( element.width === '1' ) 
            ? '20px' : '2%',
          boxSizing: 'border-box',
          border: '1px dashed #cecece',
          backgroundColor: '#e7eaec',

        }}
      >

      </div>
    );
  } else {
    let toX: number = getInitialSourceClientOffset.x;
    // let toY: number = getInitialSourceClientOffset.y;
    console.log('initial_toX:', toX);
    return (
      <div
        className={'dashboardWidgetWrapper'}
        id={element.device_id}
        style={{
          width: getWidth(element.width),
          marginRight: checkPosition(
              Number(element.width), element.index
            ) ? ( element.width === '1' ) ? '0' : '2%' : '0',
          marginBottom: ( element.width === '1' ) 
            ? '20px' : '2%',
          cursor: 'move',
          // boxShadow: isOver ? '0 0 15px 3px #ccc' : 'none',
          // position: 'fixed',
          // transform: `translate(${toX}, ${toY})`,
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
        <DashboardWidgetConnected item={item} />
      </div>
    );    
  }
};