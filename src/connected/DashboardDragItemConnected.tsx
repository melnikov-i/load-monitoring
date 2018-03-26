import * as ReactDnd from 'react-dnd';

const DragSource = ReactDnd.DragSource;
const DropTarget = ReactDnd.DropTarget;

import {
  DashboardDragItem,
  DashboardDragItemProps,
} from '@src/components';


/**
 * Тип перемещаемого элемента
 */

const ItemTypes = {
  WIDGET: 'WIDGET'
};


/**
 * Спецификация Drag Source. Необходима для получения параметров
 * из компонента в библиотеку React-DnD
 */

const widgetSource:
ReactDnd.DragSourceSpec<DashboardDragItemProps> = {
  
  /**
   * Вызывается при начале перемещения какого-либо элемента
   */

  beginDrag: ( props: DashboardDragItemProps ) => {
    return {
      /* ID перемещаемого виджета (строка) */
      id: props.id,
    }
  },
  endDrag: ( props: DashboardDragItemProps, 
  monitor: ReactDnd.DragSourceMonitor ) => {
    const didDrop = monitor.didDrop()

    if (!didDrop) {
      props.clearCurrentTargetId(-1);
    }
  }
};


/**
 * Спецификация Drop Target. Необходима для получения параметров
 * из компонента в библиотеку react-dnd
 */

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardDragItemProps> = {
  canDrop: () => false,

  
  /**
   * Вызывается при наведении перемещаемого элемента на соседний
   * не перемещаемый в этот же момент времени элемент
   */

  hover: ( props: DashboardDragItemProps,
  monitor: ReactDnd.DropTargetMonitor ) => {
    /* ID перемещаемого виджета */
    const draggedId: string = monitor.getItem()['id'];
    /* ID виджета, на который передвиули перемещаемый виджет */
    const overId: string = props.id;
    if ( draggedId !== overId ) {
      /* Индекс перемещаемого виджета */
      const sourceIndex: number = Number(props.findWidget(draggedId));
      /* Индекс целевого виджета */
      const targetIndex: number = Number(props.findWidget(overId));
      /* Функция перемещения виджетов */
      props.moveWidgets(sourceIndex, targetIndex);
    }
  },
};


/**
 * Функция сбора Drag Source. Передает параметры из библиотеки в
 * ReactDnD компонент.
 */

const dragSourceCollect = ( connect: ReactDnd.DragSourceConnector,
monitor: ReactDnd.DragSourceMonitor ) => ({
  connectDragSource: connect.dragSource(),
  // item: monitor.getItem(),
  isDragging: monitor.isDragging(),
});


/**
 * Функция сбора Drop Target. Передает параметры из библиотеки в
 * ReactDnD компонент.
 */

const dropTargetCollect = ( connect: ReactDnd.DropTargetConnector,
monitor: ReactDnd.DropTargetMonitor ) => ({
  connectDropTarget: connect.dropTarget(),
});


export const DashboardDragItemConnected = DropTarget(
    ItemTypes.WIDGET, widgetTarget, dropTargetCollect
      )(DragSource(
        ItemTypes.WIDGET, widgetSource, dragSourceCollect
        )(DashboardDragItem)
      );