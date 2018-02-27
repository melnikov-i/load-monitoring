import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';
import DragDropContext = ReactDnd.DragDropContext;
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

import { DashboardGrid } from '@src/components';

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

export const DashboardGridConnected = DragDropContext(
    MultiBackend(HTML5toTouch)
  )(connect(mapStateToProps, mapDispatchToProps)(DashboardGrid));