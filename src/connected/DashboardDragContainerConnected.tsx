import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
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

// import {
//   DashboardDragModelSelector,
//   DashboardStaticModelSelector,
//   isDashboardDragModelCopiedSelector,
//   currentTargetIdSelector
// } from '@src/selectors';

/**
 * Тип перемещаемого элемента
 */
const ItemTypes = { WIDGET: 'WIDGET' };

/**
 * Спецификация Drop Target. Необходима для получения параметров
 * из компонента в библиотеку react-dnd
 */
const containerTarget = { drop: () => {}, };

/**
 * Функция сбора. Передает параметры из библиотеки React-DnD в 
 * компонент.
 */
const dropTargetCollect = ( connect: ReactDnd.DropTargetConnector ) => ({
  connectDropTarget: connect.dropTarget(),
});

interface StateProps {
  DashboardStaticModel: DashboardInterface,
  DashboardDragModel: DashboardInterface,
  isDashboardDragModelCopied: boolean,
  currentTargetId: number,
}

interface DispatchProps {
  copyDashboardFromDashboardStaticModel:
    ( payload: DashboardInterface ) => any,
  reorderDashboardDragModelDataCollectionOnlyOneTime:
    ( payload: { model: DashboardInterface['dash_data'], id: number } ) => any,
  changeCurrentTargetId:
    ( payload: number ) => any,
}

interface OwnProps {}


const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    DashboardStaticModel:
      ( state: RootState ) => state.dashboard.DashboardStaticModel,
    DashboardDragModel:
      ( state: RootState ) => state.dashboard.DashboardDragModel,
    isDashboardDragModelCopied:
      ( state: RootState ) => state.dashboard.isDashboardDragModelCopied,
    currentTargetId:
      ( state: RootState ) => state.dashboard.currentTargetId,
  });
  

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = 
( dispatch: Dispatch ) => bindActionCreators({
  copyDashboardFromDashboardStaticModel:
    syncActionCreators.copyDashboardFromDashboardStaticModel,
  reorderDashboardDragModelDataCollectionOnlyOneTime:
    asyncActionCreators.reorderDashboardDragModelDataCollectionOnlyOneTime,
  changeCurrentTargetId: syncActionCreators.changeCurrentTargetId,
}, dispatch);


export const DashboardDragContainerConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(DropTarget(
    ItemTypes.WIDGET, containerTarget, dropTargetCollect)(
      connect<StateProps, DispatchProps, OwnProps, RootState>(
        mapStateToProps, mapDispatchToProps)(DashboardDragContainer)
      )
    );