import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { DashboardStaticWidgetLayout } from '@src/components';

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
}, dispatch);

export const DashboardStaticWidgetsConnected = connect(
    mapStateToProps, mapDispatchToProps)(DashboardStaticWidgets);