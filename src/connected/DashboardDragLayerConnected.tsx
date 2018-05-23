import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import * as ReactDnd from 'react-dnd';
import DragLayer = ReactDnd.DragLayer;

import { DashboardDragLayer } from '@src/components';

import {
  trottler
} from '@src/libs';

import { DashboardInterface } from '@src/interfaces';

interface StateProps {
  DashboardDragModel: DashboardInterface,
  isMenuOpenedOnSmallScreen: boolean,
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    DashboardDragModel:
      (state: RootState) => state.dashboard.DashboardDragModel,
    isMenuOpenedOnSmallScreen:
      (state: RootState) => state.main.isMenuOpenedOnSmallScreen,
  });
  

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export const DashboardDragLayerConnected = DragLayer((monitor) => ({
  isDragging: monitor.isDragging(),
  currentOffset: trottler(monitor.getSourceClientOffset()),
  item: monitor.getItem(),
}))(connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps, mapDispatchToProps)(DashboardDragLayer)
);
