import * as React from 'react';

import {
  DashboardInterface
} from '@src/interfaces';

import DashboardDragWidgetConnected from
  '@src/usage/DashboardDragWidgetUsage';

import {
  MENU_LAYOUT_BIG_WIDTH,
  MENU_LAYOUT_MIDDLE_WIDTH,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX
} from '@src/styled';

import {
  getPreviewWidth,
} from '@src/libs';


export interface DashboardDragLayerPros {
  /*  */
  item?: string,
  /*  */
  isDragging?: boolean,
  /*  */
  currentOffset?: any,
  /* Модель перетаскиваемых виджетов */
  DashboardDragModel: DashboardInterface,
  /* Ключ, задающий поведение ширины основного меню на различных экранах */
  isMenuOpenedOnSmallScreen: boolean,
}

export class DashboardDragLayer
extends React.Component<DashboardDragLayerPros> {
  render() {
    const {
      item,
      isDragging,
      currentOffset,
      DashboardDragModel,
      isMenuOpenedOnSmallScreen
    } = this.props;

    if ( item === undefined ) return null;

    const width = DashboardDragModel.dash_id.dash_columns;
    const widgets = DashboardDragModel.dash_data;

    const getWidgetName = ( item: any ) => {
      if ( item !== null ) {
        const currentItem: any = item;
        const widget =
          widgets.filter( 
            w => (w.device_id + w.widget_name) === currentItem.id )[0];
        return widget.widget_name;
      } else {
        return '';
      }
    };

    const widget_name = getWidgetName(item);
    
    const menuWidth = () => {
      if ( window.innerWidth > parseInt(MIDDLE_SCREEN_MAX) ) {
        /* Ширина окна > BIG_SCREEN */
        return MENU_LAYOUT_BIG_WIDTH;        
      } else {
        /* Ширина она < BIG_SCREEN */
        if ( window.innerWidth > parseInt(SMALL_SCREEN_MAX) ) {
          /* Ширина окна > SMALL_SCREEN */
          return MENU_LAYOUT_MIDDLE_WIDTH;
        } else {
          if ( isMenuOpenedOnSmallScreen ) {
            /* Меню открыто */
            return MENU_LAYOUT_MIDDLE_WIDTH;
          } else {
            /* Меню спрятано */
            return '0px';
          }          
        }
      }
    };
    

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
            width: `calc((100% - ${ menuWidth() } - 30px) 
              * ${getPreviewWidth(width)})`,
          }}
        >
          <DashboardDragWidgetConnected
            widget_name={widget_name}
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