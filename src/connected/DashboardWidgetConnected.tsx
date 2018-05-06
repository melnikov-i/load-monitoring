import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import {
  createStructuredSelector,
  createSelector,
} from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators,
} from '@src/redux/dashboard';

import {
  WidgetInterface,
  DashboardInterface,
  ElementsOfDashboardCollectionInterface,
} from '@src/interfaces';

import { DashboardWidget } from '@src/components';

interface StateProps {
  SeriesDataCollection: any,
}

interface DispatchProps {
  makeSeriesDataRequestFromAPI: (payload: any) => any,
}

interface OwnProps {
  widget_name: WidgetInterface['widget_name'],
  width: DashboardInterface['dash_id']['dash_columns'],
  margin: number | undefined,
  elements: ElementsOfDashboardCollectionInterface,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getSeriesDataCollectionItem: Selector<RootState, any> = 
  (state: RootState, props: OwnProps) => 
    state.dashboard.SeriesDataCollection[props.widget_name];

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> = 
createStructuredSelector<RootState, StateProps>({
  SeriesDataCollection:
      createSelector(
        getSeriesDataCollectionItem,
        ( SeriesDataCollectionItem ) => SeriesDataCollectionItem,
      )
    });

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = 
( dispatch: Dispatch ) => bindActionCreators({
  makeSeriesDataRequestFromAPI: 
    asyncActionCreators.makeSeriesDataRequestFromAPI
}, dispatch);

export const DashboardWidgetConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(DashboardWidget);