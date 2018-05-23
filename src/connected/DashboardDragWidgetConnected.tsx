import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { DashboardDragWidget } from '@src/components';

import {
  WidgetInterface,
  DashboardInterface,
} from '@src/interfaces';

interface StateProps {
  SeriesDataCollection: any,
}

interface DispatchProps {}

interface OwnProps {
  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  margin: number | undefined,
}


const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    SeriesDataCollection:
    (state: RootState) => state.dashboard.SeriesDataCollection,
  });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> =
  ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const DashboardDragWidgetConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(DashboardDragWidget);
