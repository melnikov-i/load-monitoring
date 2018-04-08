import * as React from 'react';
import * as ReactDnd from 'react-dnd';
// import domtoimage from 'dom-to-image';


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
    // id
  } = props;

  


  const style = { // Widget
    border: isDragging ? '1px dashed gray' : 'none',
    backgroundColor: isDragging ? 'lightgray' : 'transparent',
    boxSizing: 'border-box',
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
        display: 'block',
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
          <DashboardWidgetConnected
            widget_name={widget_name}
            width={'100'}
            margin={undefined}
            elements={{
              dashboard_id: '',
              element: '',
              collection: [],
            }}
            makeSeriesDataRequestFromAPI={undefined}
          />
        </div>
    </div>
  );
};
