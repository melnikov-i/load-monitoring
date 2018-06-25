import * as React from 'react';
import * as ReactDnd from 'react-dnd';

import {
  WidgetInterface,
  DashboardInterface
} from '@src/interfaces';

import {
  getWidth,
  checkPosition
} from '@src/libs';

import DashboardDragWidgetConnected from
  '@src/usage/DashboardDragWidgetUsage';

export interface DashboardDragItemProps {
  /*  */
  connectDragSource?: ReactDnd.ConnectDragSource,
  /*  */
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  /*  */
  isDragging?: boolean,

  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  id: string,
  margin: number,
  moveWidgets: any,
  findWidget: any,
  clearCurrentTargetId: any,
}

export const DashboardDragItem: 
React.SFC<DashboardDragItemProps> = ( props ) => {
  const {
    isDragging,
    connectDragSource,
    connectDropTarget,
    widget_name,
    width,
    margin,
  } = props;

  const style = { // Widget
    border: isDragging ? '1px dashed gray' : 'none',
    backgroundColor: isDragging ? 'lightgray' : 'transparent',
    width: getWidth(width),
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: checkPosition(Number(width), margin)
    ? ( width === '1' ) ? '0' : '2%' : '0',
    marginBottom: ( width === '1' ) ? '20px' : '2%',
  };
  
  if ( !connectDragSource || !connectDropTarget ) return null;
  
  return (
    <div
    style={{
        boxSizing: 'border-box',
        position: 'relative',
        ...style
      }}
    >
      {connectDragSource(
        connectDropTarget(
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 100,
            cursor: 'move',
          }}></div>
        )
      )}
        <div
          id={''} // ID
          style={{
            opacity: isDragging ? 0 : 1,
          }}
        >
          <DashboardDragWidgetConnected
            widget_name={widget_name}
            width={'100'}
            margin={undefined}
          />        
        </div>
    </div>
  );
};
