import * as React from 'react';
import * as ReactDnd from 'react-dnd';
// import update from 'immutability-helper';

import {
  DashboardInterface,
  // WidgetInterface,
  DraggableDashboardChangerIterface,

  DashboardDragWidgetInterface
} from '@src/interfaces';


import {
  emergence,
  // Widget
} from '@src/styled';


// import { DashboardDragLayer } from '@src/components';
import { Spinner } from '@src/components';
import DashboardDragWidgetConnected from 
  '@src/usage/DashboardDragWidgetUsage';


interface DashboardDragDropContextProps {
  /*  */
  DashboardCollection: DashboardInterface,
  /*  */
  DraggableWidgetsCollection: DashboardInterface,
  /*  */
  SelectedCheckbox: string,
  /*  */
  DraggableSelectedCheckbox: string,
  /*  */
  isDraggableWidgetsCollection: boolean,
  /*  */
  createDraggableDashboard:
  ( payload: DraggableDashboardChangerIterface ) => any,
  /*  */
  connectDropTarget?: ReactDnd.ConnectDropTarget,
}

export const DashboardDragDropContext: 
React.SFC<DashboardDragDropContextProps> = (props) => {
  
  const {
    DashboardCollection,
    DraggableWidgetsCollection,
    SelectedCheckbox,
    // DraggableSelectedCheckbox,
    isDraggableWidgetsCollection,
    createDraggableDashboard,
    connectDropTarget
  } = props;

  
  /**
   * Перемещает виджеты.
   */

  const moveWidget = ( id, atIndex ) => {
    const { widget, index } = findWidget(id);
    console.log('widget:', widget);
    console.log('index:', index);
  };


  /**
   * Ищет виджет
   */

  const findWidget = ( id ) => {
    const widgets = DashboardCollection.dash_data;
    const widget = widgets.filter( ( w ) => (
        w.device_id + w.widget_name ) === id )[0];
    return {
      widget,
      index: widgets.indexOf(widget),
    }
  }


  if ( !isDraggableWidgetsCollection ) {
    const item: DraggableDashboardChangerIterface = {
      dashboard: DashboardCollection,
      checkbox: SelectedCheckbox,
    }
    createDraggableDashboard(item);
    return (
      <Spinner
        width={3}
        color={'#2f4050'}
        bgColor={'#f3f3f4'}
      />
    );
  }

  // const series: any = [
  //   {
  //     // color: '#1ab394',
  //     data: [
  //       45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
  //       23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
  //       65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
  //       12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
  //       67, 43, 1, 34, 88, 99, 33, 99,
  //     ]
  //   }
  // ];


  /**
   * Из-за redux мы не можем прокинуть connectDropTarget 
   * по-человечески. Поэтому необходимо выполнить дополнительную
   * проверку
   */
  
  if ( !connectDropTarget ) return null;


  /**
   * Особенностью React-DnD является то, что она ждет в качестве
   * корневого элемента JSX.Element. Поэтому в данном месте
   * необходимо повторить стиль WidgetLayout
   */

      // { Компонент, отображаемый при перемещении под курсором }
      // <DashboardDragLayer />
  return connectDropTarget(
    <div /* WidgetLayout */
      style={{
        display: 'block',  
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: '20px 15px 0',
        animationName: emergence,
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationFillMode: 'both',
        // position: 'relative',
      }}
    >

      {DraggableWidgetsCollection.dash_data.map((widget, i) => {
        const item: DashboardDragWidgetInterface = {
          id: widget.device_id + widget.widget_name,
          findWidget: findWidget,
          moveWidget: moveWidget,
        }
        // console.log('item:', item);
        return (
          <DashboardDragWidgetConnected
            item={item}
            key={widget.device_id + widget.widget_name}
          />
        )
      })}
    </div>
  );
};
        /* Параметры, передаваемые в виджет */
        // const element: WidgetInterface = {
        //   index: i + 1,
        //   width: DraggableSelectedCheckbox,
        //   widget_name: e.widget_name,
        //   device_id: e.device_id,
        //   isPreview: false,
        //   series: series,
        // }
          // <Widget
          //   key={i}
          //   width={DraggableSelectedCheckbox}
          //   margin={i + 1}
          // >
          // </Widget>