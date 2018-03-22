import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;

import {
  DashboardDragSourceDropTarget,
  DashboardDragSourceDropTargetProps,
} from '@src/components';

import {
  trottler
} from '@src/libs';


import {
  MoveWidgetsInterface,
} from '@src/interfaces';

import {
  syncActionCreators
} from '@src/redux/dashboard';

const ItemTypes = {
  WIDGET: 'WIDGET'
};

let source: number = -1;

const widgetSource: 
ReactDnd.DragSourceSpec<DashboardDragSourceDropTargetProps> = {
  beginDrag: (props: DashboardDragSourceDropTargetProps) => {
    source = props.element.index !== undefined
      ? props.element.index - 1 : -1;
    return {
      width: props.element.width,
      widget_name: props.element.widget_name,
      device_id: props.element.device_id,
    };
  },
};

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardDragSourceDropTargetProps> = {
  drop: (
    props: DashboardDragSourceDropTargetProps,
    monitor: ReactDnd.DropTargetMonitor,
    component: React.Component<DashboardDragSourceDropTargetProps>) => {
      const items: MoveWidgetsInterface = {
        source: source,
        target: props.element.index !== undefined
          ? props.element.index - 1 : -1,
      }
      if ( props.element.index !== undefined ) {
        props.reorderDraggableWidgetsCollection(items);        
      }
    },
};

const dragSourceCollect = (
  connect: ReactDnd.DragSourceConnector,
  monitor: ReactDnd.DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  });

const dropTargetCollect = (
  connect: ReactDnd.DropTargetConnector,
  monitor: ReactDnd.DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    getSourceClientOffset: trottler(monitor.getSourceClientOffset()),
  });

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  reorderDraggableWidgetsCollection: 
    syncActionCreators.reorderDraggableWidgetsCollection,
}, dispatch);


export const DashboardDragSourceDropTargetConnected = connect(
  mapStateToProps, mapDispatchToProps)(DropTarget(
    ItemTypes.WIDGET, widgetTarget, dropTargetCollect)(
      DragSource(
        ItemTypes.WIDGET, widgetSource, dragSourceCollect)(
          DashboardDragSourceDropTarget)
        )
      );