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
  syncActionCreators,
  asyncActionCreators
} from '@src/redux/dashboard';


import {
  DashboardDragModelSelector,
  DashboardStaticModelSelector,
  isDashboardDragModelCopiedSelector,
  currentTargetIdSelector
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
  drop: () => {},
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
    currentTargetId: number,
  }>({
    DashboardStaticModel: DashboardStaticModelSelector,
    DashboardDragModel: DashboardDragModelSelector,
    isDashboardDragModelCopied: isDashboardDragModelCopiedSelector,
    currentTargetId: currentTargetIdSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  copyDashboardFromDashboardStaticModel:
    syncActionCreators.copyDashboardFromDashboardStaticModel,
  reorderDashboardDragModelDataCollectionOnlyOneTime:
    asyncActionCreators.reorderDashboardDragModelDataCollectionOnlyOneTime,
  changeCurrentTargetId: syncActionCreators.changeCurrentTargetId,
}, dispatch);


export const DashboardDragContainerConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(DropTarget(
    ItemTypes.WIDGET, containerTarget, dropTargetCollect)(connect(
        mapStateToProps, mapDispatchToProps)(DashboardDragContainer)
      )
    );