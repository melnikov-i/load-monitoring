import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;

import {
  DashboardDragWidget,
  DashboardDragWidgetProps,
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
ReactDnd.DragSourceSpec<DashboardDragWidgetProps> = {
  beginDrag: ( props: DashboardDragWidgetProps ) => {
    return {
      id: props.item.id,
      originalIndex: props.item.findWidget(props.item.id).index,
    }
  },
  endDrag: ( props: DashboardDragWidgetProps,
  monitor: ReactDnd.DragSourceMonitor ) => {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();
    if ( !didDrop ) props.item.moveWidget(droppedId, originalIndex);
  }
};


/**
 * Спецификация Drop Target. Необходима для получения параметров
 * из компонента в библиотеку react-dnd
 */

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardDragWidgetProps> = {
  canDrop: () => false,

  hover: ( props: DashboardDragWidgetProps,
  monitor: ReactDnd.DropTargetMonitor ) => {
    // const { id: draggedId } = monitor.getItem();
    // const { id: overId } = props;
    // if ( draggedId !== overId ) {
    //   const { index: overIndex } = props.item.findWidget(overId);
    //   props.item.moveWidget(draggedId, overIndex);
    // }
  },
};


/**
 * Функция сбора Drag Source. Передает параметры из библиотеки в
 * ReactDnD компонент.
 */

const dragSourceCollect = ( connect: ReactDnd.DragSourceConnector,
monitor: ReactDnd.DragSourceMonitor ) => ({
  connectDragSource: connect.dragSource(),
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


const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

}, dispatch);

export const DashboardDragWidgetConnected = connect(
  mapStateToProps, mapDispatchToProps)(DropTarget(
    ItemTypes.WIDGET, widgetTarget, dropTargetCollect
      )(DragSource(
        ItemTypes.WIDGET, widgetSource, dragSourceCollect
        )(DashboardDragWidget)
      )
    );