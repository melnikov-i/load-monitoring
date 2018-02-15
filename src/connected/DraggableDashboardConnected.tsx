import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
// import { withRouter } from 'react-router-dom';

import { DraggableDashboard } from '@src/components';

import { 
  syncActionCreators,
} from '@src/redux/dashboard';

import {
  SelectedCheckboxSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  SelectedCheckbox: string,
}>({
  SelectedCheckbox: SelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
}, dispatch);

export const DraggableDashboardConnected = 
  // withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DraggableDashboard);
  // );