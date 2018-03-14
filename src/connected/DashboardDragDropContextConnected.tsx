import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';
import DragDropContext = ReactDnd.DragDropContext;

import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

import { DashboardDragDropContext } from '@src/components';

import {
  syncActionCreators
} from '@src/redux/dashboard';

import {
  DashboardInterface,
} from '@src/interfaces';

import {
  DashboardCollectionSelector,
  DraggableWidgetsCollectionSelector,
  isDraggableWidgetsCollectionSelector,
  DraggableSelectedCheckboxSelector,
  SelectedCheckboxSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
  DashboardCollection: DashboardInterface,
  DraggableWidgetsCollection: DashboardInterface,
  isDraggableWidgetsCollection: boolean,
  DraggableSelectedCheckbox: string,
  SelectedCheckbox: string,
}>({
  DashboardCollection: DashboardCollectionSelector,
  DraggableWidgetsCollection: DraggableWidgetsCollectionSelector,
  isDraggableWidgetsCollection: isDraggableWidgetsCollectionSelector,
  DraggableSelectedCheckbox: DraggableSelectedCheckboxSelector,
  SelectedCheckbox: SelectedCheckboxSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  createDraggableDashboard:
    syncActionCreators.createDraggableDashboard,
}, dispatch);

export const DashboardDragDropContextConnected = DragDropContext(
  MultiBackend(HTML5toTouch))(connect(
    mapStateToProps, mapDispatchToProps)(DashboardDragDropContext));