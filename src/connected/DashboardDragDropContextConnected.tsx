import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

import DragDropContext = ReactDnd.DragDropContext;
import DropTarget = ReactDnd.DropTarget;

import { DashboardDragDropContext } from '@src/components';

// import {
//   trottler
// } from '@src/libs';

import {
  syncActionCreators
} from '@src/redux/dashboard';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardCollectionSelector,
  DraggableWidgetsCollectionSelector,
  isDraggableWidgetsCollectionSelector,
  DraggableSelectedCheckboxSelector,
  SelectedCheckboxSelector,
} from '@src/selectors';


/**
 * Тип перемещаемого элемента
 */

const ItemTypes = {
  WIDGET: 'WIDGET'
};

/**
 * Спецификация Drop Target. Необходима для получения параметров
 * из компонента в библиотеку react-dnd
 */

const containerTarget = {
  /*
   * drop() вызывается, когда соответствующий элемент перемещается
   * на текущий целевой target
   */

  drop: () => {},

  /**
   * hover() вызывается, когда соответствующий элемент надвигается
   * на текущий целевой target
   */

  // hover: () => {},

  /**
   * canDrop() вызывается для указывания, который целевой target
   * может принимать элемент.
   */

  // canDrop: () => {},

};


/**
 * Функция сбора. Передает параметры из библиотеки React-DnD в 
 * компонент.
 */

const dropTargetCollect = (connect: ReactDnd.DropTargetConnector,
monitor: ReactDnd.DropTargetMonitor) => ({
  connectDropTarget: connect.dropTarget(),
});


const mapStateToProps = createStructuredSelector<RootState, {
  DashboardCollection: DashboardInterface,
  DraggableWidgetsCollection: DashboardInterface,
  isDraggableWidgetsCollection: boolean,
  DraggableSelectedCheckbox: string,
  SelectedCheckbox: string,
}>({
  DashboardCollection: DashboardCollectionSelector,
  DraggableWidgetsCollection: DraggableWidgetsCollectionSelector,
  isDraggableWidgetsCollection: isDraggableWidgetsCollectionSelector,
  DraggableSelectedCheckbox: DraggableSelectedCheckboxSelector,
  SelectedCheckbox: SelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  createDraggableDashboard:
    syncActionCreators.createDraggableDashboard,
}, dispatch);

export const DashboardDragDropContextConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(DropTarget(
    ItemTypes.WIDGET, containerTarget, dropTargetCollect)(connect(
        mapStateToProps, mapDispatchToProps)(DashboardDragDropContext)
      )
    );


// export const DashboardDragDropContextConnected = DragDropContext(
//   MultiBackend(HTML5toTouch))(connect(
//     mapStateToProps, mapDispatchToProps)(
//       DropTarget(ItemTypes.WIDGET, widgetTarget, dropTargetCollect)(
//         DashboardDragDropContext
//       )
//     )
//   );


// const widgetTarget:
// ReactDnd.DropTargetSpec<DashboardDragSourceDropTargetProps> = {
//   drop: () => {},
  // drop: (
  //   props: DashboardDragSourceDropTargetProps,
  //   monitor: ReactDnd.DropTargetMonitor,
  //   component: React.Component<DashboardDragSourceDropTargetProps>) => {
  //     const items: MoveWidgetsInterface = {
  //       source: source,
  //       target: props.element.index !== undefined
  //         ? props.element.index - 1 : -1,
  //     }
  //     if ( props.element.index !== undefined ) {
  //       props.reorderDraggableWidgetsCollection(items);        
  //     }
  //   },
// };


// const dropTargetCollect = (
//   connect: ReactDnd.DropTargetConnector,
//   monitor: ReactDnd.DropTargetMonitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver({ shallow: true }),
//     getSourceClientOffset: trottler(monitor.getSourceClientOffset()),
//   });
