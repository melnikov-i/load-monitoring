import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  DashboardDragWidget,
  DashboardDragWidgetProps,
} from '@src/components';

import {
  SeriesDataCollectionSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState,
DashboardDragWidgetProps, {
    SeriesDataCollection: any,
  }>({
    SeriesDataCollection: SeriesDataCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const DashboardDragWidgetConnected = 
  connect(mapStateToProps, mapDispatchToProps)(DashboardDragWidget);