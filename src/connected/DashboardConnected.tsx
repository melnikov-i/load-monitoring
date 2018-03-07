import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import {
  asyncActionCreators,
} from '@src/redux/dashboard';

import { Dashboard } from '@src/components';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardWasRequestedFromAPISelector,
  DashboardCollectionSelector,
  MainHeaderButtonWasClickedSelector,
  SelectedCheckboxSelector,
} from '@src/selectors';


const mapStateToProps = createStructuredSelector<RootState, {
    DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
    DashboardCollection: DashboardInterface,
    MainHeaderButtonWasClicked: boolean,
    SelectedCheckbox: string,
  }>({
    DashboardWasRequestedFromAPI: DashboardWasRequestedFromAPISelector,
    DashboardCollection: DashboardCollectionSelector,
    MainHeaderButtonWasClicked: MainHeaderButtonWasClickedSelector,
    SelectedCheckbox: SelectedCheckboxSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeDashboardRequestFromAPI: 
    asyncActionCreators.makeDashboardRequestFromAPI,
}, dispatch);

export const DashboardConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Dashboard);