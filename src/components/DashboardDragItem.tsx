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

// type DashboardDragItemState = {
//   element: any,
  // id: string,
  // widgetName: string,
  // series: string,
  // moveItem: any,
  // findItem: any,
// };


// export class DashboardDragItem 
// extends React.Component<DashboardDragItemProps, DashboardDragItemState> {
export const DashboardDragItem: 
React.SFC<DashboardDragItemProps> = ( props ) => {
  // render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      widget_name,
      width,
      margin,
      // element
    // } = this.props;
    } = props;

    const style = {
      border: '1px dashed gray',
      boxSizing: 'border-box',
      width: getWidth(width),
      display: 'inline-block',
      verticalAlign: 'top',
      marginRight: checkPosition(Number(width), margin)
          ? ( width === '1' ) ? '0' : '2%' : '0',
      marginBottom: ( width === '1' ) ? '20px' : '2%',
      cursor: 'move',
      fontSize: '14px',
      backgroundColor: 'rgba(255, 0, 0, .4)'
    };
    
    const opacity = isDragging ? 0 : 1;

    if ( !connectDragSource || !connectDropTarget ) return null;

    return connectDragSource(
      connectDropTarget(
        <div style={{...style, opacity}}>
          {'Widget:' + widget_name}
          <div style={{height: 200}}></div>
        </div>
      )
    )
  // }
};