import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { DashboardGridSettings } from '@src/components';

import { 
  // syncActionCreators,
  asyncActionCreators
} from '@src/redux/dashboard';

import { 
  syncActionCreators as mainHeadActionCreators
} from '@src/redux/mainHead';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DraggableSelectedCheckboxSelector,
  DraggableWidgetsCollectionSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  DraggableSelectedCheckbox: string,
  DraggableWidgetsCollection: DashboardInterface,
}>({
  DraggableWidgetsCollection: DraggableWidgetsCollectionSelector,
  DraggableSelectedCheckbox: DraggableSelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  // changeSelectedCheckbox: syncActionCreators.changeSelectedCheckbox,
  mainHeaderButtonSwitch: mainHeadActionCreators.mainHeaderButtonSwitch,
  sendChangedDashboardToAPI: asyncActionCreators.sendChangedDashboardToAPI,
}, dispatch);

export const DashboardGridSettingsConnected = connect(
    mapStateToProps, mapDispatchToProps)(DashboardGridSettings);