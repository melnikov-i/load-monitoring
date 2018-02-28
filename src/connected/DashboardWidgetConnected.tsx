import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import * as ReactDnd from 'react-dnd';

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;

import {
  DashboardWidget,
  DashboardWidgetProps,
} from '@src/components';

const ItemTypes = {
  WIDGET: 'WIDGET'
};

const widgetSource: 
ReactDnd.DragSourceSpec<DashboardWidgetProps> = {
  beginDrag: (props) => ({
    id: props.element.index,
    index: props.element.index - 1,
  }),
};

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardWidgetProps> = {
  hover: (props, monitor, component) => {},
};

const dragSourceCollect = (
  connect: ReactDnd.DragSourceConnector,
  monitor: ReactDnd.DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
    getItem: monitor.getItem(),
  });

const dropTargetCollect = (
  connect: ReactDnd.DropTargetConnector,
  monitor: ReactDnd.DropTargetMonitor) => ({
    connectDropTarget: connect.dropTarget(),
  });

const mapStateToProps = createStructuredSelector<RootState, {

}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  
}, dispatch);


export const DashboardWidgetConnected = DropTarget(
  ItemTypes.WIDGET, widgetTarget, dropTargetCollect)(
    DragSource(
      ItemTypes.WIDGET, widgetSource, dragSourceCollect)(
        connect(
          mapStateToProps, mapDispatchToProps)(DashboardWidget)
        )
      );