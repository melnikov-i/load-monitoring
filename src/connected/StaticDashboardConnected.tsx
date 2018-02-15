import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
// import { withRouter } from 'react-router-dom';

import { StaticDashboard } from '@src/components';

import { 
  
} from '@src/redux/dashboard';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardCollectionSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  DashboardCollection: DashboardInterface,
}>({
  DashboardCollection: DashboardCollectionSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  
}, dispatch);

export const StaticDashboardConnected = 
  // withRouter(
    connect(mapStateToProps, mapDispatchToProps)(StaticDashboard);
  // );