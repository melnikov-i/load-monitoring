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

// import {
//   SeriesDataCollectionSelector,
// } from '@src/selectors';

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
  makeSeriesDataRequestFromAPI: any,
}

type Selector<TInput, TProps, TOutput> = 
( state: TInput, props?: TProps ) => TOutput;

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> = 
  createStructuredSelector<RootState, StateProps>({
    SeriesDataCollection:
      createSelector<StateProps, OwnProps, TOutput, T1>(
        selector: Selector<TInput, TProps, T1>,
      ),
    });
    
    // ( state: RootState, ownProps: OwnProps ) =>
    //   state.dashboard.SeriesDataCollection[ownProps.widget_name],
    //   ( SeriesDataCollectionItem ) => SeriesDataCollectionItem,

const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = 
( dispatch: Dispatch ) => bindActionCreators({
  makeSeriesDataRequestFromAPI: 
    asyncActionCreators.makeSeriesDataRequestFromAPI
}, dispatch);

export const DashboardWidgetConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(DashboardWidget);