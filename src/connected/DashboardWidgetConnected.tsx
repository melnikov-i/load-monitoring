import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators,
} from '@src/redux/dashboard'

import {
  DashboardWidget,
  DashboardWidgetProps
} from '@src/components';

import {
  SeriesDataCollectionSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState,
DashboardWidgetProps, {
    SeriesDataCollection: any,
  }>({
    SeriesDataCollection: SeriesDataCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeSeriesDataRequestFromAPI: 
    asyncActionCreators.makeSeriesDataRequestFromAPI
}, dispatch);

export const DashboardWidgetConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DashboardWidget);