import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import * as ReactDnd from 'react-dnd';
import DragLayer = ReactDnd.DragLayer;

import { DashboardDragLayer } from '@src/components';

import {
  trottler
} from '@src/libs';

import { DashboardDragModelSelector } from '@src/selectors';

import { DashboardInterface } from '@src/interfaces';

const mapStateToProps = createStructuredSelector<RootState, {
    DashboardDragModel: DashboardInterface,
  }>({
    DashboardDragModel: DashboardDragModelSelector,
  });
  

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
}, dispatch);

export const DashboardDragLayerConnected = DragLayer((monitor) => ({
  isDragging: monitor.isDragging(),
  currentOffset: trottler(monitor.getSourceClientOffset()),
}))(connect(mapStateToProps, mapDispatchToProps)(DashboardDragLayer));