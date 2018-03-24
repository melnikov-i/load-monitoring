import * as React from 'react';
import * as ReactDnd from 'react-dnd';
import DragLayer = ReactDnd.DragLayer;

import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

import {
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  MIDDLE_SCREEN_MAX,
} from '@src/styled';

import {
  getPreviewWidth,
  trottler
} from '@src/libs';

export interface DashboardDragLayerPros 
extends React.Props<DashboardDragLayerComponent> {
  isDragging?: boolean,
  currentOffset?: any,
  item?: any,
}

const menuWidth = () => {
  if ( parseInt(MIDDLE_SCREEN_MAX) > window.innerWidth )
    return MENU_LAYOUT_MIDDLE_WIDTH;
  return MENU_LAYOUT_BIG_WIDTH
}

class DashboardDragLayerComponent 
extends React.Component<DashboardDragLayerPros> {
  render() {
    const { isDragging, currentOffset, item } = this.props;
    if ( isDragging ) {
      return (
        <div
          className={'dashboardWidgetPreview'}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 100,
            transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
            width: `calc((100% - ${ menuWidth() } - 30px) 
              * ${getPreviewWidth(item.width)})`,
          }}
        >
          <DashboardWidgetConnected item={item} />
        </div>
      );
    } else {
      return null;      
    }
  }
}

export const DashboardDragLayer = DragLayer((monitor) => ({
  item: monitor.getItem(),
  isDragging: monitor.isDragging(),
  currentOffset: trottler(monitor.getSourceClientOffset()),
}))(DashboardDragLayerComponent)