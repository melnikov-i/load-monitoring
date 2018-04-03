import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  syncActionCreators,
  asyncActionCreators,
} from '@src/redux/dashboard';

import { Dashboard } from '@src/components';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardStateKeySelector,
  // DashboardWasRequestedFromAPISelector,
  DashboardStaticModelSelector,
  MainHeaderButtonWasClickedSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, {
    DashboardStateKey: string,
    // DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
    DashboardStaticModel: DashboardInterface,
    MainHeaderButtonWasClicked: boolean,
  }>({
    DashboardStateKey: DashboardStateKeySelector,
    // DashboardWasRequestedFromAPI: DashboardWasRequestedFromAPISelector,
    DashboardStaticModel: DashboardStaticModelSelector,
    MainHeaderButtonWasClicked: MainHeaderButtonWasClickedSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDashboardRequestFromAPI: 
    asyncActionCreators.makeDashboardRequestFromAPI,
  makeSeriesDataRequestFromAPI:
    asyncActionCreators.makeSeriesDataRequestFromAPI,
  switchDashboardStateKeyValue:
    syncActionCreators.switchDashboardStateKeyValue,
}, dispatch);

export const DashboardConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Dashboard);