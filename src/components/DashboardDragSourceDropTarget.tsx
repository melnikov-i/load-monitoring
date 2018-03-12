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
  MovingWidgets: WidgetInterface,
  isOver?: boolean,
  item?: any,
  reorderDraggableWidgetsCollection:
  ( payload: MoveWidgetsInterface ) => any,
  movindWidgets: ( payload: WidgetInterface ) => any,
  cleanMovindWidgets: () => any,
}

export const DashboardDragSourceDropTarget: 
React.SFC<DashboardDragSourceDropTargetProps> = (props) => {
  const {
    element,
    isDragging,
    connectDragSource,
    connectDropTarget,
    MovingWidgets,
    isOver,
    // item,
    // cleanMovindWidgets,
  } = props;

  if ( !connectDragSource || !connectDropTarget ) {
    return null;
  }

  console.log('Item:', MovingWidgets);

  const widgetItem: WidgetInterface = {
    widget_name: element.widget_name,
    device_id: element.device_id,
    isPreview: false,
  };

  // const getDashboard = (item: any) => {
  //   return {
  //     widget_name: item.widget_name,
  //     device_id: item.device_id,
  //     isPreview: false,
  //   }
  // };

  if ( isDragging ) {
    /* Вид перетаскиваемого drop target */
    if ( MovingWidgets.widget_name === '' ) {
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
            border: isOver ? '1px dashed #cecece' : 'none',
            backgroundColor: isOver ? '#e7eaec' : 'transparent',
            // boxShadow: isOver ? '0 0 15px 3px #ccc' : 'none',
            // position: isOver ? 'fixed' : 'static',
            // transform: isOver 
            //   ? `translate(${SourceX}, ${SourceY})`
            //   : 'none',
          }}
        >
          <DashboardWidgetConnected item={MovingWidgets} />
        </div>
      );
    }
  } else {
    /* Вид статического drop target */
    // const cleanSourceDropTarget = (e: React.MouseEvent<HTMLDivElement>) => {
    //   e.preventDefault();
    //   e.nativeEvent.stopImmediatePropagation();

    //   console.log('Mouse Out');
    //   cleanMovindWidgets();
    // }
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
          border: isOver ? '1px dashed #cecece' : 'none',
          backgroundColor: isOver ? '#e7eaec' : 'transparent',
        }}
        onMouseUp={}
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
          !isOver
            ? <DashboardWidgetConnected item={widgetItem} />
            : null
        }
      </div>
    );
  }
};
            // : <DashboardWidgetConnected item={getDashboard(item)} />