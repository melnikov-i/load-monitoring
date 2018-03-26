import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import * as ReactDnd from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

const DragDropContext = ReactDnd.DragDropContext;
const DropTarget = ReactDnd.DropTarget;

import { DashboardDragContainer } from '@src/components';


import {
  DashboardInterface,
} from '@src/interfaces';


import {
  DashboardDragModelSelector,
  DashboardStaticModelSelector,
  isDashboardDragModelCopiedSelector
} from '@src/selectors';


import {
  syncActionCreators
} from '@src/redux/dashboard';


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
    DashboardStaticModel: DashboardInterface,
    DashboardDragModel: DashboardInterface,
    isDashboardDragModelCopied: boolean,
  }>({
    DashboardStaticModel: DashboardStaticModelSelector,
    DashboardDragModel: DashboardDragModelSelector,
    isDashboardDragModelCopied: isDashboardDragModelCopiedSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  copyDashboardFromDashboardStaticModel:
    syncActionCreators.copyDashboardFromDashboardStaticModel
}, dispatch);


export const DashboardDragContainerConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(DropTarget(
    ItemTypes.WIDGET, containerTarget, dropTargetCollect)(connect(
        mapStateToProps, mapDispatchToProps)(DashboardDragContainer)
      )
    );