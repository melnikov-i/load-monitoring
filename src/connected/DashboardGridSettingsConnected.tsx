import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { DashboardGridSettings } from '@src/components';

import { 
  syncActionCreators,
} from '@src/redux/dashboard';

import {} from '@src/interfaces';

import {
  SelectedCheckboxSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  SelectedCheckbox: string,
}>({
  SelectedCheckbox: SelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
}, dispatch);

export const DashboardGridSettingsConnected = connect(
    mapStateToProps, mapDispatchToProps)(DashboardGridSettings
  );