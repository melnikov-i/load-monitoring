// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { Dispatch, RootState } from '@src/redux';
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
  beginDrag: ( props: DashboardDragItemProps ) => {
    console.log('props.element.id:', props.element.id);
    console.log('props.element.index:',
      props.element.findItem(props.element.id).index);
    return {
      id: props.element.id,
      originalIndex: props.element.findItem(props.element.id).index,
    }
  },

  endDrag: ( props: DashboardDragItemProps,
  monitor: ReactDnd.DragSourceMonitor ) => {
    const droppedId: string = monitor.getItem()['id'];
    const originalIndex: string = monitor.getItem()['originalIndex'];
    console.log('endDragId:', droppedId);
    const didDrop = monitor.didDrop();
    if ( !didDrop ) props.element.moveItem(droppedId, originalIndex);
  }
};


/**
 * Спецификация Drop Target. Необходима для получения параметров
 * из компонента в библиотеку react-dnd
 */

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardDragItemProps> = {
  canDrop: () => false,

  hover: ( props: DashboardDragItemProps,
  monitor: ReactDnd.DropTargetMonitor ) => {
    const draggedId: string = monitor.getItem()['id'];
    const { id: overId } = props.element;
    if ( draggedId !== overId ) {
      const { index: overIndex } = props.element.findItem(overId);
      props.element.moveItem(draggedId, overIndex);
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
  item: monitor.getItem(),
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


// const mapStateToProps = createStructuredSelector<RootState, {}>({});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

// }, dispatch);

export const DashboardDragItemConnected = DropTarget(
    ItemTypes.WIDGET, widgetTarget, dropTargetCollect
      )(DragSource(
        ItemTypes.WIDGET, widgetSource, dragSourceCollect
        )(DashboardDragItem)
      );

  //     connect(
  // mapStateToProps, mapDispatchToProps)(
  //   );