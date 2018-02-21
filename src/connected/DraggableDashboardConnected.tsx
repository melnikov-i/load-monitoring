import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

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

export const DraggableDashboardConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(connect(
    mapStateToProps, mapDispatchToProps)(DraggableDashboard
  ));