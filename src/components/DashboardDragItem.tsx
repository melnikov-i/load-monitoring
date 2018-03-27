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


import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';


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
    border: '1px dashed gray',
    boxSizing: 'border-box',
    width: getWidth(width),
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: checkPosition(Number(width), margin)
      ? ( width === '1' ) ? '0' : '2%' : '0',
    marginBottom: ( width === '1' ) ? '20px' : '2%',
    cursor: 'move',
  };
  
  const opacity = isDragging ? 0 : 1;
  
  if ( !connectDragSource || !connectDropTarget ) return null;

  return connectDragSource(
    connectDropTarget(
      <div style={{...style, opacity}}>
        <DashboardWidgetConnected
          widget_name={widget_name}
          width={'10'}
          margin={0}
        />
      </div>
    )
  )
};
          // <div style={{height: 200}}>
          //   <span style={{fontSize: '14px'}}>
          //     {'Widget:' + widget_name}
          //   </span>            
          // </div>