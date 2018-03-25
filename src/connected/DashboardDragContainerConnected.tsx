import * as ReactDnd from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

const DragDropContext = ReactDnd.DragDropContext;
const DropTarget = ReactDnd.DropTarget;

import { DashboardDragContainer } from '@src/components';


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


export const DashboardDragContainerConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(DropTarget(
    ItemTypes.WIDGET, containerTarget, dropTargetCollect
  )(DashboardDragContainer));