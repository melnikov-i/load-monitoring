import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { DraggableDashboard } from '@src/components';

import { 
  syncActionCreators,
} from '@src/redux/dashboard';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  SelectedCheckboxSelector,
  DashboardCollectionSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  SelectedCheckbox: string,
  DashboardCollection: DashboardInterface,
}>({
  SelectedCheckbox: SelectedCheckboxSelector,
  DashboardCollection: DashboardCollectionSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
}, dispatch);

export const DraggableDashboardConnected = connect(
    mapStateToProps, mapDispatchToProps)(DraggableDashboard
  );
