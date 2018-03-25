import * as React from 'react';
import * as ReactDnd from 'react-dnd';

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

  element: any,
}

type DashboardDragItemState = {
  element: any,
  // id: string,
  // widgetName: string,
  // series: string,
  // moveItem: any,
  // findItem: any,
};


export class DashboardDragItem 
extends React.Component<DashboardDragItemProps, DashboardDragItemState> {
  render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      element
    } = this.props;

    const style = {
      border: '1px dashed gray',
      boxSizing: 'border-box',
      width: getWidth(element.width),
      display: 'inline-block',
      verticalAlign: 'top',
      marginRight: checkPosition(Number(element.width), element.margin)
          ? ( element.width === '1' ) ? '0' : '2%' : '0',
      marginBottom: ( element.width === '1' ) ? '20px' : '2%',
      cursor: 'move',
      fontSize: '14px',
      backgroundColor: 'rgba(255, 0, 0, .4)'
    };
    
    const opacity = isDragging ? 0 : 1;

    if ( !connectDragSource || !connectDropTarget ) return null;

    return connectDragSource(
      connectDropTarget(
        <div style={{...style, opacity}}>
          {'Widget:' + element.widget_name + element.series}
          <div style={{height: 400}}></div>
        </div>
      )
    )
  }
}