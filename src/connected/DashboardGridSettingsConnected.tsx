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
  DraggableSelectedCheckboxSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  DraggableSelectedCheckbox: string,
}>({
  DraggableSelectedCheckbox: DraggableSelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
}, dispatch);

export const DashboardGridSettingsConnected = connect(
    mapStateToProps, mapDispatchToProps)(DashboardGridSettings
  );