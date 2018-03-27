import * as React from 'react';

import {
  // WidgetInterface,
  DashboardInterface
} from '@src/interfaces';

import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

// import {
//   MENU_LAYOUT_BIG_WIDTH,
//   MENU_LAYOUT_MIDDLE_WIDTH,
//   MIDDLE_SCREEN_MAX,
// } from '@src/styled';

// import {
//   getPreviewWidth,
//   trottler
// } from '@src/libs';


/**
 * Ширина меню, которую надо отнять от общей ширины,
 * Чтобы корректно посчитать ширину виджета.
 */

// const menuWidth = () => {
//   if ( parseInt(MIDDLE_SCREEN_MAX) > window.innerWidth )
//     return MENU_LAYOUT_MIDDLE_WIDTH;
//   return MENU_LAYOUT_BIG_WIDTH
// };


export interface DashboardDragLayerPros {
  isDragging?: boolean,
  currentOffset?: any,
  /* Заголовок виджета */
  // widget_name: WidgetInterface['widget_name'],
  /* Коэффициент ширины виджета */
  DashboardDragModel: DashboardInterface,
  /* Ключ, задающий поведение ширины основного меню на различных экранах */
  // isMenuOpenedOnSmallScreen: boolean,
}

export class DashboardDragLayer
extends React.Component<DashboardDragLayerPros> {
  render() {
    const {
      isDragging,
      currentOffset,
      // widget_name,
      // width,
    } = this.props;
    
    if ( isDragging ) {
      return (
        <div
          style={{
            boxSizing: 'border-box',
            opacity: 0.6,
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 100,
            transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
            // width: `calc((100% - ${ menuWidth() } - 30px) 
            //   * ${getPreviewWidth(item.width)})`,
          }}
        >
          <DashboardWidgetConnected
            widget_name={'widget_name'}
            width={'100'}
            margin={undefined}
          />
        </div>
      );
    } else {
      return null;      
    }
  }
}