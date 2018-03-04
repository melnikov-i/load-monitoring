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
  beginDrag: (props: DashboardWidgetProps) => ({
    id: props.element.index,
    index: props.element.index - 1,
  }),
};

const widgetTarget:
ReactDnd.DropTargetSpec<DashboardWidgetProps> = {
  hover: (
    props: DashboardWidgetProps,
    monitor: ReactDnd.DropTargetMonitor,
    component: React.Component<DashboardWidgetProps>) => {},
};

let lastUpdate = +new Date();

const getCustomClientOffset = (offset: ReactDnd.ClientOffset) => {
  if ( +new Date() - lastUpdate > 16 ) {
    lastUpdate = +new Date();
    return offset
  }
  return undefined;
};

const dragSourceCollect = (
  connect: ReactDnd.DragSourceConnector,
  monitor: ReactDnd.DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    // connectDragPreview: connect.dragPreview(),
    getClientOffset: getCustomClientOffset(monitor.getClientOffset()),
    isDragging: monitor.isDragging(),
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