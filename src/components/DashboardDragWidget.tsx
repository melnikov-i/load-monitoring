import * as React from 'react';
import * as ReactDnd from 'react-dnd';


import {
  DashboardDragWidgetInterface
} from '@src/interfaces';


export interface DashboardDragWidgetProps {
  /*  */
  item: DashboardDragWidgetInterface,
  /*  */
  connectDragSource?: ReactDnd.ConnectDragSource,
  /*  */
  connectDropTarget?: ReactDnd.ConnectDropTarget,
  /*  */
  isDragging?: boolean,
}

export const DashboardDragWidget:
React.SFC<DashboardDragWidgetProps> = ( props ) => {
  const {
    // item,
    connectDragSource,
    connectDropTarget,
    isDragging,
  } = props;

  const style = {
    height: '100px', 
    border: '1px dashed gray',
    backgroundColor: 'rgba(255, 0, 255, .4)',
    cursor: 'move',
  };
  const opacity = isDragging ? 0 : 1;
  

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  return connectDragSource(
    connectDropTarget(
      <div
        style={{
          ...style, opacity
        }}
      >
      
      </div>
    )
  );
}